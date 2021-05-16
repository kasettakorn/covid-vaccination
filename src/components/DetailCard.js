import React, { useState } from "react";
import { Card } from "antd";

export default function DetailCard(props) {
  const [dataset, setDataset] = useState(
    props.data.filter((data) => data.iso_code === "THA")
  );
  console.log(dataset[0]["data"][dataset[0]["data"].length - 1]);
  return (
    <div>
      <div className="card border-primary mb-3">
        <div className="card-body text-primary">
          <h4 className="card-title">🇹🇭 Thailand Vaccination</h4>
          <h1 className="card-text">
              {(
                (dataset[0]["data"][dataset[0]["data"].length - 1][
                  "total_vaccinations"
                ] /
                  props.covidWorld["THA"]["population"]) *
                100
              ).toFixed(2)}
            {" "}%
         
          </h1>
        </div>
      </div>
    </div>
  );
}
