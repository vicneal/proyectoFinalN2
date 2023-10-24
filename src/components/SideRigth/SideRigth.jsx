import "./SideRigth.css";
import { BottomSide } from "./BottomSide.jsx";
export const SideRigth = ({ data }) => {
  let prueba = data?.weather;

  const valoresPrueba = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="sideRigth">
        <div className="divSuperior">
          <div className="btnGrados">
            <button className="btnCent">°C</button>
            <button className="btnFaren">°F</button>
          </div>
          <div className="daysWeather">
            {valoresPrueba.map((el, key) => {
              return (
                <div className="card" style={{ width: "6.7rem" }} key={key}>
                  <div className="card-body">
                    <h5 className="card-title">Tomorrow</h5>
                    <img
                      src={`https://openweathermap.org/img/wn/${
                        prueba && prueba[0].icon
                      }@2x.png`}
                      alt="pronostico"
                    />
                    <div className="divGradosAprox">
                      <p>16°C</p>
                      <p>11°C</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <BottomSide data={data} />
      </div>
    </>
  );
};
