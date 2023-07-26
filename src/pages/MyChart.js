import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const data = [
  {
    name: "Feb \n 2016",
    y: "12k",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar \n 2016",
    y: "12k",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Apr \n 2016",
    y: "12k",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May \n 2016",
    y: "12k",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Jun \n 2016",
    y: "12k",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jul \n 2016",
    y: "12k",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Aug \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Jan \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Feb \n 2016",
    y: "12k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MyChart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    // <BarChart
    //   width={800}
    //   height={300}
    //   data={data}
    //   margin={{
    //     top: 20,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" fontSize={12} />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Bar dataKey="pv" stackId="a" fill="#5f6de5" barSize={10} />
    //   <Bar dataKey="amt" stackId="a" fill="#58dc94" barSize={10} />
    //   <Bar dataKey="uv" fill="#ffc658" barSize={10} />
    // </BarChart>
  );
};

export default MyChart;
