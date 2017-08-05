/*------------------ INITIAL STATE --------------------*/


/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */

const GET_PLAYERS = 'GET_PLAYERS'

/* ------------   ACTION CREATORS     ------------------ */

const getGamePlayers = (players) => {
  const action = { type: GET_PLAYERS, players}
  return action
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchGamePlayers = (gameId) =>
  dispatch =>
    axios.get(`/api/players/game/${+gameId}`)
      .then(res =>
        dispatch(getGamePlayers(res.data)))
      .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */


export default function (state = [], action) {
  switch (action.type) {
  case GET_PLAYERS:
    return action.players
  default:
    return state
  }
}
