#include "aht20.hh"
#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_i2c.h"
#include <array>
#include <cstdint>
#include <tuple>

AHT20::AHT20(I2C_HandleTypeDef *_hi2c) {
  hi2c = _hi2c;
}

void AHT20::init() {
  HAL_Delay(40);
  uint8_t cmds[] = {INIT_CMD, 0x08, 0x00};
  HAL_I2C_Master_Transmit(hi2c, ADDRESS, cmds, 3, 100);
}

void AHT20::reset() {
  uint8_t cmds[] = {RESET_CMD};
  HAL_I2C_Master_Transmit(hi2c, ADDRESS, cmds, 1, 100);
}

void AHT20::trigger_measure() {
  uint8_t cmds[] = {TRIGGER_MEASURE_CMD, 0x33, 0x00};
  HAL_I2C_Master_Transmit(hi2c, ADDRESS, cmds, 3, 100);
}

std::tuple<bool, std::array<uint8_t, 6>> AHT20::read() {
  std::array<uint8_t, 6> data;
  HAL_I2C_Master_Receive(hi2c, ADDRESS, data.data(), 6, 100);
  uint8_t check = data[0];
  check &= 0x80; // 只留下bit7,用于判断数据是否有效
  return {check == 0x00, data};
}

bool AHT20::measure() {
  trigger_measure();
  HAL_Delay(100);
  auto [res, data] = read();
  if (res) {
    humidity = calc_humidity(data);
    temperature = calc_temperature(data);
  }
  return res;
}

float AHT20::calc_humidity(const Data &data) const {
  uint8_t tmp[3] = {0};
  uint32_t val = 0;
  float hmidity = 0;

  tmp[0] = data[1];
  tmp[1] = data[2];
  tmp[2] = data[3] & 0xF0;

  for (int i = 0; i < 3; i++) {
    val += tmp[i];
    val <<= 8;
  }
  val >>= 12;
  hmidity = (val / 1048576.0f) * 100.0f;

  return hmidity;
}

float AHT20::calc_temperature(const Data &data) const {
  uint8_t tmp[3] = {0};
  uint32_t val = 0;
  float temperature = 0;

  tmp[0] = (data[3] & 0x0F) << 4;
  tmp[0] += (data[4] & 0xF0) >> 4;
  tmp[1] = (data[4] & 0x0F) << 4;
  tmp[1] += (data[5] & 0xF0) >> 4;
  tmp[2] = (data[5] & 0x0F) << 4;
  tmp[2] += (data[6] & 0xF0) >> 4;

  for (int i = 0; i < 3; i++) {
    val += tmp[i];
    val <<= 8;
  }
  val >>= 12;
  temperature = ((val / 1048576.0f) * 200.0f) - 50.0f;

  return temperature;
}
