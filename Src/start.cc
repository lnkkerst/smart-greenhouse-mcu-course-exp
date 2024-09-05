#include "start.hh"
#include "aht20.hh"
#include "bmp280.hh"
#include "i2c.h"
#include "ssd1306.h"
#include "ssd1306_fonts.h"
#include "ssd1315.hh"
#include "stm32f1xx_hal.h"
#include <cstdio>

void start() {
  int count = 0;

  SSD1315 ssd1315;

  AHT20 aht20(&hi2c2);
  aht20.init();

  BMP280 bmp280(&hi2c2);
  bmp280.init();

  while (true) {
    HAL_Delay(500);

    char msg[36];

    aht20.measure();
    bmp280.measure();

    std::sprintf(msg, "%.2f %.2f\n%.2f %.2f\n%d", aht20.get_temperature(),
                 aht20.get_humidity(), bmp280.get_temperature(),
                 bmp280.get_pressure(), count);
    ssd1315.display_string(msg);

    count++;
  }
}
