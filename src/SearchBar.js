import React, { useEffect, useState } from 'react'

function SearchBar() {
    const [country, setCountry] = useState([])
    const [query, setQuery] = useState("Pakistan")
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://covid19.mathdro.id/api/countries/${query}`)
        .then((res) => res.json())
        .then((data) => {
            setCountry(data)
            console.log(data)
        })
    },[query])

    const getSearch = e => {
        e.preventDefault()
        //replace empty space in search with plus sign(http-Search)
        if (search !== ""){
          setQuery(search)
          setSearch()
        } else {
          alert("Enter Country Name")
        }
    }

    return (
        <div className="search--div">
            <h1 className="title">Check Other Countries Stats</h1>
            <form onSubmit={getSearch} className="search--form">
                <input 
                type="text" 
                className="search--bar"
                placeholder="Search Country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <button className="search--btn" type="submit">
                    Search
                </button>
            </form>
            <div className="result--block">
                <table className="country--table top-marg">
                    <tr>
                        <th>Country</th>
                        <th className="infected">Infected</th>
                        <th className="recoverd">Recoverd</th>
                        <th className="infected">Death</th>
                    </tr>
                    <tr>
                        <td>{query}</td>
                        <td className="infected">{country.confirmed.value}</td>
                        <td className="recoverd">{country.recovered.value}</td>
                        <td className="infected">{country.deaths.value}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default SearchBar
