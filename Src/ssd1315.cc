#pragma once

#include "ssd1315.hh"
#include "ssd1306.h"
#include "ssd1306_fonts.h"
#include <stdint.h>
#include <string>
void SSD1315::init() {
  ssd1306_Init();
}

void SSD1315::clear_screen() {
  ssd1306_Fill(Black);
}

void SSD1315::display_string(const std::string &&s) {
  clear_screen();
  ssd1306_SetCursor(0, 0);
  uint8_t y = 0;
  auto font = Font_7x10;
  for (auto c : s) {
    if (c == '\n') {
      y += font.height;
      ssd1306_SetCursor(0, y);
    }
    ssd1306_WriteChar(c, font, White);
  }
  ssd1306_UpdateScreen();
}
