import "./SideLeft.css";
import ImgNubes from "../../assets/img1.png";
import { useState, useEffect } from "react";

export const SideLeft = ({
  data,
  temperature,
  handleBtnLima,
  handleBtnMadrid,
  handleBtnTokio,
  onSearchCountry,
  uicacionActual,
}) => {
  let prueba = data?.weather;
  let temp = data?.main;
  let date = new Date();
  let day = { weekday: "long", locale: "en-US" };
  let nombreDia = date.toLocaleDateString("en-US", day);

  let month = { month: "long" };
  let nombreMes = date.toLocaleString("es-ES", month);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearchCountry(searchValue);
    setSearchValue("");
  };
  const [locacion, setLocacion] = useState({
    latitud: data.coord.lat,
    longitud: data.coord.lon,
  });
  const [country, setCountry] = useState([]);

  const handleLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        const da = await getDataDays(latitud, longitud);
        uicacionActual(da.city.name);
      });
    } else {
      console.log("Geolocalización no disponible en este navegador.");
    }
  };
  const getDataDays = async (latitud, longitud) => {
    try {
      const fetchData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=15f19b77e326ed25f9832b22e374fb95`
      );
      const jsonData = await fetchData.json();
      setCountry(jsonData);
      return jsonData;
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  return (
    <>
      <div className="TiempoActual">
        <div className="MenuBusqueda">
          <button
            className="btn btn-secondary "
            type="button "
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{ width: "200px" }}
          >
            Seach for places
          </button>

          <button
            className="btnLocation"
            type="button "
            data-bs-toggle="modal"
            onClick={handleLocation}
          >
            <i className="bi bi-crosshair"></i>
          </button>
        </div>
        <div className="divIcon">
          <img src={ImgNubes} alt="Nubes" className="nubes" />
          <img
            className="clima"
            src={`https://openweathermap.org/img/wn/${
              prueba && prueba[0].icon
            }@2x.png`}
            alt="clima"
          />
        </div>
        <div className="divGrados">
          <p>
            <span className="temperatura">
              {temperature
                ? temp && Math.floor(temp.temp)
                : temp && (Math.floor(temp.temp) * 9) / 5 + 32}
            </span>
            <span className="grados">{temperature ? "°C" : "°F"}</span>
          </p>
          <p className="description">
            {prueba &&
              prueba[0].description.charAt(0).toUpperCase() +
                prueba[0].description.slice(1)}
          </p>
          <div className="divLocation">
            <p className="date">
              Today - {nombreDia.slice(0, 3)}
              {". "} {date.getDate()}{" "}
              {(nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)).slice(
                0,
                3
              )}
            </p>
            <p className="location">
              <span>
                <i className="bi bi-geo-alt-fill"></i>
              </span>{" "}
              {data && data?.name}
            </p>
          </div>
        </div>
      </div>
      {/* --------------------------- */}
      <div
        className="modal fade come-from-modal left"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog .modal-dialog-scrollabl" role="document">
          <div
            className="modal-content"
            style={{ color: "white", background: "#100E1D" }}
          >
            <div className="modal-header" style={{ border: "none" }}>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ color: "white", fontSize: "1.5rem" }}
              >
                X
              </button>
            </div>

            <div className="ubicacionesDefecto">
              <div className="d-flex my-5" style={{ width: "499px;" }}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Country"
                  defaultValue={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleSearch}
                >
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: " #a7aaaf;" }}
                  ></i>
                </button>
              </div>
              <button
                className="btn btn-outline-secondary ubiDefec"
                onClick={handleBtnLima}
                data-bs-dismiss="modal"
              >
                Lima
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "#86888a" }}
                ></i>
              </button>
              <button
                className="btn btn-outline-secondary ubiDefec"
                onClick={handleBtnMadrid}
                data-bs-dismiss="modal"
              >
                Madrid
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "#86888a" }}
                ></i>
              </button>
              <button
                className="btn btn-outline-secondary ubiDefec"
                onClick={handleBtnTokio}
                data-bs-dismiss="modal"
              >
                Tokio
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "#86888a" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
