import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'User Analytics',
    },
  },
};

    const data ={
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
        datasets:[{
            label:'User1',
            data:[12,45,23,56,8,9,45,48,96,75,63,35],
            borderColor:"#EEC610",
            tension: 0.1,
        },{
            label: 'User2',
            data: [65, 59, 80, 81, 56, 55, 40,45,75,23,54,12],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },{
            label: 'User3',
            data: [56, 90, 8, 18, 65, 55, 4,54,57,32,45,21],
            fill: false,
            borderColor: '#6b7b8c',
            tension: 0.1
          }]
    }


export function Chart() {
  return(
    <Box sx={{width:"70vw"}}>
       <Line options={options} data={data} />
    </Box>
  )
}
