import React from "react";

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
  

  const data = [
    {
      name: 'Jan',
      uv: 3000,
      pv: 2000,
      amt: 2300,
    },
    {
      name: 'Feb',
      uv: 2500,
      pv: 1398,
      amt: 2360,
    },
    {
      name: 'March',
      uv: 4690,
      pv: 3900,
      amt: 2560,
    },
    {
      name: 'April',
      uv: 6020,
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
      name: 'Jun',
      uv: 7050,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const MyRevenueChart = () => {
  return (
    <div>
         <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default MyRevenueChart;
