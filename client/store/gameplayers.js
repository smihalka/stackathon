/*------------------ INITIAL STATE --------------------*/


/* -----------------    IMPORTS     ------------------ */
import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */

const GET_PLAYERS = 'GET_PLAYERS'
const UPDATE_PLAYER_STATUS = 'UPDATE_PLAYER_STATUS'

/* ------------   ACTION CREATORS     ------------------ */

const getGamePlayers = (players) => {
  const action = { type: GET_PLAYERS, players}
  return action
}

const changePlayersStatus = (status) => {
  const action = { type: UPDATE_PLAYER_STATUS, status}
  return action
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchGamePlayers = (gameId) =>
  dispatch =>
    axios.get(`/api/players/game/${+gameId}`)
      .then(res =>
        dispatch(getGamePlayers(res.data)))
      .catch(err => console.log(err))


export const updateStatusPlayer = (status) =>
  dispatch =>
    axios.put('/api/players/game/', status)
      .then(res =>
        dispatch(changePlayersStatus(status)))
      .catch(err => console.log(err))

/* ------------       REDUCERS     ------------------ */


export default function (state = [], action) {
  switch (action.type) {
  case GET_PLAYERS:
    return action.players
  case UPDATE_PLAYER_STATUS:
    return state.map((player)=>{
      if(player.id === action.status.id){
        return Object.assign({},player,action.status) 
      }else{
        return player
      }
    })
  default:
    return state
  }
}
