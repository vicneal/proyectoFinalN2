import "./SideLeft.css";
import ImgNubes from "../../assets/img1.png";

export const SideLeft = ({ data, temperature }) => {
  let prueba = data?.weather;
  let temp = data?.main;

  let date = new Date();
  let day = { weekday: "long", locale: "en-US" };
  let nombreDia = date.toLocaleDateString("en-US", day);

  let month = { month: "long" };
  let nombreMes = date.toLocaleString("es-ES", month);
  return (
    <>
      <div className="TiempoActual">
        <div className="MenuBusqueda">
          <button type="button" className="btn btn-secondary">
            Seach for places
          </button>
          <button className="btnLocation">
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
    </>
  );
};
