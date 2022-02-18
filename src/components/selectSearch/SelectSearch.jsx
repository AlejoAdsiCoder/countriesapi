import React from 'react';
import './select.scss';
import { useEffect } from 'react';

export const SelectSearch = ({setCountries}) => {
  // const [regions, setRegions] = useState([])

  const region = [
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Europe",
    }
  ]

  const fetchCountryByRegion = async(region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    setCountries(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCountryByRegion()
  })

  return (
    <div className="input-field col s6">
      <select name="select" id="select" value={region.name} onChange={(e) => fetchCountryByRegion(e.target.value)}>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}
