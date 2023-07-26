import React, { useCallback, useRef, useState } from "react";
import { Divider, Space } from "antd";
import {
  QuestionCircleOutlined,
  ReloadOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  PrinterOutlined,
  DownOutlined,
} from "@ant-design/icons";

import domtoimage from "dom-to-image";
import ApexBarChart from "./ApexBarChart";

const SalesAndExpenses = () => {
  const chartRef = useRef(null);
  function getRandomNumber() {
    return Math.floor(Math.random() * 500) + 100; // Generates a random number between 100 and 599
  }
  const apexdata = [
    {
      name: "Jan 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Feb 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Mar 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Apr 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "May 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Jun 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Jul 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Aug 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Sep 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Oct 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Nov 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
    {
      name: "Dec 2016",
      pv: getRandomNumber(),
      amt: getRandomNumber(),
      uv: getRandomNumber(),
    },
  ];
  const customCalendarStyles = {
    width: 100, // Set your desired width here or fallback to 300 if width prop is not provided
    height: 100, // Set your desired height here or fallback to 300 if height prop is not provided
    // border: `1px solid ${theme.palette.grey[300]}`, // Optional: Add border to the calendar for visual distinction
  };
  const currentDate = new Date();

  const [selectedDate, setSelectedDate] = useState(
    `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`
  );

  // Function to handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Optional: Style for the input field
  const inputStyle = {
    padding: "0.1rem 0.1rem",
    border: "none",
    borderRadius: "4px",
    fontSize: "13px",
    text: "blue",
    cursor: "pointer",
    outline: "none",
    /* Add any other styles you want for the input field */
  };

  const colors = ["#89d8cb", "#f4d184", "#d09e2f", "#fe702f", "#ef5a2c"];
  const colorCount = colors.length;

  const totalElements = 18;

  const getColorByIndex = (index) => {
    const colorIndex = Math.floor((index / totalElements) * colors.length);
    return colors[colorIndex];
  };

  const handleDownload = () => {
    domtoimage.toPng(chartRef.current).then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = "my_chart.png";
      link.href = dataUrl;
      link.click();
    });
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="m-auto h-screen">
      {/* section 1 */}
      <div className="flex justify-between items-center my-10 flex-wrap m-5">
        {/* left side */}
        <div className="flex justify-center items-center gap-[5px]">
          <p
            variant="h6"
            component="h6"
            className="text-[20px]"
            style={{ fontSize: "18px" }}
          >
            Total Receivables
          </p>
          <div
            className="tooltip"
            style={{ borderRadius: "50%", width: "full", cursor: "pointer" }}
            // onClick={handleShowHelpPopup}
          >
            <div
              style={{
                background: "#fff",
                padding: "3px",
                display: "inline-block",
                borderRadius: "50%",
              }}
            >
              <QuestionCircleOutlined
                style={{ color: "black", fontSize: "22px", background: "#fff" }}
              />
            </div>
            <span class="tooltiptext">Here's some amazing content.</span>
          </div>
        </div>

        {/* right side */}
        <div className="flex gap-[5px] justify-center items-center flex-wrap">
          <div>
            <p
              className="text-sm font-bold text-slate-500"
              style={{ fontWeight: 500 }}
            >
              Data refreshed at jul 18,2023 04:06 PM
            </p>
          </div>

          {/* <Divider type="vertical" /> */}
          <Divider
            type="vertical"
            style={{
              borderColor: "gray", // Change the color to gray
              borderWidth: "1px", // Increase the border width for a thicker line
              height: "30px", // Increase the height of the divider
            }}
          />
          <div
            onClick={handleRefresh}
            className="flex justify-center items-center gap-5 mr-[10px]"
            style={{ cursor: "pointer", fontSize: "20px" }}
          >
            <ReloadOutlined />
          </div>
          <div
            className="flex gap-[5px] border border-indigo-600 px-5 text-sm justify-center items-center "
            style={{ borderRadius: "5px", cursor: "pointer" }}
          >
            <input
              type="date"
              id="dateInput"
              value={selectedDate}
              onChange={handleDateChange}
              style={inputStyle}
            />
          </div>

          <div
            className="flex gap-[5px] border border-indigo-600 px-5 "
            style={{ borderRadius: "5px" }}
          >
            <div>
              <p
                className="text-indigo-600 text-sm"
                // onClick={handleDownload}
                style={{ cursor: "pointer" }}
              >
                <DownloadOutlined
                  onClick={handleDownload}
                  style={{ fontSize: "23px" }}
                />
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center gap-[5px] border border-gray-600 px-5"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-gray-600 text-sm">
              <ShareAltOutlined style={{ fontSize: "23px" }} />
            </p>
            <p className="text-gray-600 text-sm">Email</p>
          </div>
          <div
            className="flex gap-[5px] border border-gray-600 px-5"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-gray-600 text-sm">
              {/* <PrintIcon /> */}
              <PrinterOutlined style={{ fontSize: "23px" }} s />
            </p>
            <p className="text-gray-600 text-sm">Print</p>
          </div>
          <div
            className="flex items-center justify-center gap-[5px] bg bg-[#00a1e4] text-white px-5"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-white-600  text-sm">
              {/* <SignalCellularAltIcon /> */}
            </p>
            <p className="text-white-600 text-sm text-center py-[4px]">
              Generate Report
            </p>
          </div>
          <div
            className="flex gap-[5px] bg bg-green-600 text-white py-[3px] px-[10px] mr-[-4px]"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-white-600 text-sm">Save</p>
          </div>
          <div
            className="flex items-center justify-center gap-[5px] bg bg-green-600 text-white py-[3px] px-[5px]"
            style={{ borderRadius: "5px" }}
          >
            <p className="text-white-600 text-sm">
              <DownOutlined style={{ fontSize: "15px" }} />
            </p>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="border border-gray-300 m-[20px] ">
        <div className="m-[5px] ">
          <p
            className="text-sm font-bold text-gray-500 py-[10px] px-[5px] ml-[5px]"
            style={{ fontWeight: 500 }}
          >
            Total Recevables $2,063.400
          </p>

          <div
            className="flex flex-wrap mb-5 ml-[10px] overflow-auto"
            id="color-row"
          >
            {[...Array(totalElements)].map((_, index) => (
              <div
                key={index}
                className="w-[70px] h-[15px]"
                style={{ backgroundColor: getColorByIndex(index) }}
              ></div>
            ))}
          </div>
        </div>

        <Divider className="border border-gray-300 " />

        <div className="flex justify-around  items-center  h-[100px] overflow-auto">
          <div>
            <p
              className="text-lg text-cyan-600 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              CURRENT
            </p>
            <p
              className="text-xl text-black-500 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              $83.400
            </p>
          </div>

          <Divider
            type="vertical"
            className="border border-gray-300 mb-10"
            style={{
              height: "100%",
            }}
          />
          <div>
            <p
              className="text-xl text-orange-500 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              OVERDUE
            </p>
            <p
              className="text-xl text-black-500 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              $300.000
            </p>
            <p className="text-sm text-gray-500">1-15days</p>
          </div>
          <div>
            <p
              className="text-xl text-black-500 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              $740.000
            </p>
            <p className="text-sm text-gray-500">16-30days</p>
          </div>
          <div>
            <p
              className="text-xl text-black-500 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              $300.000
            </p>
            <p className="text-sm text-gray-500">31-45days</p>
          </div>
          <div>
            <p
              className="text-xl text-black-500 font-bold"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              $640.000
            </p>
            <p className="text-sm text-gray-500">Above 45 days</p>
          </div>
        </div>
      </div>

      {/* section -3 */}

      <div className="mx-[17px] mb-20">
        <div className="flex gap-[5px] items-center mb-5">
          <h1 className="text-xl" style={{ fontSize: "18px" }}>
            Sales and Expenses{" "}
          </h1>

          <div
            className="tooltip"
            style={{ borderRadius: "50%", width: "full", cursor: "pointer" }}
            // onClick={handleShowHelpPopup}
          >
            <div
              style={{
                background: "#fff",
                padding: "3px",
                display: "inline-block",
                borderRadius: "50%",
              }}
            >
              <QuestionCircleOutlined
                style={{ color: "black", fontSize: "22px", background: "#fff" }}
              />
            </div>
            <span class="tooltiptext">Here's some amazing content.</span>
          </div>

          {/* Ends here */}
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 border border-gray-300 w-[100%] overflow-auto ">
          <div className="">
            <div className="chart-container" ref={chartRef}>
              <div>
                <ApexBarChart data={apexdata} />
              </div>
            </div>

            {/* <Divider orientation="vertical" flexItem className="ml-10" /> */}
          </div>

          <div className="flex flex-col justify-center items-end text-right mr-5">
            <div className="mt-5 mb-5">
              <p className="text-blue-500 font-bold">Total Sales</p>
              <p className="text-xl font-bold" style={{ fontWeight: 500 }}>
                $31,362.334
              </p>
            </div>
            <div className="mt-5 mb-5">
              <p
                className="text-green-500 font-bold"
                style={{ fontWeight: 500 }}
              >
                Total Receipts
              </p>
              <p className="text-xl font-bold">$32,488.284</p>
            </div>
            <div className="mt-5 mb-5">
              <p className="text-red-500 font-bold" style={{ fontWeight: 500 }}>
                Total Sales
              </p>
              <p className="text-xl font-bold">$11,512.749</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAndExpenses;
