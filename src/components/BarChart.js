import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  const [dataset] = useState(
    props.data.filter(
      (data) =>
        data.iso_code === "THA" ||
        data.iso_code === "LAO" ||
        data.iso_code === "KHM" ||
        data.iso_code === "IDN" ||
        data.iso_code === "MYS" ||
        data.iso_code === "BRN" ||
        data.iso_code === "SGP" ||
        data.iso_code === "MMR" ||
        data.iso_code === "VNM" ||
        data.iso_code === "PHL"
    )
  );
  console.log(props.covidWorld);
  const plotData = dataset.map((data) => {
    return {
      country: data.country,
      iso_code: data.iso_code,
      population: props.covidWorld[data.iso_code]["population"],
      percentage:
        data.data[data.data.length - 1]["total_vaccinations"] != null
          ? (data.data[data.data.length - 1]["total_vaccinations"] /
              props.covidWorld[data.iso_code]["population"]) *
            100
          : (data.data[data.data.length - 2]["total_vaccinations"] /
              props.covidWorld[data.iso_code]["population"]) *
            100,
    };
  });
  plotData.sort((a, b) => b.percentage - a.percentage);
  console.log(plotData);

  const data = {
    labels: plotData.map((data) => {
      return data.country;
    }),
    datasets: [
      {
        label: "Percentage (%)",
        data: plotData.map((data) => {
          return data.percentage;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
        <h3>Bar Chart</h3>
      <Bar
        height={70}
        data={data}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  var label = context.dataset.label || "";
                  label += context.parsed.y.toFixed(2);

                  return label;
                },
              },
            },
          },
          scales: {
            y: {
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return "$" + value;
                },
              },
            },
          },
        }}
      ></Bar>
    </div>
  );
}
