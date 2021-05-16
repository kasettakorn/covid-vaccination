import React, { useState } from "react";
import { Line } from "react-chartjs-2";

export default function LineChart(props) {
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
  console.log(dataset);
  const plotData = {
    บรูไนดารุสซาลาม: [],
    กัมพูชา: [],
    อินโดนีเซีย: [],
    ลาว: [],
    มาเลเซีย: [],
    เมียนมาร์: [],
    ฟิลิปปินส์: [],
    สิงคโปร์: [],
    ไทย: [],
    เวียดนาม: [],
  };
  dataset[0].data
    .splice(-7)
    .map((data) =>
      plotData["บรูไนดารุสซาลาม"].push({
        x: data.date,
        y: data.total_vaccinations,
      })
    );

  dataset[1].data
    .splice(-7)
    .map((data) =>
      plotData["กัมพูชา"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[2].data
    .splice(-7)
    .map((data) =>
      plotData["อินโดนีเซีย"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[3].data
    .splice(-7)
    .map((data) =>
      plotData["ลาว"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[4].data
    .splice(-7)
    .map((data) =>
      plotData["มาเลเซีย"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[5].data
    .splice(-7)
    .map((data) =>
      plotData["เมียนมาร์"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[6].data
    .splice(-7)
    .map((data) =>
      plotData["ฟิลิปปินส์"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[7].data
    .splice(-7)
    .map((data) =>
      plotData["สิงคโปร์"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[8].data
    .splice(-7)
    .map((data) =>
      plotData["ไทย"].push({ x: data.date, y: data.total_vaccinations })
    );

  dataset[9].data
    .splice(-7)
    .map((data) =>
      plotData["เวียดนาม"].push({ x: data.date, y: data.total_vaccinations })
    );

  console.log(
    plotData
  );

  const data = {
    datasets: [
      {
        label: "กัมพูชา",
        data: plotData["กัมพูชา"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "red",
      },
      {
        label: "บรูไนดารุสซาลาม",
        data: plotData["บรูไนดารุสซาลาม"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "green",
      },
      {
        label: "ฟิลิปปินส์",
        data: plotData["ฟิลิปปินส์"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "gold",
      },
      {
        label: "มาเลเซีย",
        data: plotData["มาเลเซีย"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "pink",
      },
      {
        label: "ลาว",
        data: plotData["ลาว"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "orange",
      },
      {
        label: "สิงคโปร์",
        data: plotData["สิงคโปร์"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "black",
      },
      {
        label: "อินโดนีเซีย",
        data: plotData["อินโดนีเซีย"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "cyan",
      },
      {
        label: "เมียนมาร์",
        data: plotData["เมียนมาร์"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "purple",
      },
      {
        label: "เวียดนาม",
        data: plotData["เวียดนาม"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "gray",
      },
      {
        label: "ไทย",
        data: plotData["ไทย"].map((data) => {
          return {
            x: data.x, y: data.y
          }
        }),
        fill: false,
        borderColor: "blue",
      },
    ],
  };

  return (
    <div>
      <Line
        height={400}
        data={data}
        options={{
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Y text",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "X text",
                },
              },
            ],
          },
        }}
      ></Line>
    </div>
  );
}
