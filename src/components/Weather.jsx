import { useState } from "react";
import { kelvinToCelsius, kelvinToFahrenheit } from "../utils/Temp";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangleTemp = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="min-[640px]:col-start-2">
      <section className="grid gap-y-20 pt-6">
        <article className="p-2 grid gap-y-3 grid-cols-[1fr_auto] relative after:content-[''] after:absolute 
        after:top-0 after:left-0 after:bg-[#56a6d7] after:rounded-3xl after:w-full after:h-[50%] before:absolute before:content-['']
        before:bottom-0 before:w-full before:h-[75%] before:rounded-b-3xl before:border-b-4 before:border-[#0505056e] before:bg-[#56a6d7] weather__container ">
          <span className="text-6xl z-10 max-[420px]:text-4xl">
            {isCelsius
              ? kelvinToCelsius(weatherInfo?.main.temp)
              : kelvinToFahrenheit(weatherInfo?.main.temp)}
          </span>

          <div className="absolute top-0 -right-5 -translate-y-[30%] sm:w-[220px] z-10">
            <img
              className="w-full aspect-square"
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>

          <section className="col-start-1 grid gap-2 z-10">
            <article>
              <div className="flex gap-3">
                <img
                  className="w-[28px] aspect-square min-h-[28px] min-w-[28px]"
                  src="/images/Vector.png"
                  alt=""
                />
                <span>{weatherInfo?.wind.speed}m/s</span>
              </div>

            </article>

            <article>
              <div className="flex gap-3">
                <img
                  className="w-[28px] aspect-square min-h-[28px] min-w-[28px]"
                  src="/images/Vector (1).png"
                  alt=""
                />
                <span>{weatherInfo?.main.humidity}%</span>
              </div>
            </article>

            <article>
              <div className="flex gap-3">
                <img
                  className="w-[28px] aspect-square min-h-[28px] min-w-[28px]"
                  src="/images/arrow.png"
                  alt=""
                />
                <span>{weatherInfo?.main.pressure}hPa</span>
              </div>

            </article>
          </section>

          <h2 className="font-bold z-10 text-2xl max-[420px]:text-xl col-start-1 pl-[5%]">
            {weatherInfo?.name}, {weatherInfo?.sys.country}
          </h2>
          <h3 className="z-10 capitalize place-content-end">
            {weatherInfo?.weather[0].description}
          </h3>
        </article>
        <button
          className="font-sans font-semibold weather__btn text-lg place-self-center bg-[#5779c2] rounded-3xl w-[200px] "
          onClick={handleChangleTemp}
        >
          Change F / C
        </button>
      </section>


    </section>
  );
};
export default Weather;
