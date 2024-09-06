#pragma once
#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_i2c.h"
#include <array>
#include <cstdint>
#include <tuple>

/**
 * @class AHT20
 * @brief AHT20 外设相关操作
 *
 */
class AHT20 {
  // 存储读取的数据
  using Data = std::array<uint8_t, 6>;

private:
  // I2C 地址
  static constexpr uint8_t ADDRESS = 0x70;
  // 初始化指令
  static constexpr uint8_t INIT_CMD = 0xbe;
  // 启动测量指令
  static constexpr uint8_t TRIGGER_MEASURE_CMD = 0xac;
  // 软重启指令
  static constexpr uint8_t RESET_CMD = 0xba;

  // 测量的温度和湿度
  float temperature, humidity;

  // 使用的 I2C 接口
  I2C_HandleTypeDef *hi2c;

  // 根据采集到数据计算湿度
  float calc_humidity(const Data &data) const;

  // 根据采集到的数据计算温度
  float calc_temperature(const Data &data) const;

public:
  AHT20(I2C_HandleTypeDef *hi2c);

  // 初始化外设
  void init();
  // 启动测量
  void trigger_measure();
  // 读取测量值
  std::tuple<bool, std::array<uint8_t, 6>> read();
  // 完整的测量流程，包含启动测量、读取数据、计算
  bool measure();
  // 软重启
  void reset();
  // 获取温度
  float get_temperature() const;
  // 获取湿度
  float get_humidity() const;
};
