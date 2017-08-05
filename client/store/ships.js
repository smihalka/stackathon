/*------------------ INITIAL STATE --------------------*/


/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */

const GET_SHIPS = 'GET_SHIPS'

/* ------------   ACTION CREATORS     ------------------ */

const getShips = (ships) => {
  const action = { type: GET_SHIPS, ships}
  return action
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchShips = () =>
  dispatch =>
    axios.get('/api/ships/')
      .then(res =>
        dispatch(getShips(res.data)))
      .catch(err => console.log(err))


/* ------------       REDUCERS     ------------------ */


export default function (state = [], action) {
  switch (action.type) {
  case GET_SHIPS:
    return action.ships
  default:
    return state
  }
}
