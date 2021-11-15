import React, { useState} from "react";
import GameOverView from "./components/GameOverView";
import './Main.scss'
import CircularProgress from '@mui/material/CircularProgress';

const getData = async (search, setter, loading) => {
  const response = await fetch(`https://korppi-loppuprojekti.herokuapp.com/search?search=${search}`)
  const res = await response.json()
  setter(res)
  loading(false)
}

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [chosen, setChosen] = useState(null)
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setChosen(null)
    setData([])
    setLoading(true)
    getData(search, setData, setLoading)
  }

  const updateChosen = (val) => {
    setChosen(val)
  }

  return (
    <div className="Main">
      <div className="search-bar">
        <div className="headline">
          <h2>Gaming app</h2>
        </div>
        <div className="search">
        <input type='text' onChange={(e) => setSearch(e.target.value)}></input><button onClick={() => handleClick()}>Search</button>
        </div>
      </div>
      <div className='background'>
      {chosen === null ? <div className="results-div">
        {loading === true ? <CircularProgress/> :
        <ul>
          {data.map((d) => {
              return <li key={d.id} className="result-row"><label>{d.name}</label><button onClick={() => updateChosen(d)}>Select</button></li>
          })}
        </ul>}
      </div> : <GameOverView data={chosen}/>
      }
      </div>
    </div>
  );
}

export default App;
/*        {data !== null && <ReactPlayer
        url={data.signal_value}
        />} */