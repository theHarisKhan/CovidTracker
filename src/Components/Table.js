import React from 'react'

function Table({stats}) {
    return (
        <div className="country--wise--stats div--marg">
        <h1 className="title">Country Wise Stats</h1>
        <table className="country--table">
            <tr>
              <th>Name</th>
              <th className="infected">Infected</th>
              <th className="tested">Tested</th>
              <th className="recoverd">Recoverd</th>
              <th className="infected">Death</th>
              <th>SourceURL</th>
              <th>Update</th>
            </tr>
        </table>
        <div className="overflow--scroll">
          <table className="country--table">
            {stats.map((stat,key) => (
              <tr key={key}>
                <td>{stat.country}</td>
                <td className="infected">{stat.infected}</td>
                <td className="tested">{stat.tested}</td>
                <td className="recoverd">{stat.recovered}</td>
                <td className="infected">{stat.deceased}</td>
                <td><a href={stat.sourceUrl} rel="noreferrer" target="_blank">Source</a></td>
                <td>{stat.lastUpdatedApify}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    )
}

export default Table
