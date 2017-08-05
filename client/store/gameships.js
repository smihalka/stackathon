/*------------------ INITIAL STATE --------------------*/
import axios from 'axios'



/* -----------------    IMPORTS     ------------------ */



/* -----------------    ACTION TYPES     ------------------ */

const GET_GAME_SHIPS = 'GET_GAME_SHIPS'


/* ------------   ACTION CREATORS     ------------------ */

const getGameShip = (gameships) => {
  const action = { type: GET_GAME_SHIPS, gameships}
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

/* ------------       REDUCERS     ------------------ */


export default function (state = [], action) {
  switch (action.type) {
  case GET_GAME_SHIPS:
    return action.gameships
  // case SET_GAME_SHIP:
  //   return action.gameships
  default:
    return state
  }
}
