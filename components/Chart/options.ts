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
  onClick: (e) => console.log(e),
  /**
   * events의 목록 (https://www.chartjs.org/docs/latest/configuration/interactions.html#index)
   * events: [''],
   */
};
