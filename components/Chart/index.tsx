import { options } from '@/components/Chart/options';
import {
  createShowChartDividendDatas,
  formatChartValue,
} from '@/components/Chart/utils';
import { transferPrice } from '@/core/utils/transferPrice';
import { useAnnualDividend } from '@/hook/useAnnualDividend';
import { useExchageRate } from '@/hook/useExchageRate';
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
  const { annualDividendData } = useAnnualDividend();
  const { exchangeRate } = useExchageRate();

  const monthlyDividends = annualDividendData?.monthlyDividends;
  const showChartDividendDatas = createShowChartDividendDatas(monthlyDividends);

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
              font: {
                size: 9,
              },
              anchor: 'end',
              clip: false,
              align: 'top',
              offset: 0,
              // TODO: number type value에 특정 단위를 붙이고 싶을경우
              formatter: (value: number) => {
                const exchangedValue = transferPrice({
                  currentPrice: value,
                  exchangeRate,
                  outputSymbol: 'KRW',
                });

                return formatChartValue(exchangedValue);
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
              backgroundColor: [theme.palette.basic.point_red01],
              borderColor: [theme.palette.basic.point_red01],
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
