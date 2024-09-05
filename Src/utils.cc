#include "utils.hh"
#include "stm32f1xx_hal_adc.h"
#include "types.hh"
#include <algorithm>
#include <vector>

double get_adc_by_average(ADC_HandleTypeDef *hadc, int count, int pick) {
  std::vector<u32> ad_values(count);
  for (int i = 0; i < count; ++i) {
    HAL_ADC_Start(hadc);
    HAL_ADC_PollForConversion(hadc, 10);
    u32 ad_value = HAL_ADC_GetValue(hadc);
    ad_values[i] = ad_value;
    HAL_ADC_Stop(hadc);
    HAL_Delay(10);
  }
  std::sort(ad_values.begin(), ad_values.end());
  double sum = 0;
  for (int i = (count - pick) >> 1, j = 0; j < pick; ++i, ++j) {
    sum += ad_values[i];
  }
  double average = sum / pick;
  return average;
}

void switch_adc_channel(ADC_HandleTypeDef *hadc, u32 channel) {
  ADC_ChannelConfTypeDef config = {0};
  config.Channel = channel;
  config.Rank = ADC_REGULAR_RANK_1;
  config.SamplingTime = ADC_SAMPLETIME_1CYCLE_5;
  HAL_ADC_ConfigChannel(hadc, &config);
}
