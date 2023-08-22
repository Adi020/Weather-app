import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";
import bgImages from "./components/bgImages";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "f65121de84823584a220722a6bcba375";

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios
      .get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  /* ${bgImages[weatherInfo?.weather[0].icon]} */
  return (
    <>
      <main
        className={`${
          weatherInfo ? bgImages[weatherInfo?.weather[0].icon] : "n9"
        } px-5 color bg-cover color min-h-screen text-white flex justify-center items-center font-principal-font`}
      >
        {weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loader />}
      </main>
    </>
  );
}

export default App;
