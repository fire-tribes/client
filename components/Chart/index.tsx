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
  data: Math.ceil((index + 1) * 100000000 * Math.sqrt(Math.random())),
}));

const formatChartValue = (value: number) => {
  const stringValue = value.toString();
  const stringLength = stringValue.length;

  const MIN_LENGTH = 4;
  const MIDDLE_LENGTH = 7;
  const CHANGE_FONT_SIZE_LENGTH = 8;
  const MAX_LENGTH = 10;

  if (stringLength <= MIN_LENGTH) return value;
  if (stringLength <= MIDDLE_LENGTH) {
    return stringValue.substring(0, stringLength - 4) + '만';
  }
  if (stringLength <= CHANGE_FONT_SIZE_LENGTH) {
    // + 폰트사이즈 8px로 변경
    return stringValue.substring(0, stringLength - 4) + '만';
  }
  if (stringLength <= MAX_LENGTH) {
    return stringValue.substring(0, stringLength - 8) + '억';
  }

  return '';
};

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
            formatter: (value) => formatChartValue(value),
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
            borderSkipped: false, // 양쪽 다 둥글게
          },
        ],
      }}
    />
    // </div>
  );
}
