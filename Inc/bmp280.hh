#pragma once

#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_i2c.h"

extern "C" {
#include "bmp280.h"
}

/**
 * @class BMP280
 * @brief BMP280 外设相关操作
 *
 */
class BMP280 {
private:
  // I2C 地址
  static constexpr auto ADDRESS = BMP280_I2C_ADDRESS_1;

  // 温度、大气压、湿度（湿度站位，不检测）
  float temperature, pressure, humidity;
  // 使用的I2C 接口
  I2C_HandleTypeDef *hi2c;
  // 驱动使用的句柄
  BMP280_HandleTypedef bmp280;

public:
  BMP280(I2C_HandleTypeDef *i2c);

  // 外设初始化
  void init();
  // 测量
  bool measure();
  // 获取温度
  float get_temperature() const;
  // 获取压强
  float get_pressure() const;
};
