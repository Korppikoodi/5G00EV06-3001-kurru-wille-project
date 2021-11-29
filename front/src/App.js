import React, { useState, useContext} from "react";
import GameOverView from "./components/GameOverView";
import './Main.scss'
import CircularProgress from '@mui/material/CircularProgress';
import DataContextProvider from "./components/DataContext";

// this function fetches the searched game and sets data to data state as well as loading to false
const getData = async (search, setter, loading) => {
  const response = await fetch(`https://korppi-loppuprojekti.herokuapp.com/search?search=${search}`)
  const res = await response.json()
  setter(res)
  loading(false)
}
// this is the main component
function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [chosen, setChosen] = useState(null)
  const [loading, setLoading] = useState(false);
  // this is search button click event handler it starts the data fetch
  const handleClick = () => {
    setChosen(null)
    setData([])
    setLoading(true)
    getData(search, setData, setLoading)
  }

  // this sets the game json object as the one that will be used in child components
  // its the one user picked
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
        <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleClick()}></input>
        <button onClick={() => handleClick()}>Search</button>
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
      </div> : <DataContextProvider game={chosen} comp={<GameOverView/>}/>
      }
      </div>
    </div>
  );
}

export default App;
