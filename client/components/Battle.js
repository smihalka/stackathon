import React, {Component} from 'react'
import Board from './Board.js'
import BattleBar from './BattleBar.js'
import TurnBar from './TurnBar.js'
import {connect} from 'react-redux'
import {fetchShips, fetchShots, fetchGameShips, me, fetchPlayer, fetchGame, fetchGamePlayers} from '../store'
import socket from '../socket'
import { shipCoordinates } from './Coordinates'


class Battle extends Component {
  componentDidMount(){
    this.props.fetchBattleData()
    socket.on('message', (message)=> {
      this.props.fetchBattleData()
      console.log('action', message)
    })

  }

  render(){
    if(this.props.gameships){
      const gameShipsLocalPlayer = shipCoordinates(this.props.gameships,this.props.ships,this.props.localplayer)

      const gameShipsOpponentPlayer = shipCoordinates(this.props.gameships,this.props.ships,this.props.opponentplayer)
      let lastShot
      if(this.props.shots){
        lastShot = this.props.shots[this.props.shots.length-1]
      }


      return (
        <div>
          <div className='topBar'>
            <div className='turnBar'>
              <TurnBar
                player={this.props.localplayer}
                opponentplayer={this.props.opponentplayer}
                game={this.props.game}
              />
            </div>
            <div className='nameBar'>
              <b>logged in as: {this.props.user.email}</b>
            </div>

          </div>

          <div className='board'>
            <Board
              title='Target Grid'
              board='tg'
              user={this.props.user}
              game={this.props.game}
              lastShot={lastShot}
              localplayer={this.props.localplayer}
              opponentplayer={this.props.opponentplayer}
              gameships={this.props.gameships}
              shots={this.props.shots}
              gameplayers={this.props.gameplayers}
              ships={this.props.ships}
              gameShipsOpponentPlayer={gameShipsOpponentPlayer}
              gameShipsLocalPlayer={gameShipsLocalPlayer}
            />
            <br/>
            <Board
              title='Battle Grid'
              board='bg'
              user={this.props.user}
              game={this.props.game}
              localplayer={this.props.localplayer}
              lastShot={lastShot}
              opponentplayer={this.props.opponentplayer}
              gameships={this.props.gameships}
              shots={this.props.shots}
              gameplayers={this.props.gameplayers}
              ships={this.props.ships}
              gameShipsOpponentPlayer={gameShipsOpponentPlayer}
              gameShipsLocalPlayer={gameShipsLocalPlayer}
            />
          </div>
          <div className='battlebar'>
            <BattleBar
              game={this.props.game}
              gameships={this.props.gameships}
              shots={this.props.shots}
              gameplayers={this.props.gameplayers}
              ships={this.props.ships}
              lastShot={lastShot}
              gameShipsOpponentPlayer={gameShipsOpponentPlayer}
              gameShipsLocalPlayer={gameShipsLocalPlayer}
              localplayer={this.props.localplayer}
              opponentplayer={this.props.opponentplayer}
            />
          </div>
        </div>
      )
    }else{
      return (<h2>Loading.....</h2>)
    }

  }
}

const mapStateToProps = (state) => {


  const opponent = state.gameplayers.find((player)=>{
    return player.id !== state.localplayer.id})
  return {
    user: state.user,
    game: state.game,
    localplayer: state.localplayer,
    gameships: state.gameships,
    shots: state.shots,
    gameplayers: state.gameplayers,
    opponentplayer: opponent,
    ships: state.ships
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBattleData: () => {
    dispatch(me())
      .then((res)=>{
        dispatch(fetchPlayer(res.user.id))
          .then((res)=>{
            dispatch(fetchGame(res.player.gameId))
              .then(()=> {
                dispatch(fetchGamePlayers(res.player.gameId))
                dispatch(fetchGameShips(res.player.gameId))
                dispatch(fetchShots(res.player.gameId))
              })
          })
      })
    dispatch(fetchShips())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Battle)
