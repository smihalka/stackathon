import React  from 'react'
import { Table } from 'react-bootstrap'
import { cols, rows } from './Coordinates'
import { connect } from 'react-redux'
import { fireShot, updateGameTurn} from '../store'
import socket from '../socket'

function Board (props) {

  return (
    <Table>
      <thead>
        <tr colSpan='11'><th colSpan='11'>{props.title}</th></tr>
      </thead>
      <tbody>
        <tr><th>X / Y</th>
          {cols.map((col)=>{
            return (<th key={`${col}`}>{col}</th>)
          })}
        </tr>
        {rows.map((row)=>{
          return (
            <tr key={row}><th>{row}</th>
              {cols.map((col)=>{

                let bgClass = null
                let tgClass = null
                //wait your turn
                let click = ()=>{props.handleTurn()}
                ///whose turn
                if(props.localplayer.id === props.game.turnId){
                  click = ()=>{props.handleShot(`${row}${col}`)}
                }
                //make colors
                let hit = false
                //show hit ship
                props.gameShipsOpponentPlayer.forEach((gameShip)=>{
                  gameShip.coordinates.forEach((coord)=>{
                    if(coord === `${row}${col}`){
                      hit = true
                    }
                  })
                })
                //show ships
                props.gameShipsLocalPlayer.forEach((gameShip)=>{
                  gameShip.coordinates.forEach((coord)=>{
                    if(coord === `${row}${col}`){
                      bgClass = 'ship'
                    }
                  })
                })

                props.shots.forEach((shot)=>{
                  if(`${row}${col}` === shot.coordinate){
                    if(props.board === 'tg' && props.localplayer.id === shot.playerId){
                      if(hit){
                        tgClass = 'hit'
                      }else{
                        tgClass = 'miss'
                      }

                    }
                    if(props.board === 'bg' && props.localplayer.id !== shot.playerId){
                      if(bgClass === 'ship'){
                        bgClass = 'hit'
                      }else{
                        bgClass = 'miss'
                      }

                    }
                  }
                })

                if(props.board === 'bg'){
                  return (<td className={bgClass} key={`${row}${col}`}></td>)
                }else{
                  return (<td className={tgClass} onClick={click} key={`${row}${col}`}></td>)
                }
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const mapStateToProps = null

const mapDispatchToProps= (dispatch,ownProps) => {
  return {
    handleShot (coordinate){
      //sent message to opponenet
      socket.emit('message', coordinate)
      const shot = {
        coordinate: coordinate,
        gameId: ownProps.game.id,
        playerId: ownProps.localplayer.id
      }
      dispatch(fireShot(shot))
      const otherPlayer = ownProps.gameplayers.find((player)=>{
        return player.id !== ownProps.localplayer.id
      })

      const changeTurn = {
        turnId: otherPlayer.id
      }
      dispatch(updateGameTurn(ownProps.game.id,changeTurn))
    },
    handleTurn (){
      alert('Wait Your Turn!')
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
