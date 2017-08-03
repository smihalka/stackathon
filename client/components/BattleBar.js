import React  from 'react'
import Ships from './Ships'
import ScoreBoard from './Scoreboard'
import {setBoard, playBoard} from './GameButtons'

export default function BattleBar (props) {
  return (<div id='battlebar'>
    
    <ScoreBoard/>
    <Ships/>
    <div className='gamebuttons'>{setBoard()}</div>
    <hr/>
    <div className='gamebuttons'>{playBoard()}</div>

  </div>
  )
}
