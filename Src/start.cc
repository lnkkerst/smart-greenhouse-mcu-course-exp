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

    char msg[64];

    aht20.measure();
    bmp280.measure();

    switch_adc_channel(&hadc1, ADC_CHANNEL_1);
    auto ldr = get_adc_by_average(&hadc1);
    ldr = (4095.0 - ldr) / 4095.0 * 100;

    switch_adc_channel(&hadc1, ADC_CHANNEL_2);
    auto sm = get_adc_by_average(&hadc1);
    sm = (4095.0 - sm) / 4095.0 * 100;

    switch_adc_channel(&hadc1, ADC_CHANNEL_3);
    auto pr = get_adc_by_average(&hadc1);
    pr = (4095.0 - pr) / 4095.0 * 100;

    auto pr_on = HAL_GPIO_ReadPin(PRDO_GPIO_Port, PRDO_Pin) == GPIO_PIN_RESET;

    auto smoke_on =
        HAL_GPIO_ReadPin(MQ2DO_GPIO_Port, MQ2DO_Pin) == GPIO_PIN_RESET;

    std::sprintf(msg,
                 "T:%.1fC RH:%.1f%%\nP:%.2fPa\nIL:%.1f%%\nSM:%.1f%%\nPR:%.1f%% "
                 "%s\nSMOKE:%s",
                 aht20.get_temperature(), aht20.get_humidity(),
                 bmp280.get_pressure(), ldr, sm, pr, pr_on ? "on" : "off",
                 smoke_on ? "on" : "off");
    ssd1315.display_string(msg);

    if (smoke_on) {
      HAL_TIM_PWM_Start(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
      HAL_TIM_PWM_Stop(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
      HAL_TIM_PWM_Start(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
      HAL_TIM_PWM_Stop(&htim3, TIM_CHANNEL_1);
      HAL_Delay(100);
    }

    ++count;
  }
}
