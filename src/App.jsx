import { useState, useEffect } from "react";
import { SideLeft } from "./components/SideLetf/SideLeft.jsx";
import { SideRigth } from "./components/SideRigth/SideRigth.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const fetchData = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=lima&appid=52b966ebb1af18378daff9987e93bf76&units=metric"
    );
    const jsonData = await fetchData.json();
    setData(jsonData);
  };
  // https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=52b966ebb1af18378daff9987e93bf76

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <SideLeft data={data} />
        <SideRigth data={data} />
      </div>
    </>
  );
}

export default App;
