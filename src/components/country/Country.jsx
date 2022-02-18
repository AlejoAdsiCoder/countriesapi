import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
  const [country, setCountry] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const {capital} = useParams()

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/capital/${capital}`)
    const data = await res.json()
    setCountry(data)
  }

  useEffect(() => {
    fetchCountryData()
  }, [capital])

  return (
    <>
      <section>
        {country.map(({name, capital, region, topLevelDomain}) => (
          <article key={name}>
            <h2>{name} , <span>{capital}</span></h2>
            <ul>
              <li>Region: {region}</li>
              <li>Top Level Domain: {topLevelDomain}</li>
              <li></li>
            </ul>
          </article>
        ))}
      </section>
    </>
  )
}

export default Country;