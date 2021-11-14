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
