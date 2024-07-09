import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";
import bgImages from "./components/bgImages";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  // Función para manejar la obtención de la ubicación actual y la información del clima
  const fetchWeather = (lat, lon) => {
    const API_KEY = "f65121de84823584a220722a6bcba375";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    axios.get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.error(err));
  };

  // Función de éxito para obtener la posición actual
  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    fetchWeather(lat, lon);
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.cityName.value;
    const API_KEY = "f65121de84823584a220722a6bcba375";
    const URLCity = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${API_KEY}`;

    axios.get(URLCity)
      .then(({ data }) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          fetchWeather(lat, lon);
        } else {
          console.error('Ciudad no encontrada');
        }
      })
      .catch((err) => console.error(err));
  };

  // Efecto para obtener la ubicación actual al montar el componente
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <>
      <main
        className={`${weatherInfo ? bgImages[weatherInfo?.weather[0].icon] : "n9"
          } px-5 color bg-cover relative color min-h-screen text-white grid grid-cols-[1fr_minmax(auto,_400px)_1fr] 
          grid-rows-[1fr_auto_0.7fr] max-[640px]:grid-cols-[minmax(auto,_400px)] max-[640px]:items-center
          place-content-center max-[640px]:grid-rows-[auto_auto_1fr] font-principal-font`}
      >
        <h1 className="py-4 font-semibold text-xl">Wheater App</h1>
        <form className="w-full min-[640px]:pt-4" onSubmit={handleSubmit}>
          <div className="flex p-[2px] overflow-hidden justify-center items-center bg-[#53a8ca] rounded-3xl h-10">
            <button className="w-9 flex justify-center"><i className="bx bx-search text-xl"></i></button>
            <input className="w-full h-full rounded-full text-xl grid bg-transparent text-white placeholder-white bg-[#03cdff] px-2 outline-none" type="text" placeholder="search" id="cityName" />
          </div>

        </form>
        {weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loader />}
      </main>
    </>
  );
}

export default App;
