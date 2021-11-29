import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const DataContext = createContext();

// this is Datacontext that is used to make all needed fetch calls
// for data that is used in different components
// thanks to this component i dont need to pass down props related to this data in every component
const DataContextProvider = ({game, comp}) => {
  const [newData, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        let temp = game;
        console.log(game);
        if (game.videos !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/game_videos?where=${game.videos.join()}&key=*`)
            temp.videos = data;
        }
        if (game.screenshots !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/screenshots?where=${game.screenshots.join()}&key=*`)
            temp.screenshots = data;
        }
        if (game.cover !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/covers?where=${game.cover}&key=*`)
            temp.cover = data;
        }
        if (game.genres !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/genres?where=${game.genres.join()}&key=*`)
            temp.genres = data;
        }
        if (game.involved_companies !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/involved_companies?where=${game.involved_companies.join()}&key=*`)
            const important = []
            data.forEach((d) => {
              if(d.developer === true) {
                important.push(d.company)
              }
            })
            temp.involved_companies = data;
            if(important.length > 0){
              const data2 = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/companies?where=${important.join()}&key=*`)
              temp.dev = data2.data;
            }
        }
        if (game.platforms !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/platforms?where=${game.platforms.join()}&key=*`)
            temp.platforms = data;
        }
        if (game.websites !== undefined){
            const {data} = await axios.get(`https://korppi-loppuprojekti.herokuapp.com/specific/websites?where=${game.websites.join()}&key=*`)
            temp.websites = data;
        }
        console.log(temp);
        setData(temp);
        setLoading(false);
    })()
  }, []);

  return (
    <DataContext.Provider
      value={{
        newData,
        loading}}>
      {comp}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
