import React, { useState} from "react";
import GameOverView from "./components/GameOverView";
import './Main.scss'
import axios from 'axios';
import DataContextProvider from "./components/DataContext";
import Loading from "./components/Loading";

// this function fetches the searched game and sets data to data state as well as loading to false
const getData = async (search, setter, loading) => {
  const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/search?search=${search}`)
  setter(data)
  loading(false)
}
// this is the main component
function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [chosen, setChosen] = useState(null)
  const [loading, setLoading] = useState(null);
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
      {loading === null ? <></> :
        chosen === null ?
        loading === true ? <Loading text={'Searching'}/> : data.length > 0 ?
        <div className="results-div">
        <ul>
          {data.map((d) => {
              return <li key={d.id} className="result-row"><label>{d.name}</label><button onClick={() => updateChosen(d)}>Select</button></li>
          })}
        </ul></div>: <p>NO RESULTS</p>
       : <DataContextProvider game={chosen} comp={<GameOverView/>}/>
      }
      </div>
    </div>
  );
}

export default App;
