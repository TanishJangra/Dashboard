import React from 'react'
import './Graph.css'
import {Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import { iconsImgs } from '../../utils/images'
const Graph = () => {
    const data=[
    {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    uv: 3090,
    pv: 4000,
    amt: 2100,
  },
  {
    name: 'Sept',
    uv: 3490,
    pv: 3500,
    amt: 3000,
  },
  {
    name: 'Oct',
    uv: 3190,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
  return (
    <div className='graph-view'>
    <div className='rev'>
       <div className='rev-left'>
          <h3>Revenue</h3>
          <img className='rev-icon' src={iconsImgs.trend} alt="" />
          <h4>+0.3%</h4>
       </div>
          <div className='rev-right'>
              <h5>Course Visit</h5>
              <div className='circle bl'></div>
              <h5>Course Sale</h5>
              <div className='circle or'></div>
              <h5>This Month</h5>
          </div>
       </div>
       <ResponsiveContainer width="100%" height="100%">
       <LineChart
         width={500}
         height={300}
         data={data}
         margin={{
           top: 10,
           bottom: 15,
         }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#1A1A44" activeDot={{ r: 8 }} />
         <Line type="monotone" dataKey="uv" stroke="orange" />
       </LineChart>
     </ResponsiveContainer>

    </div>
  )
}

export default Graph;
