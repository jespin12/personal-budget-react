/* import React, {Component} from 'react'
import Chart from 'chart.js';
import axios from 'axios';

var dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#A94728',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#3BA928',
                '#28A99C',
                '#8928A9',
                '#A9287B',
                '#A9284B',
            ]
        }
    ],
    labels: []
};

function createChart() {
var ctx = document.getElementById('myChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: dataSource
});
}

function getBudget() {
axios.get('http://localhost:2000/budget')
.then(function (res) {
    for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
    }    createChart();
    
});
}

getBudget(); */

import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';

function ChartFile() {
    const [chartData, setChartData] = useState({})
    

    const chart = () => {
        let budData = [];
        let budLabel = [];
        axios.get('http://localhost:2000/budget')
        .then(res =>{
            console.log(res);
            for(const dataObj of res.data.myBudget){
                budData.push(parseInt(dataObj.budget))
                budLabel.push(dataObj.title)
            }
            setChartData({
                labels: budLabel,
                datasets: [
                    {
                        data: budData,
                        backgroundColor: 
                        ['#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#9A7D0A',
                        '#27AE60',
                        '#D0D3D4',
                        '#34495E'    
                    ]
                    }
                ]
            })
        })
        .catch(err =>{
            console.log(err);
        })
        console.log(budData, budLabel);

       
    }
    useEffect(()=>{
        chart()
    }, [])
  return (
      <div>
          <Pie data = {chartData} width={800} height={600}/>
      </div>
      
  );
}

export default ChartFile;