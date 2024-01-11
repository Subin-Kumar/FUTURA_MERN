import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, } from "chart.js";



function Bar1() {
    const Men = useSelector(state => state.AdData.MenDr);
  const Women = useSelector(state => state.AdData.WomenDr);

  const menCount = Men.length;
  const womenCount = Women.length;

  ChartJS.register(CategoryScale,LinearScale,BarElement);

  const countsArray = [
    { gender: 'Men', count: menCount },
    { gender: 'Women', count: womenCount },
  ];

  const genders = countsArray.map(item => item.gender);
  const counts = countsArray.map(item => item.count);

  const data = {
    labels: genders,
    datasets: [
      {
        label: 'Men Dress VS Women Dress',
        backgroundColor: ['#ff4747', '#ff8f8f'], 
        borderColor: '#ffd6d6',
        borderWidth: 1,
        hoverBackgroundColor: '#ffb3b3',
        hoverBorderColor: '#ffd6d6',
        data: counts,
      },
    ],
  };

 
  const options = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }],
    },
  };

  return (
    <div>
      <div style={{width:'300px'}}>
      <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default Bar1
