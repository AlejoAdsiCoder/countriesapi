import React from 'react'

export const Filter = ({searchCountries, searchInput}) => {
  return (
    <div>
        <input type="search" name="search" id="search" placeholder="Search by country name" value={searchInput} onChange={(e) => searchCountries(e.target.value) }   
        />
    </div>
  )
}
