import React  from 'react'
import { cols, rows } from './Coordinates'
import { connect } from 'react-redux'
import { FadeInMaker,ZoomInMaker } from './Animator'
import { fireShot, updateGameTurn} from '../store'
import socket from '../socket'

function Board (props) {


  return (
    <div><h3>{props.title}</h3>
      <div className='guide'>

        <table>
          <tbody>
            <tr><th></th>
              {cols.map((col)=>{
                return (<th key={`${col}`}>{col}</th>)
              })}
            </tr>
            {rows.map((row)=>{
              return (
                <tr key={row}><th>{row}</th>
                  {cols.map((col)=>{

                    let hitShip = null
                    let bgClass = 'pinEmpty'
                    let tgClass = 'pinEmpty'
                    let tgDiv = <div className={tgClass}></div>
                    let bgDiv = <div className={bgClass}></div>
                    //wait your turn
                    let click = null
                    if(props.game.status === 1){
                      ///whose turn
                      click = ()=>{props.handleTurn()}
                      if(props.localplayer.id === props.game.turnId){
                        click = ()=>{props.handleShot(`${row}${col}`)}
                      }
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
                      gameShip.coordinates.forEach((coord, i)=>{
                        if(coord === `${row}${col}`){
                          bgClass = `ship${gameShip.shipId}${gameShip.orientation[0].toUpperCase()}${i}`
                        }
                      })
                    })



                    props.shots.forEach((shot, i)=>{
                      if(`${row}${col}` === shot.coordinate){
                        if(props.board === 'tg' && props.localplayer.id === shot.playerId){
                          // /if(props.shots.length-1 === i) {console.log(props.game.turn,shot.coordinate)}
                          if(hit){
                            tgClass = 'pinHit'
                            if(props.lastShot.coordinate === shot.coordinate){
                              tgDiv = <ZoomInMaker animate={tgClass} type='flash'/>
                            }else{
                              tgDiv = <div className={tgClass}></div>
                            }

                          }else{
                            tgClass = 'pinMiss'
                            if(props.lastShot.coordinate === shot.coordinate){
                              tgDiv = <FadeInMaker animate={tgClass} type='flash'/>
                            }else{
                              tgDiv = <div className={tgClass}></div>
                            }
                          }

                        }


                        if(props.board === 'bg' && props.localplayer.id !== shot.playerId){
                          if(bgClass !== 'pinEmpty'){

                            bgClass = `${bgClass}`
                            hitShip = <div className='pinHitShip'></div>
                            bgDiv = <div className={bgClass}>{hitShip}</div>



                          }else{
                            bgClass = 'pinMiss'
                          }

                        }
                      }
                    })

                    if(props.board === 'bg'){
                      return (<td id='bg'  key={`${row}${col}`}><div className={bgClass}>{hitShip}</div></td>)
                    }else{
                      return (<td id='tg' onClick={click} key={`${row}${col}`}>{tgDiv}</td>)
                    }
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
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
