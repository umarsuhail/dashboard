'use client'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, TooltipItem } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Title);

export default function LineChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Visits',
        data: labels.map(() => Math.floor(Math.random() * 1000) + 200), // Example data values
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Line color
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.3, // Curve of the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'line'>) {
            const label = context.dataset.label || '';
            const value = context.raw as number;
            return `${label}: ${value} visits`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Visits',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
    },
  };

  return (
    <div className="max-w-xs w-full h-96 bg-secondary_bg rounded-lg shadow p-4 md:p-6 max-h-min m-2">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-primary">Monthly Visits</h5>
        </div>
      </div>
      <div className="py-6" style={{ height: '250px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
