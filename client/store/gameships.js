/*------------------ INITIAL STATE --------------------*/
import axios from 'axios'



/* -----------------    IMPORTS     ------------------ */



/* -----------------    ACTION TYPES     ------------------ */

const GET_GAME_SHIPS = 'GET_GAME_SHIPS'
const ADD_CHANGE_SHIP = 'ADD_CHANGE_SHIP'

/* ------------   ACTION CREATORS     ------------------ */

const getGameShip = (gameships) => {
  const action = { type: GET_GAME_SHIPS, gameships}
  return action
}

const addUpdateShip = (ship) => {
  const action = { type: ADD_CHANGE_SHIP, ship}
  return action
}
// export const setShip = (coordinates) => {
//   const action = { type: GET_GAME_SHIPS, coordinates}
//   return action
// }


/* ------------       THUNK CREATORS     ------------------ */

export const fetchGameShips = (id) =>
  dispatch =>
    axios.get(`/api/gameships/${+id}`)
      .then(res =>
        dispatch(getGameShip(res.data)))
      .catch(err => console.log(err))

export const addChangeShip = (ship) =>
  dispatch =>
    axios.post('/api/gameships/', ship)
      .then(res =>
        dispatch(addUpdateShip(res.data)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */


export default function (state = [], action) {
  switch (action.type) {
  case GET_GAME_SHIPS:
    return action.gameships
  case ADD_CHANGE_SHIP:
    let update = false
    state.forEach((ship)=>{
      if(ship.id === action.ship.id){ update = true}
    })
    if(update){
      return state.map((ship)=>{
        if(ship.id === action.ship.id){
          return action.ship
        }else{
          return ship
        }
      })
    }else{
      return [...state,action.ship]
    }
  default:
    return state
  }
}
