#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_i2c.h"
#include <array>
#include <cstdint>
#include <tuple>

class AHT20 {
  using Data = std::array<uint8_t, 6>;

private:
  static constexpr uint8_t ADDRESS = 0x70;
  static constexpr uint8_t INIT_CMD = 0xbe;
  static constexpr uint8_t TRIGGER_MEASURE_CMD = 0xac;
  static constexpr uint8_t RESET_CMD = 0xba;

  float temperature, humidity;

  I2C_HandleTypeDef *hi2c;

  float calc_humidity(const Data &data) const;
  float calc_temperature(const Data &data) const;

public:
  AHT20(I2C_HandleTypeDef *hi2c);

  void init();
  void trigger_measure();
  std::tuple<bool, std::array<uint8_t, 6>> read();
  bool measure();
  void reset();
  float get_temperature() const;
  float get_humidity() const;
};
