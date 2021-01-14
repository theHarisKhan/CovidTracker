import React, { useState, useEffect } from 'react'
import {Pie} from 'react-chartjs-2'

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
            data: [globalData.TotalConfirmed, globalData.TotalRecovered, globalData.TotalDeaths],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                'FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    }

    return (
        <div>
            <h1>Covid Data</h1>
            <Pie data={data} />
            
        </div>
    )
}

export default Chart
