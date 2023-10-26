import "./SideRigth.css";
import { useState, useEffect } from "react";
import { BottomSide } from "./BottomSide.jsx";
import { fechas } from "./fechas.js";

export const SideRigth = ({ data, btnC, btnF, temperature }) => {
  let coordenadas = data?.coord;
  const [days, setDays] = useState([]);

  const getDataDays = async () => {
    try {
      const fetchData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          coordenadas && coordenadas.lat
        }&lon=${
          coordenadas && coordenadas.lon
        }&appid=15f19b77e326ed25f9832b22e374fb95`
      );
      const jsonData = await fetchData.json();
      setDays(jsonData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getDataDays();
  }, [days]);

  let dias = days?.list;

  //obtencion de las fechas
  const fecha1 = fechas(dias && dias[14].dt_txt);
  const { nombreMes: mes1, dia: day1, nombreDia: dianom1 } = fecha1;

  const fecha2 = fechas(dias && dias[23].dt_txt);
  const { nombreMes: mes2, dia: day2, nombreDia: dianom2 } = fecha2;

  const fecha3 = fechas(dias && dias[31].dt_txt);
  const { nombreMes: mes3, dia: day3, nombreDia: dianom3 } = fecha3;

  const fecha4 = fechas(dias && dias[39].dt_txt);
  const { nombreMes: mes4, dia: day4, nombreDia: dianom4 } = fecha4;

  return (
    <>
      <div className="sideRigth">
        <div className="divSuperior">
          <div className="btnGrados">
            <button className="btncf btnCent" id="btnC" onClick={btnC}>
              °C
            </button>
            <button className="btncf" id="btnF" onClick={btnF}>
              °F
            </button>
          </div>
          <div className="daysWeather">
            <div className="card" style={{ width: "6.7rem" }}>
              <div className="card-body">
                <h5 className="card-title">Tomorrow</h5>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dias && dias[7].weather[0].icon
                  }@2x.png`}
                  alt="pronostico"
                />
                <div className="divGradosAprox">
                  <p>
                    {temperature
                      ? dias && (dias[7].main.temp_max - 273.15).toFixed(1)
                      : (
                          ((dias[7].main.temp_max - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                  <p>
                    {temperature
                      ? dias && (dias[7].main.temp_min - 273.15).toFixed(1)
                      : (
                          ((dias[7].main.temp_min - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "6.7rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {dianom1.slice(0, 3)}
                  {". "} {day1}{" "}
                  {(mes1.charAt(0).toUpperCase() + mes1.slice(1)).slice(0, 3)}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dias && dias[14].weather[0].icon
                  }@2x.png`}
                  alt="pronostico"
                />
                <div className="divGradosAprox">
                  <p>
                    {temperature
                      ? dias && (dias[14].main.temp_max - 273.15).toFixed(1)
                      : (
                          ((dias[14].main.temp_max - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                  <p>
                    {temperature
                      ? dias && (dias[14].main.temp_min - 273.15).toFixed(1)
                      : (
                          ((dias[14].main.temp_min - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "6.7rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {dianom2.slice(0, 3)}
                  {". "} {day2}{" "}
                  {(mes2.charAt(0).toUpperCase() + mes2.slice(1)).slice(0, 3)}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dias && dias[23].weather[0].icon
                  }@2x.png`}
                  alt="pronostico"
                />
                <div className="divGradosAprox">
                  <p>
                    {temperature
                      ? dias && (dias[23].main.temp_max - 273.15).toFixed(1)
                      : (
                          ((dias[23].main.temp_max - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                  <p>
                    {temperature
                      ? dias && (dias[23].main.temp_min - 273.15).toFixed(1)
                      : (
                          ((dias[23].main.temp_min - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "6.7rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {dianom3.slice(0, 3)}
                  {". "} {day3}{" "}
                  {(mes3.charAt(0).toUpperCase() + mes3.slice(1)).slice(0, 3)}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dias && dias[24].weather[0].icon
                  }@2x.png`}
                  alt="pronostico"
                />
                <div className="divGradosAprox">
                  <p>
                    {temperature
                      ? dias && (dias[24].main.temp_max - 273.15).toFixed(1)
                      : (
                          ((dias[24].main.temp_max - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                  <p>
                    {temperature
                      ? dias && (dias[24].main.temp_min - 273.15).toFixed(1)
                      : (
                          ((dias[24].main.temp_min - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "6.7rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {dianom4.slice(0, 3)}
                  {". "} {day4}{" "}
                  {(mes4.charAt(0).toUpperCase() + mes4.slice(1)).slice(0, 3)}
                </h5>
                <img
                  src={`https://openweathermap.org/img/wn/${
                    dias && dias[31].weather[0].icon
                  }@2x.png`}
                  alt="pronostico"
                />
                <div className="divGradosAprox">
                  <p>
                    {temperature
                      ? dias && (dias[31].main.temp_max - 273.15).toFixed(1)
                      : (
                          ((dias[31].main.temp_max - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>
                  <p>
                    {temperature
                      ? dias && (dias[31].main.temp_min - 273.15).toFixed(1)
                      : (
                          ((dias[31].main.temp_min - 273.15) * 9) / 5 +
                          32
                        ).toFixed(1)}
                    <span className="celfa">{temperature ? "°C" : "°F"}</span>
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomSide data={data} />
      </div>
    </>
  );
};
