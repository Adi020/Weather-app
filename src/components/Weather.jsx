import { useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/Temp";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangleTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="text-center flex flex-col items-center gap-10">
      <h2 className="font-bold text-2xl">
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>

      <section className="flex flex-col flex-wrap max-[640px]:items-center  sm:flex-row gap-6">
        <article className=" bg-[#56a6d7d3] p-2 rounded-3xl grid grid-cols-2 items-center">
          <h3 className="col-span-2 capitalize">
            {weatherInfo?.weather[0].description}
          </h3>

          <span className="text-4xl">
            {isCelsius
              ? kelvinToCelsius(weatherInfo?.main.temp)
              : kelvinToFahrenheit(weatherInfo?.main.temp)}
          </span>

          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>

        <section className="flex bg-[#56a6d7d3] max-[640px]:w-[80%] max-[400px]:flex-col p-2 py-6 rounded-3xl sm:flex-col gap-[10%] justify-center ">
          <article className="flex gap-2 sm:items-center">
            <div className="w-full flex justify-center">
              <img
                className="min-h-[28px] min-w-[28px]"
                src="/images/Vector.png"
                alt=""
              />
            </div>
            <div className="flex w-full justify-center">
              <span>{weatherInfo?.wind.speed}m/s</span>
            </div>
          </article>

          <article className="flex gap-2 sm:items-center">
            <div className="w-full flex justify-center">
              <img
                className="min-h-[28px] min-w-[28px]"
                src="/images/Vector (1).png"
                alt=""
              />
            </div>
            <div className="flex w-full justify-center">
              <span>{weatherInfo?.main.humidity}%</span>
            </div>
          </article>

          <article className="flex gap-2 sm:items-center">
            <div className="w-full flex justify-center">
              <img
                className="min-h-[28px] min-w-[28px]"
                src="/images/arrow.png"
                alt=""
              />
            </div>
            <div className="flex w-full justify-center">
              <span>{weatherInfo?.main.pressure}hPa</span>
            </div>
          </article>
        </section>
      </section>

      <button
        className="text-blue-700 font-sans text-lg bg-[#fbfbfb99] rounded-3xl w-[40%] "
        onClick={handleChangleTemp}
      >
        Change F / C
      </button>
    </section>
  );
};
export default Weather;
