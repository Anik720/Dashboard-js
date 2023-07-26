import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexBarChart = ({ data }) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: data.map((item) => item.name), // Use the 'name' property to display months on the X-axis
      labels: {
        show: true, // Show labels (numbers) on the X-axis
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {},
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%", // Adjust the column width here
        dataLabels: {
          position: "top", // Show data labels on top of the bars
          style: {
            colors: ["#00a1e4", "#077ee8", "#0b6b91"], // Custom colors for data labels
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opts) {
        // Show data labels for specific series only (pv, amt, uv)
        return opts.w.globals.seriesNames[opts.seriesIndex] === "pv" ? val : "";
      },
      offsetY: -20, // Adjust the offset of data labels on the Y-axis
    },
    grid: {
      show: false, // Remove the background grid
    },
    colors: ["#00a1e4", "#077ee8", "#0b6b91"], // Set custom colors for each bar (pv, amt, uv)
  };

  const series = [
    {
      name: "pv",
      data: data.map((item) => item.pv),
    },
    {
      name: "amt",
      data: data.map((item) => item.amt),
    },
    {
      name: "uv",
      data: data.map((item) => item.uv),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      width={1000}
      height={350}
    />
  );
};

export default ApexBarChart;
