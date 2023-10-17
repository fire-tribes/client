// import { options } from '@/components/Chart/options';
import {
  createShowChartDividendDatas,
  getShortCurrencyDividendChartKR,
} from '@/components/Chart/utils';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { useTheme } from '@emotion/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels);

export default function AnnualDividendBarChart() {
  const theme = useTheme();
  const { annualDividendSimpleKRData } = useAnnualDividend();

  const monthlyDividends = annualDividendSimpleKRData?.monthlyDividends;
  const showChartDividendDatas = createShowChartDividendDatas(monthlyDividends);

  const thisMonth = new Date().getMonth();
  const backgroundColor = showChartDividendDatas?.map((_, index) => {
    return index === thisMonth
      ? theme.palette.basic.point_red01
      : theme.palette.basic.point_red02;
  });

  const options: ChartOptions<'bar'> = {
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
          color: (context) => {
            const thisMonth = new Date().getMonth();
            const isFocusTick = thisMonth === context.index;

            return isFocusTick
              ? theme.palette.basic.gray9
              : theme.palette.basic.gray6;
          },
          font: (context) => {
            const thisMonth = new Date().getMonth();
            const isFocusTick = thisMonth === context.index;

            return {
              family: 'Pretendard',
              size: 10,
              weight: isFocusTick ? 'bold' : 'lighter',
            };
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

  if (showChartDividendDatas) {
    return (
      /**
     * 
     * // TODO: 차트의 크기를 고정하고 싶다면 해당 tag 활성화
       
     */
      <Bar
        options={{
          ...options,
          plugins: {
            datalabels: {
              color: (context) => {
                const isFocusTick = thisMonth === context.dataIndex;
                return isFocusTick
                  ? theme.palette.basic.gray9
                  : theme.palette.basic.gray6;
              },
              font: (context) => {
                return {
                  family: 'Pretendard',
                  size: 9,

                  weight: context.dataIndex === thisMonth ? 'bold' : 'lighter',
                };
              },
              anchor: 'end',
              clip: false,
              align: 'top',
              offset: 0,
              formatter: (value: number) => {
                return getShortCurrencyDividendChartKR(value);
              },
            },
          },
        }}
        data={{
          labels: showChartDividendDatas.map(({ month }) => month),
          datasets: [
            {
              label: '',
              data: showChartDividendDatas.map(({ dividend }) => dividend),
              backgroundColor: backgroundColor,
              borderColor: backgroundColor,
              borderRadius: 5,
              /** 한쪽만 적용 true, 양쪽 다 둥글게 false  */
              borderSkipped: false,
            },
          ],
        }}
      />
    );
  }

  return null;
}
