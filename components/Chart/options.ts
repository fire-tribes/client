import { formatChartValue } from '@/components/Chart/utils';
import type { ChartOptions } from 'chart.js';

export const options: ChartOptions<'bar'> = {
  responsive: true,
  /**
   * 차트의 크기를 고정하고 싶다면 해당 tag 활성화
   *  maintainAspectRatio: false,
   */
  layout: {
    padding: {
      top: 20,
    },
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        font: {
          size: 10,
        },
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      font: {
        size: 9,
      },
      anchor: 'end',
      clip: false,
      align: 'top',
      offset: 0,
      // TODO: number type value에 특정 단위를 붙이고 싶을경우
      formatter: (value: string | number) => formatChartValue(value),
      /** color를 변경하고 싶을 떄
       * color: '#36A2EB',
       */
    },
  },

  /**
   * events의 목록 (https://www.chartjs.org/docs/latest/configuration/interactions.html#index)
   * events: [''],
   */
  onClick: (e) => console.log(e),
};
