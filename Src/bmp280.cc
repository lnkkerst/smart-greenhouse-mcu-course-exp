#include "bmp280.hh"
#include "bmp280.h"
#include "stm32f1xx_hal_i2c.h"

BMP280::BMP280(I2C_HandleTypeDef *_hi2c) {
  hi2c = _hi2c;
}

void BMP280::init() {
  bmp280_init_default_params(&bmp280.params);
  bmp280.addr = ADDRESS;
  bmp280.i2c = hi2c;
  bmp280_init(&bmp280, &bmp280.params);
}

bool BMP280::measure() {
  return bmp280_read_float(&bmp280, &temperature, &pressure, &humidity);
}

float BMP280::get_temperature() const {
  return temperature;
}

float BMP280::get_pressure() const {
  return pressure;
}
