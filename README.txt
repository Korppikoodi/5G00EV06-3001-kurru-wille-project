Name:  Wille Kurru

Topic:   Goal of this web application is to create simple videogame react-app where user can search and visualize game data, see related game screenshots and see related game videos. User can freely search games and after fetching matching results user can choose the one they want to inspect closer. This project uses igdb api as its source of videogame data (https://api-docs.igdb.com/#about).

Heroku link:        https://korppi-loppuprojekti.herokuapp.com/

Release 1: 2021-11-15 features:

- Basic structure that end result will follow
- Most of the main components have been created while not completed
- user can currently search game by name
- based on search input user is presented with list of matching games where they can pick one to look more into
- out of the three views which are info, screenshots and videos currently screenshots and videos have content
- info component doesnt visualize data yet
- To be added: better appearance, screenshots and videos in grid view, info page that will show ratings and relevant
game data

Release 2: 2021-11-29 features:

- the info view with its contents has been added
- both screenshots and videos are shown in grid view now
- added paging to both screenshots and videos for better visualization
- some rather small css changes
- added datacontext so fetched gamedata is in one place and doesnt need to be passed down in props
- fixed a lot of bugs

Later additions:

- added loading component that shows loading icon and text that is given to it as a prop
- improved css

Known issues:

- fetching game related data can sometimes take a while
