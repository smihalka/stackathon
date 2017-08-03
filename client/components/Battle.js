import React, {Component} from 'react'
import Board from './Board.js'
import BattleBar from './BattleBar.js'

export default class Battle extends Component {
  render(){
    return (
      <div>
        <div className='board'>
          <Board/>
          <br/>
          {/* I would like some break that shows the diff */}
          <Board/>
        </div>
        <div className='battlebar'>
          <BattleBar/>
        </div>
      </div>
    )
  }
}
