/*------------------ INITIAL STATE --------------------*/
import axios from 'axios'



/* -----------------    IMPORTS     ------------------ */



/* -----------------    ACTION TYPES     ------------------ */

const GET_GAME = 'GET_GAME'
const UPDATE_GAME = 'UPDATE_GAME'

/* ------------   ACTION CREATORS     ------------------ */

const getGame = (game) => {
  const action = { type: GET_GAME, game}
  return action
}

const updateGame = (update) => {
  const action = { type: UPDATE_GAME, update}
  return action
}



/* ------------       THUNK CREATORS     ------------------ */

export const fetchGame = (id) =>
  dispatch =>
    axios.get(`/api/games/${+id}`)
      .then(res =>
        dispatch(getGame(res.data)))
      .catch(err => console.log(err))

export const updateGameTurn = (id,update) =>
  dispatch =>
    axios.put(`/api/games/${+id}`, update)
      .then(() =>
        dispatch(updateGame(update)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */


export default function (state = {}, action) {
  switch (action.type) {
  case GET_GAME:
    return action.game
  case UPDATE_GAME:
    return Object.assign({},state,action.update)
  default:
    return state
  }
}
