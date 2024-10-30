'use client'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Sales',
        data: labels.map(() => Math.floor(Math.random() * 100) + 1), 
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
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
          label: function (context: TooltipItem<'bar'>) {
            const label = context.dataset.label || '';
            const value = context.raw as number;
            return `${label}: $${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-xs w-full h-96 bg-secondary_bg rounded-lg shadow  p-4 md:p-6 max-h-min m-2">
      <h5 className="text-xl font-bold leading-none text-primary  mb-4">Monthly Sales</h5>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
