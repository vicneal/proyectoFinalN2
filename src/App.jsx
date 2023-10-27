import { useState, useEffect } from "react";
import { SideLeft } from "./components/SideLetf/SideLeft.jsx";
import { SideRigth } from "./components/SideRigth/SideRigth.jsx";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [temperature, setTemperature] = useState(true);
  const [ubiDefecto, setUbiDefecto] = useState("paris");

  const getData = async () => {
    try {
      // const fetchData = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=774dd9eb33b831186f293ca8c0809711&units=metric`
      // );
      const fetchData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${ubiDefecto}&appid=15f19b77e326ed25f9832b22e374fb95&units=metric`
      );
      // const jsonData = await fetchData.json();
      // setData(jsonData);
      setData(fetchData.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [, ubiDefecto]);

  const handleBtnLima = () => {
    setUbiDefecto("lima");
  };
  const handleBtnMadrid = () => {
    setUbiDefecto("madrid");
  };
  const handleBtnTokio = () => {
    setUbiDefecto("tokio");
  };
  const onSearchCountry = (ubiDefecto) => {
    setUbiDefecto(ubiDefecto);
  };

  const uicacionActual = (ubiActual) => {
    setUbiDefecto(ubiActual);
  };

  const handleBtnCelcius = () => {
    let btnCel = document.getElementById("btnC");
    let btnFaren = document.getElementById("btnF");
    btnCel?.classList.add("btnCent");
    btnCel?.classList.remove("btnFaren");
    btnFaren?.classList.add("btnFaren");
    btnFaren?.classList.remove("btnCent");
    setTemperature(true);
  };
  const handleBtnFahrenheit = () => {
    let btnCel = document.getElementById("btnC");
    let btnFaren = document.getElementById("btnF");
    btnFaren?.classList.add("btnCent");
    btnFaren?.classList.remove("btnFaren");
    btnCel?.classList.add("btnFaren");
    btnCel?.classList.remove("btnCent");
    setTemperature(false);
  };

  return (
    <>
      <div className="container">
        {data.coord != undefined ? (
          <>
            <SideLeft
              data={data}
              temperature={temperature}
              handleBtnLima={handleBtnLima}
              handleBtnMadrid={handleBtnMadrid}
              handleBtnTokio={handleBtnTokio}
              onSearchCountry={onSearchCountry}
              uicacionActual={uicacionActual}
            />
            <SideRigth
              data={data}
              btnC={handleBtnCelcius}
              btnF={handleBtnFahrenheit}
              temperature={temperature}
            />
          </>
        ) : (
          <span>LOading...</span>
        )}
      </div>
    </>
  );
}

export default App;
