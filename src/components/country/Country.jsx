import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.scss';

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
      <section className="container">
        <Link className='waves-effect btn-back waves-light btn-large' to="/">&larr; Back</Link>
        {country.map(({name, capital, region, topLevelDomain, flags, nativeName, subregion, population, currencies, borders}) => (
          
          <article key={name}>
            <div className="row m6">
              <section className="country-flag col s6 m6">
              
                <img src={flags.png} alt={name + " flag"} />
              </section>
              <section className="country-inf col s6 m6">
              <h2>{ name }</h2>
                <ul>
                  <li>Native Name: { nativeName }</li>
                  <li>Population: {population}</li>
                  <li>Region: {region}</li>
                  <li>Sub Region: { subregion }</li>
                  <li>Capital: { capital }</li>
                  <li>Top Level Domain: {topLevelDomain}</li>
                  <li>Currencies: { currencies[0].code }</li>
                  {/* <li>Languajes: { languajes[0].iso639_1} {languajes[1].iso639_2} {languajes[2].name} { languajes[3].nativeName }</li> */}
                  <li>Border Countries: {borders.map((x) => (
                    <a className="waves-effect waves-light btn-small">{x}</a>
                  ))}</li>
                </ul>
              </section>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

export default Country;