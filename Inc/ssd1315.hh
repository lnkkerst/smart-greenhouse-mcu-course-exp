#pragma once

#include <string>
class SSD1315 {
private:
public:
  SSD1315() = default;

  void init();

  void clear_screen();
  void display_string(const std::string &&s);
};
