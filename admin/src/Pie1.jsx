import React, { useState } from 'react'

import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function Pie1() {

 
  ChartJS.register(ArcElement,Tooltip,Legend);

  const Mdata = useSelector(state => state.AdData.MenDr);
  const Wdata = useSelector(state => state.AdData.WomenDr);

  const productCountsArray = [];

  Wdata.forEach(product => {
    const productType = product.productType;


    const index = productCountsArray.findIndex(item => item.productType === productType);

    if (index === -1) {
      productCountsArray.push({ productType, count: 1 });
    } else {
      productCountsArray[index].count += 1;
    }
  });
  Mdata.forEach(product => {
    const productType = product.productType;


    const index = productCountsArray.findIndex(item => item.productType === productType);

    if (index === -1) {
      productCountsArray.push({ productType, count: 1 });
    } else {
      productCountsArray[index].count += 1;
    }
  });

  console.log("Product conunts",productCountsArray);

  const data = {
    labels: productCountsArray.map((data) => data.productType),
    datasets: [
      {
        data: productCountsArray.map((data) => data.count),
        backgroundColor: ['#ffd6d6','#ffb3b3', '#ff8f8f', '#ff6b6b', '#ff4747', '#ff2439','#ff0000'],
        hoverBackgroundColor: ['#f2fff7', '#f2fff7', '#f2fff7', '#f2fff7', '#f2fff7'],
      },
    ],
  };

  return (
    <div>
      <div style={{width:'300px'}}>
      <Doughnut data={data} />

      </div>
      
    </div>
  )
}

export default Pie1
