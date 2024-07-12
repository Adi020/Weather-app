import LoaderWeather from "../LoaderWeather"
import City from "./City"

const CitiesList = ({ citiesInfo, fetchWeather, isShowModal, loadingCities, hiddenModal }) => {
  return (
    <section className='p-2 rounded-2xl text-[#385fa7] grid gap-2 absolute mt-2 w-full z-20'>
      {loadingCities && isShowModal ?
        <article className="bg-[#05283d] p-1 rounded-md border-gray-600 border cursor-pointer
          grid place-content-center">
          <LoaderWeather />
        </article> :
        isShowModal && citiesInfo.map(city =>
          <City
            key={city.lat}
            city={city}
            fetchWeather={fetchWeather}
            hiddenModal={hiddenModal}
          />)

      }
    </section>
  )
}

export default CitiesList