'use client'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Donut() {
  const data = {
    labels: ['Desktop', 'Tablet', 'Mobile'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [60, 20, 20], // Example data values
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',  // Desktop
          'rgba(255, 206, 86, 0.6)',   // Tablet
          'rgba(75, 192, 192, 0.6)'    // Mobile
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const, 
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'doughnut'>) {
            const label = context.label || '';
            const value = context.raw as number; 
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-xs w-full h-96 bg-secondary_bg rounded-lg shadow p-4 md:p-6 max-h-min  m-2">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-bold leading-none text-primary  ">Website traffic</h5>
        </div>
      </div>

      <div className="py-6" style={{ height: '250px' }}>
        <Doughnut data={data} options={options} />
      </div>
    
    </div>
  );
}
