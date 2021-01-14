import React from 'react'

function Header({country,infected,recoverd}) {
    return (
        <div className="grid--block">
            <h2 className="country">{country}</h2>
            <h4 className="primary">Infected</h4>
            <p className="primary--numb">{infected}</p>
            <h4 className="secondary">Recover</h4>
            <p className="secondary--numb">{recoverd}</p>
        </div>
    )
}

export default Header
