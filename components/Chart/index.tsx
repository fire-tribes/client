import { options } from '@/components/Chart/options';
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
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels);

export default function AnnualDividendBarChart() {
  const theme = useTheme();
  const { annualDividendSimpleKRData } = useAnnualDividend();

  const monthlyDividends = annualDividendSimpleKRData?.monthlyDividends;
  const showChartDividendDatas = createShowChartDividendDatas(monthlyDividends);

  const backgroundColor = showChartDividendDatas?.map((_, index) => {
    const thisMonth = new Date().getMonth();
    return index === thisMonth
      ? theme.palette.basic.point_red01
      : theme.palette.basic.point_red02;
  });

  if (showChartDividendDatas) {
    return (
      /**
     * 
     * // TODO: 차트의 크기를 고정하고 싶다면 해당 tag 활성화
       // <div style={{ width: '328px', height: '181px' }}>
     */
      <Bar
        options={{
          ...options,
          plugins: {
            datalabels: {
              font: () =>
                // context
                {
                  return {
                    size: 9,
                    // size: context.active ? 12 : 9,
                  };
                },
              anchor: 'end',
              clip: false,
              align: 'top',
              offset: 0,
              formatter: (value: number) => {
                return getShortCurrencyDividendChartKR(value);
              },
              /** color를 변경하고 싶을 떄
               * color: '#36A2EB',
               */
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
      // TODO: 차트의 크기를 고정하고 싶다면 해당 tag 활성화
      // </div>
    );
  }

  return null;
}

// [
//   theme.palette.basic.point_red01,
//   theme.palette.basic.point_red02,
// ],
