import React, { useState} from "react";
//import ReactPlayer from "react-player"
import GameOverView from "./components/GameOverView";
import './Main.scss'

const getData = async (search, setter) => {
  const response = await fetch(`http://localhost:3000/search?search=${search}`)
  const res = await response.json()
  setter(res)
}

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [chosen, setChosen] = useState(null)

  const handleClick = () => {
    setChosen(null)
    getData(search, setData)
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
      {chosen === null ? <div className="results-div">
        <ul>
          {data.map((d) => {
              return <li key={d.id} className="result-row"><label>{d.name}</label><button onClick={() => updateChosen(d)}>Select</button></li>
          })}
        </ul>
      </div> : <GameOverView data={chosen}/>
      }
    </div>
  );
}

export default App;
/*        {data !== null && <ReactPlayer
        url={data.signal_value}
        />} */