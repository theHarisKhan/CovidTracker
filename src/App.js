import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Table from './Table';

function App() {

  const [stats, setStats] = useState([])

  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
      .then((res) => res.json())
      .then((data) => {
        setStats(data)
        console.log(stats)
      })
  },[])
  
  return (
    <div className="App">
      <h1 className="App--title"><span>Covid</span>Tracker</h1>

      <div className="grid">
        {stats.slice(0,6).map((stat,key) => (
          <Header
            key={key}
            country={stat.country}
            infected={stat.infected}
            recoverd={stat.recovered}
          />
        ))}
      </div>

      <Table
        stats={stats} 
      />

      <SearchBar />

    </div>
  );
}

export default App;
