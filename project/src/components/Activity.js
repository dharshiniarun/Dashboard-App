import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = [
  { label: '5', value: 5000 },
  { label: '6', value: 3000 },
  { label: '7', value: 2000 },
  { label: '8', value: 1000 },
  { label: '9', value: 500 },
  { label: '10', value: 700 },
  { label: '11', value: 800 },
  { label: '12', value: 2000 },
  { label: '13', value: 1000 },
  { label: '14', value: 500 },
  { label: '15', value: 4000 },
  { label: '16', value: 3000 },
  { label: '17', value: 4000 },
  { label: '18', value: 5000 },
  { label: '19', value: 1000 },
  { label: '20', value: 2000 },
  { label: '21', value: 4000 },
  { label: '22', value: 3000 },
  ];
const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Value',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Activity Chart',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

function Activity() {
  return(
      <div className="Activity"> 
         <h2>Activity</h2>
          <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Weekly
          </a>
        </div> 
           <div>
           <BarChart data={data} />
           </div>
      </div>
  );
}
export default Activity;
