Name:  Wille Kurru

Topic:              Goal of this web application is to create videogame react-app where user can search and visualize game data (price, sales, ratings, views on twitch etc), see related pictures to the game and see related game trailer. Each of these may get their own view and if i decide to go with that then routing is done using react-router and data context will be shared between components using context hook. User will have choises regarding what data they want to get visualized and if possible maybe even chart visualization regarding succes of game by its playerbase and sales figures. Pictures related to game could be gallery of gameplay scenes. Video will be atleast trailer to game and possibly some gameplay as well. I plan on using atleast steam (https://developer.valvesoftware.com/wiki/Steam_Web_API?ref=apilist.fun) and twitch (https://dev.twitch.tv/docs?ref=apilist.fun) apis.

Heroku link:        https://korppi-loppuprojekti.herokuapp.com/


Release 1: 2021-11-15 features

- dropped steam api from possible apis and added https://api-docs.igdb.com/#about as main use api
- Basic structure that end result will follow
- Most of the main components have been created while not completed
- user can currently search game by name
- based on search input user is presented with list of matching games where they can pick one to look more into
- out of the three views which are info, screenshots and videos currently screenshots and videos have content
- info component doesnt visualize data yet
- To be added: better appearance, screenshots and videos in grid view, info page that will show ratings and relevant
game data

Release 2: 2021-11-29 features

- the info view with its contents has been added
- both screenshots and videos are shown in grid view now
- added paging to both screenshots and videos for better visualization
- some rather small css changes
- added datacontext so fetched gamedata is in one place and doesnt need to be passed down in props
- fixied a lot of bugs

Known bugs

- videos and screenshots change with little delay when user changes page for the first time
- not really a bug but there isnt notice to user if search doesnt match any game (doesnt crash but nothing happens after loading)

Link to screencast: https://tuni-my.sharepoint.com/:v:/g/personal/wille_kurru_tuni_fi/EYr7mc94ezJAuGygjHqRZtsBm8DSqVPJpqa8Bb8mCLNwGw?e=jXw1nC
       timestamps: 1. 0.00 - 03.28
                    2. 03.28 - 16.10
                    3. 16.10 - 17.17
                    4. 17.17 - 18.51
