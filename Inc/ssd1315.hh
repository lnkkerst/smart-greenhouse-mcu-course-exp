#pragma once

#include <string>
/**
 * @class SSD1315
 * @brief SSD1315 外设相关操作
 *
 */
class SSD1315 {
private:
public:
  SSD1315() = default;

  // 初始化外设
  void init();

  // 清屏
  void clear_screen();
  // 显示字符串，支持换行符分隔多行
  void display_string(const std::string &&s);
};
