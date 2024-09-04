#include "start.hh"
#include "aht20.hh"
#include "i2c.h"
#include "ssd1306.h"
#include "ssd1306_fonts.h"
#include "stm32f1xx_hal.h"
#include <cstdio>

void write_oled(char *s) {
  ssd1306_Fill(Black);
  ssd1306_SetCursor(0, 0);
  ssd1306_WriteString(s, Font_7x10, White);
  ssd1306_UpdateScreen();
}

void start() {
  int count = 0;
  ssd1306_Init();
  AHT20 aht(&hi2c2);
  aht.init();
  while (true) {
    HAL_Delay(500);
    char msg[36];
    auto res = aht.measure();

    std::sprintf(msg, "%d %.2f %.2f %d", res, aht.temperature, aht.humidity,
                 count);
    write_oled(msg);
    count++;
  }
}
