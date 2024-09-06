#pragma once

#include "stm32f1xx_hal.h"
#include "stm32f1xx_hal_adc.h"
#include "types.hh"

/**
 * @brief 二级数字滤波法 ADC
 *
 * @param hadc 要采集的 ADC
 * @param count 一共采集多少次
 * @param pick 取中间多少个值进行平均
 * @return 采集到的值
 */
double get_adc_by_average(ADC_HandleTypeDef *hadc, int count = 10,
                          int pick = 6);

/**
 * @brief 切换 ADC 通道
 *
 * @param hadc ADC
 * @param channel 目标通道
 */
void switch_adc_channel(ADC_HandleTypeDef *hadc, u32 channel);
