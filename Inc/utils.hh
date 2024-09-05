#pragma once

#include "stm32f1xx_hal.h"

double get_adc_by_average(ADC_HandleTypeDef *hadc, int count = 10,
                          int pick = 6);
