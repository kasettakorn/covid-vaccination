import React, { useEffect, useState } from "react";
import { Layout, Spin } from "antd";
import "antd/dist/antd.css";
import "./style/layout.css";
import DetailCard from "./components/DetailCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

const { Header, Content, Footer } = Layout;

export default function App() {
  const [data, setData] = useState(null);
  const [covidWorld, setCovidWorld] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json"
      )
        .then((res) => res.json())
        .then((data) => {
          data.sort(
            (a, b) =>
              b.data[b.data.length - 1]["total_vaccinations"] -
              a.data[a.data.length - 1]["total_vaccinations"]
          );
          return data.filter((data) => data.iso_code.length === 3);
        });
      setData(response);
    }
    async function getCovidWorldData() {
      const response = await fetch(
        "https://covid.ourworldindata.org/data/owid-covid-data.json"
      ).then((res) => {
        return res.json();
      });

      setCovidWorld(response);

    }
    getData();
    getCovidWorldData();
  }, []);
  if (!data || !covidWorld) {
    return <Spin size="large" />;
  }
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">💉🦠 SEA Covid-19 Vaccination Dashboard</div>
        {/* <div className="logoR">Data from ourworldindata.org</div> */}
      </Header>
      <Content style={{ padding: "20px" }}>
        <h1>Overview</h1>
          <div className="row" style={{marginTop:"20px"}}>
            
            <div className="col">
              <DetailCard data={data} covidWorld={covidWorld}  />
            </div>
            <div className="col">
              {/* <DetailCard data={data} covidWorld={covidWorld}  /> */}
            </div>
            <div className="col">
              {/* <DetailCard data={data} covidWorld={covidWorld}  /> */}
            </div>
          </div>
          <div className="row" style={{marginTop:"20px"}}>
            <div className="col" style={{backgroundColor:"white", borderRadius:"10px", padding:"10px"}}>
              <BarChart data={data} covidWorld={covidWorld} />
            </div>
            {/* <div className="col" style={{backgroundColor:"white", borderRadius:"10px", padding:"10px"}}>
              <LineChart data={data} covidWorld={covidWorld} />
            </div> */}
          </div>

      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2021 Created by Ronnakorn Hompoa
      </Footer>
    </Layout>
  );
}
