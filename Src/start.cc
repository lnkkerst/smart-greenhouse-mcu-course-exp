#include "start.hh"
#include "adc.h"
#include "aht20.hh"
#include "bmp280.hh"
#include "i2c.h"
#include "main.h"
#include "ssd1315.hh"
#include "stm32f103xb.h"
#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_gpio.h"
#include "stm32f1xx_hal_tim.h"
#include "tim.h"
#include "utils.hh"
#include <cstdio>

void start() {
  int count = 0;

  SSD1315 ssd1315;
  ssd1315.init();

  AHT20 aht20(&hi2c2);
  aht20.init();

  BMP280 bmp280(&hi2c2);
  bmp280.init();

  htim3.Instance->CCR1 = 1;

  while (true) {
    HAL_Delay(500);

    char msg[36];

    aht20.measure();
    bmp280.measure();

    switch_adc_channel(&hadc1, ADC_CHANNEL_1);
    auto ldr = get_adc_by_average(&hadc1);
    switch_adc_channel(&hadc1, ADC_CHANNEL_2);
    auto sm = get_adc_by_average(&hadc1);

    std::sprintf(msg, "%.2f %.2f\n%.2f %.2f\n%.2f %.2f\n%d",
                 aht20.get_temperature(), aht20.get_humidity(),
                 bmp280.get_temperature(), bmp280.get_pressure(), ldr, sm,
                 count);
    ssd1315.display_string(msg);

    if (HAL_GPIO_ReadPin(MQ2DO_GPIO_Port, MQ2DO_Pin) == GPIO_PIN_RESET) {
      HAL_TIM_PWM_Start(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
      HAL_TIM_PWM_Stop(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
      HAL_TIM_PWM_Start(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
      HAL_TIM_PWM_Stop(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
    }

    count++;
  }
}
