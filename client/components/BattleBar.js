import React  from 'react'
import Ships from './Ships'
import ScoreBoard from './Scoreboard'
export default function BattleBar (props) {
  return (<div id='battlebar'>
    <ScoreBoard/>
    <Ships/>
  </div>
  )
}
