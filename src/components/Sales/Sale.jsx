import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
const Sale = () => {
  const chartRef=useRef(null);
  const chartInstance=useRef(null);
  useEffect(()=>{
    if(chartInstance.current){
      chartInstance.current.destroy()
    }
    const myChartRef=chartRef.current.getContext("2d");
    chartInstance.current=new Chart(myChartRef,{
      type: 'doughnut',
      data: {
        
        datasets:[{
          data:[30,45],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            
          ],
          borderWidth: 3,
          
        }
        ],
        options: {
          cutout: '10%', // Adjust this percentage to change the width of the doughnut
          radius: '80%'
        },
        
      }

    });
    const centerX = chartRef.current.width / 2;
    const centerY = chartRef.current.height / 2;
    const text = 'Text Inside Doughnut';

    myChartRef.font = '16px Arial';
    myChartRef.fillStyle = 'black';
    myChartRef.textAlign = 'center';
    
    // Calculating coordinates for positioning text inside the cutout area
    const textX = centerX;
    const textY = centerY;

    myChartRef.fillText(text, textX, textY);

    return()=>{
      if(chartInstance.current){
        chartInstance.current.destroy();
      }
    }
  },[])
  return (
    <div>
      <canvas ref={chartRef} style={{width:"220px", height: "220px", display: 'flex', justifyContent:'space-between' }}/>
    </div>
  )
}

export default Sale;
