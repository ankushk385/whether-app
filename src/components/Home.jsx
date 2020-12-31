import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4003953b33b7c9d3528eb09be98f82db`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setCountry(resJson.sys);
      console.log(resJson);
    };
    fetchUrl();
  }, [search]);

  return (
    <>
      <div className="container">
        <h1 className="capt title">welcome to whether app</h1>
        <div className="box">
          <div className="search">
            <input
              type="search"
              placeholder="type your location"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          {!city || !country ? (
            <div>
              <p className="capt">nothing to show</p>
            </div>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i className="fas fa-street-view capt"> {search}</i>
                </h2>

                <h2 className="temperature">
                  {city.temp} °C {country.country}
                </h2>
                <h4 className="tempminmax capt">
                  min temperature {city.temp_min} °C <br /> max temperature{" "}
                  {city.temp_max} °C
                </h4>
              </div>
              <div className="wave1"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
