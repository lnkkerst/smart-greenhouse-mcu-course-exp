#pragma once

#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_adc.h"
#include "types.hh"

double get_adc_by_average(ADC_HandleTypeDef *hadc, int count = 10,
                          int pick = 6);

void switch_adc_channel(ADC_HandleTypeDef *hadc, u32 channel);
