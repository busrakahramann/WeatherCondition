import { useCity } from '../context/CityContext'
import cities from '../helper/cities_of_turkey.json'

function Header() {
    const {city, setCity} = useCity();
  return (
    <div>
        <select name="city" value={city} onChange={(e)=>setCity(e.target.value)}>
            {cities.map((item)=>
                <option key={item.id}>{item.name}</option>
            )}
        </select>
    </div>
  )
}

export default Header