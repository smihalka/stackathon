/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'

/*------------------ INITIAL STATE --------------------*/

/* -----------------    ACTION TYPES     ------------------ */

const GET_SHOTS = 'GET_SHOTS'
const FIRE_SHOT = 'FIRE_SHOT'


/* ------------   ACTION CREATORS     ------------------ */

export const getShots = (shots) => {
  const action = { type: GET_SHOTS, shots }
  return action
}

export const postShot = (shot) => {
  const action = { type: FIRE_SHOT, shot }
  return action
}


/* ------------       THUNK CREATORS     ------------------ */

export const fetchShots = (id) =>
  dispatch =>
    axios.get(`/api/shots/${+id}`)
      .then(res =>
        dispatch(getShots(res.data)))
      .catch(err => console.log(err))

export const fireShot = (shot) =>
  dispatch =>
    axios.post('/api/shots/',shot)
      .then(res =>
        dispatch(postShot(res.data)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */


export default function (state = [], action) {
  switch (action.type) {
  case GET_SHOTS:
    return action.shots
  case FIRE_SHOT:
    return state.concat(action.shot)
  default:
    return state
  }
}
