#pragma once

#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_i2c.h"

extern "C" {
#include "bmp280.h"
}

class BMP280 {
private:
  float temperature, pressure, humidity;
  static constexpr auto ADDRESS = BMP280_I2C_ADDRESS_1;
  I2C_HandleTypeDef *hi2c;
  BMP280_HandleTypedef bmp280;

public:
  BMP280(I2C_HandleTypeDef *i2c);

  void init();
  bool measure();
  float get_temperature() const;
  float get_pressure() const;
};
