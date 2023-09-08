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

const labels = Array.from({ length: 12 }, (_, index) => ({
  label: index + 1,
  data: (index + 1) * 100,
}));

export default function CommonChart() {
  const theme = useTheme();

  return (
    // TODO: 차트의 크기를 고정하고 싶다면 해당 tag 활성화
    // <div style={{ width: '328px', height: '181px' }}>
    <Bar
      options={{
        responsive: true,
        // TODO: 차트의 크기를 고정하고 싶다면 해당 tag 활성화
        // maintainAspectRatio: false,
        layout: {
          padding: 20,
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
            // formatter: (value) => `${value}만`,
            // color: '#36A2EB',
          },
        },
        // TODO: https://www.chartjs.org/docs/latest/configuration/interactions.html#index
        // events: [''],
        onClick: (e) => console.log(e),
      }}
      data={{
        labels: labels.map(({ label }) => label),
        datasets: [
          {
            label: '',
            data: labels.map(({ data }) => data),
            backgroundColor: [theme.palette.basic.point_red01],
            borderColor: [theme.palette.basic.point_red01],
            borderRadius: 5,
          },
        ],
      }}
    />
    // </div>
  );
}
