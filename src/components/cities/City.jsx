import LoaderWeather from "../LoaderWeather"

const City = ({ city, fetchWeather, hiddenModal }) => {

  const handleClickCity = () => {
    const lat = city.lat
    const lon = city.lon
    fetchWeather(lat, lon)
    hiddenModal()
  }

  return (
    <article onClick={handleClickCity} className="bg-[#05283d] hover:bg-[#0e334d] p-1 rounded-md border-gray-600 border cursor-pointer
    grid grid-cols-[1fr_1fr]">
      <h2 className="font-bold text-lg truncate">{city.name}</h2>
      <div className="flex gap-2">
        <span className="font-bold">Lat:</span>
        <span>{city.lat}</span>
      </div>
      <div className="flex gap-2 col-start-2">
        <span className="font-bold break-words">Lon:</span>
        <span>{city.lon}</span>
      </div>
    </article>
  )
}

export default City
