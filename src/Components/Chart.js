import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'

function Chart() {
    const [globalData, setGlobalData] = useState({})

    useEffect(()=>{
        fetch('https://api.covid19api.com/summary')
        .then((res) => res.json())
        .then((data) =>{
            setGlobalData(data.Global)
            console.log(data.Global)
        })
    },[])

    const data = {
        labels: [
            'Total Active Cases',
            'Total Recoverd',
            'Total Deaths'
        ],
        datasets: [{
            label: 'People',
            data: [globalData.TotalConfirmed, globalData.TotalRecovered, globalData.TotalDeaths],
            backgroundColor: [
                '#FF6384',
                'green',
                'red'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                'green',
                'red'
            ]
        }]
    }

    return (
        <div>
            <h1>COVID WORLD STATS</h1>
            <ul className="list--item">
                <li className="item--data">Confirmed <br/> <span className="data">{globalData.TotalConfirmed}</span></li>
                <li className="item--data">Recovered <br/> <span className="data">{globalData.TotalRecovered}</span></li>
                <li className="item--data">Deaths <br/> <span className="data">{globalData.TotalDeaths}</span></li>
            </ul>
            <Bar data={data} />
            
        </div>
    )
}

export default Chart
