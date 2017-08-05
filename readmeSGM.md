#SHAYNES README SO NOT READ YOU
 *installs*
 git init npm init npm install with pacakges --save
 #npm install bootstrap
 #npm install nodemon
 npm install sequelize@3 pg pg-hstore --save
 npm install --save express body-parser volleyball
 npm install nunjucks --save
 *In JSON Edit*
 'start:production': 'node theServerFilename (likely index.js or app.js)',
 'start:dev': 'nodemon -e html,css,js theServerFilename',
 'start': 'npm run start:dev'
 #install pg pg-hstore sequelize@3 get v 3
 express.static
 npm install body-parser --save
 #version 3 Broski
 #createdb somename
 *DOCS*
 *express* +   http://expressjs.com/en/api.html
 +   https://github.com/expressjs/body-parser
 *sequelize docs*
 +  http://sequelize.readthedocs.io/en/v3/
 #Model Defines it
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/
 *DATA TYPES*
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#data-types
 #Validations allow null N stuff
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#validations
 #getters-setters getterMethods setterMethods
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#getters-setters
 *Hooks*
 + http://sequelize.readthedocs.io/en/v3/docs/hooks/
 #instanceMethods (for the instance (var/const)), classMethods (for the class (model)),
 + http://sequelize.readthedocs.io/en/v3/docs/models-definition/#expansion-of-models
 #Associations belongsTo hasOne
 + http://sequelize.readthedocs.io/en/v3/docs/associations/
 #Eager Loading
 + http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading
 bluebird Promises are a Bitch
 + http://bluebirdjs.com/docs/api/promise.all.html
 sync stuff
 + https://sequelize.readthedocs.io/en/v3/docs/models-definition/#database-synchronization
 Validations
 + https://sequelize.readthedocs.io/en/v3/docs/models-definition/#validations
 React
 + https://facebook.github.io/react/docs/rendering-elements.html
 Redux
 + http://redux.js.org/
 Javascript Docs
 + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 Semantic Commit Messages
 + https://seesparkbox.com/foundry/semantic_commit_messages
 React Animate
+ https://www.npmjs.com/package/react-animate

whiteboard... look over ....
early

battleoftheships

component

nav
  login
  sign up
  play (new game, if in game not there)
    (searches for the first other player that is available to play against)



sidebar (after pressing play && finding another player)
  (start) -> has ships
  (ships) -> size, and add coordinates (set coord, once all set)
  (begin) -> is active once all coords are set
  (score) player 1 && 2 misses, hits
  (turn) player who should be up
  if(logged in -> your player name) -> if not logged in your random number

Battle component
board (after pressing play && finding another player)
  (top is the placement of your ships and the hits sent)
  (bottom is the shots/hits that you send)

  board -> sockets
    board click box as shot, shows up on other component

react-motion
react-animate

#	Class of ship	Size
1	Carrier	5
2	Battleship	4
3	Cruiser	3
4	Submarine	3
5	Destroyer	2


user hasmany players

player belongsTo user
player belongsto game game ID

game has many players

game
id turn

ships
  type, size

shots


type: User

type: Player

type: Game
associations:
  hasMany Players
  hasOne Player as turn
rows:
  - id
  * turn

type: Ship
associations:
rows:
  - id
  - type: STRING
  - size: INTEGER

type: GameShip
associations:
  GameShip belongsTo Game
  GameShip belongsTo Ship
  GameShip belongsTo Player
rows:
  - id
  * gameId
  * shipId
  * playerId
  - orientation: STRING
  - startCoordinate: STRING

type: Shot
associations:
  Shot belongsTo Game
  Shot belongsTo Player
rows:
  - id
  * gameId
  * playerId
  - coordinates: STRING
