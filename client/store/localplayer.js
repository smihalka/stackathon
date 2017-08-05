/*------------------ INITIAL STATE --------------------*/


/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */

const GET_LOCAL_PLAYER = 'GET_LOCAL_PLAYER'

/* ------------   ACTION CREATORS     ------------------ */

const getPlayer = (player) => {
  const action = { type: GET_LOCAL_PLAYER, player}
  return action
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchPlayer = (id) =>
  dispatch =>
    axios.get(`/api/players/${+id}`)
      .then(res =>
        dispatch(getPlayer(res.data)))
      .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */


export default function (state = {}, action) {
  switch (action.type) {
  case GET_LOCAL_PLAYER:
    return action.player
  default:
    return state
  }
}
