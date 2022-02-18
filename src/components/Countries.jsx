import React, { useEffect, useState } from 'react'
import { Filter } from './Filter/Filter'
// import { SelectSearch } from './selectSearch/SelectSearch'

export default function Countries() {
    const [countries, setCountries] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const fetchCountries = async() => {
        const res = await fetch('https://restcountries.com/v3.1/region/ame')
        const data = await res.json()
        setCountries(data)
        console.log(data)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    const searchCountries = (searchValue) => {
        setSearchInput(searchValue)

        if(searchInput) {
            const filteredCountries = countries.filter((country) => (
                Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
            ))
            setFiltered(filteredCountries)
        } else {
            setFiltered(countries)
        }
    }

    return (
        <>  
            <div className="filtros">
                <Filter searchCountries={searchCountries} searchInput={searchInput} />
                {/* <SelectSearch setCountries={setCountries} /> */}
            </div>
            <div className="row">
            {searchInput.length > 0  ? (
                filtered.map(({ name, capital, region, population }) => (
                <div className="col s6 m3">
                    <div className="card">
                    <div className="card-image">
                    </div>
                    <div className="card-content">
                        <span className="card-title"> {name.common}</span>
                        <p>
                        <span>Population:</span> {population}
                        </p>
                        <p>
                        <span>Region:</span> {region}
                        </p>
                        <p>
                        <span>Capital: {capital}</span>
                        </p>
                    </div>
                    </div>
                </div>
                )
                ))
                : ( countries.map(({ name, capital, region, population, flags }) => (
                <div className="col s6 m3">
                    <div className="card">
                    <div className="card-image">
                        <img src={flags.png} alt={name + " flag"} />
                    </div>
                    <div className="card-content">
                        <span className="card-title"> {name.common}</span>
                        <p>
                        <span>Population:</span> {population}
                        </p>
                        <p>
                        <span>Region:</span> {region}
                        </p>
                        <p>
                        <span>Capital: {capital}</span>
                        </p>
                    </div>
                    </div>
                </div>
                )
            ))}
            </div>
        </>
    )
}
