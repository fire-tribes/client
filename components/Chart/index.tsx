import { options } from '@/components/Chart/options';
import { dividends } from '@/components/Chart/utils';
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

  const { annualDividendData } = useAnnualDividend();
  const monthlyDividends = annualDividendData?.monthlyDividends;
  monthlyDividends;

  // TODO: 응답값 보고 바꿔주자.
  // dividends.map(())

  return (
    /**
     * 
     * // TODO: 차트의 크기를 고정하고 싶다면 해당 tag 활성화
       // <div style={{ width: '328px', height: '181px' }}>
     */

    <Bar
      options={options}
      data={{
        labels: dividends.map(({ month }) => month),
        datasets: [
          {
            label: '',
            data: dividends.map(({ dividend }) => dividend),
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
