import React  from 'react'
import Ships from './Ships'
import ScoreBoard from './Scoreboard'
import {setBoard, playBoard} from './GameButtons'
import { connect } from 'react-redux'
import { updateStatusPlayer, fetchPlayer, updateGameTurn} from '../store'


function BattleBar (props) {

  if(props.opponentplayer){
    return (<div id='battlebar'>
      <ScoreBoard
        playerShips={props.gameShipsLocalPlayer}
        title={`Opponent Id ${props.opponentplayer.id}`}
        shots={props.shots}
        playerId={props.opponentplayer.id}
      />
      <hr/>
      <ScoreBoard
        playerShips={props.gameShipsOpponentPlayer}
        title={`Your Id ${props.localplayer.id}`}
        shots={props.shots}
        playerId={props.localplayer.id}
      />
      <hr/>
      <Ships
        ships={props.ships}
        player={props.localplayer}
        playerShips={props.gameShipsLocalPlayer}
      />
      <form name='statusBoard' onSubmit={props.handleSubmitBoardStatus}>
        <div className='gamebuttons'>{setBoard(props.gameShipsLocalPlayer,props.localplayer)}</div>
      </form>
      <hr/>
      <form onSubmit={props.handleSubmitGameStatus}>
        <div className='gamebuttons'>{playBoard(props.localplayer,props.opponentplayer,props.game)}</div>
      </form>
    </div>
    )
  }else{
    return (<h3>Loading......</h3>)
  }
}

const mapStateToProps = null

const mapDispatchToProps= (dispatch,ownProps) => {
  return {
    handleSubmitBoardStatus (event){
      event.preventDefault()
      const changeStatus = {
        id: ownProps.localplayer.id,
        gameId: ownProps.localplayer.gameId,
        status: 1
      }
      dispatch(updateStatusPlayer(changeStatus))
        .then(()=>{
          dispatch(fetchPlayer(ownProps.localplayer.userId))
        })


      console.log(ownProps)
    },
    handleSubmitGameStatus (event){
      event.preventDefault()
      dispatch(updateGameTurn(ownProps.localplayer.gameId, { status: 1}))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BattleBar)
