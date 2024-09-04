#include "start.hh"
#include "i2c.h"
#include "ssd1306.h"
#include "ssd1306_fonts.h"
#include "ssd1306_tests.h"
#include "stm32f1xx_hal.h"
#include <string>

void start() {
  int count = 0;
  while (true) {
    ssd1306_SetCursor(0, 0);
    ssd1306_Fill(Black);
    ssd1306_WriteString(std::to_string(count).data(), Font_6x8, White);
    ssd1306_UpdateScreen();
    count++;
    HAL_Delay(1000);
  }
}
