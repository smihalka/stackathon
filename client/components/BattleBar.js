import React  from 'react'
import Ships from './Ships'
import ScoreBoard from './Scoreboard'
import {setBoard, playBoard} from './GameButtons'

export default function BattleBar (props) {

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
      />
      <div className='gamebuttons'>{setBoard()}</div>
      <hr/>
      <div className='gamebuttons'>{playBoard()}</div>

    </div>
    )
  }else{
    return (<h3>Loading......</h3>)
  }
}
