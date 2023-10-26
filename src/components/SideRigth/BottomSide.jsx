import "./BottomSide.css";

export const BottomSide = ({ data }) => {
  let temp = data?.main;
  let wind = data?.wind;
  let rotacion = (wind && wind.deg) + "deg";

  return (
    <>
      <div className="bottomSide">
        <h3>Today´s Hightlights</h3>
        <div className="divCardHightlights">
          <div className="divCard">
            <div className="card" style={{ width: "17rem", marginTop: "1rem" }}>
              <div
                className="card-body"
                style={{ height: "8.5rem", textAlign: "center" }}
              >
                <h5
                  className="card-title"
                  style={{ marginBottom: ".2rem", color: "#E7E7EB" }}
                >
                  Wind status
                </h5>
                <h4>
                  <span style={{ color: "#E7E7EB", fontSize: "2.8rem" }}>
                    {Math.round((wind && wind.speed) * 2.23694)}
                  </span>{" "}
                  <span style={{ color: "#E7E7EB", fontSize: "1.5rem" }}>
                    mph
                  </span>
                </h4>
                <div className="diviconNavi">
                  <button>
                    <i
                      className={`fa-solid fa-location-arrow`}
                      id="arrow-icon"
                      style={{
                        color: " #e7e7eb",
                        transform: `rotate(${rotacion})`,
                      }}
                    ></i>
                  </button>
                  <p>WSW</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "17rem", marginTop: "1rem" }}>
              <div
                className="card-body"
                style={{ height: "8.5rem", textAlign: "center" }}
              >
                <h5
                  className="card-title"
                  style={{ marginBottom: ".2rem", color: "#E7E7EB" }}
                >
                  Humidity
                </h5>
                <h4>
                  <span style={{ color: "#E7E7EB", fontSize: "2.8rem" }}>
                    {temp && temp.humidity}
                  </span>{" "}
                  <span style={{ color: "#E7E7EB", fontSize: "1.5rem" }}>
                    %
                  </span>
                </h4>

                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${temp && temp.humidity}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="divCard">
            <div
              className="card"
              style={{ width: "17rem", marginTop: ".7rem" }}
            >
              <div
                className="card-body"
                style={{ height: "7rem", textAlign: "center" }}
              >
                <h5
                  className="card-title"
                  style={{ marginBottom: ".2rem", color: "#E7E7EB" }}
                >
                  Visibitity
                </h5>
                <h4>
                  <span style={{ color: "#E7E7EB", fontSize: "2.8rem" }}>
                    {data && (data?.visibility * 0.000621371).toFixed(1)}
                  </span>{" "}
                  <span style={{ color: "#E7E7EB", fontSize: "1.5rem" }}>
                    miles
                  </span>
                </h4>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "17rem", marginTop: ".7rem" }}
            >
              <div
                className="card-body"
                style={{ height: "7rem", textAlign: "center" }}
              >
                <h5
                  className="card-title"
                  style={{ marginBottom: ".2rem", color: "#E7E7EB" }}
                >
                  Air Pressure
                </h5>
                <h4>
                  <span style={{ color: "#E7E7EB", fontSize: "2.8rem" }}>
                    {temp && temp.pressure}
                  </span>{" "}
                  <span style={{ color: "#E7E7EB", fontSize: "1.5rem" }}>
                    mb
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
