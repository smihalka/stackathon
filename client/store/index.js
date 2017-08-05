import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import shots from './shots'
import gameships from './gameships'
import ships from './ships'
import localplayer from './localplayer'
import game from './game'
import gameplayers from './gameplayers'

const reducer = combineReducers({user, shots, ships, gameships, localplayer, game, gameplayers})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './shots'
export * from './gameships'
export * from './ships'
export * from './localplayer'
export * from './game'
export * from './gameplayers'
