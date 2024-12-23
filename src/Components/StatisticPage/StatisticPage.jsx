import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Helmet } from 'react-helmet';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RepairRequestCategoriesChart = () => {
  // Data for the chart
  const data = {
    labels: [
      'Screen Repair', 
      'Battery Replacement', 
      'Software Issue', 
      'Water Damage', 
      'Charging Port Issues', 
      'Overheating Issues', 
      'Camera Malfunction', 
      'Motherboard Failure'
    ], // X-Axis (Repair Categories)
    datasets: [
      {
        label: 'Pending',
        data: [5, 2, 4, 3, 2, 1, 4, 3], // Number of Pending requests in each category
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color for Pending requests
        stack: 'Stack 0',
      },
      {
        label: 'In Progress',
        data: [3, 1, 2, 1, 3, 2, 3, 2], // Number of In Progress requests in each category
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color for In Progress requests
        stack: 'Stack 1',
      },
      {
        label: 'Completed',
        data: [10, 5, 7, 4, 6, 3, 8, 5], // Number of Completed requests in each category
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for Completed requests
        stack: 'Stack 2',
      },
      {
        label: 'Rejected',
        data: [1, 0, 3, 0, 1, 1, 0, 2], // Number of Rejected requests in each category
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Color for Rejected requests
        stack: 'Stack 3',
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Repair Categories',
          font: {
            size: 18, // Increase font size for X-axis title
          },
        },
        ticks: {
          font: {
            size: 16, // Increase font size of the X-axis labels
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Requests',
          font: {
            size: 18, // Increase font size for Y-axis title
          },
        },
        ticks: {
          font: {
            size: 16, // Increase font size of the Y-axis labels
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16, // Increase font size of the legend labels
          },
        },
      },
    },
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold mb-4">Repair Request Categories</h2>
      <Bar data={data} options={options} />
      <Helmet>
        <title>Statistics | Gadget Haven</title>
      </Helmet>
    </div>
  );
};

const StatisticPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* You can add other statistics components here */}
      <RepairRequestCategoriesChart />
      {/* Add other charts or statistics sections as needed */}
    </div>
  );
};

export default StatisticPage;
