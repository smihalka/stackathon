import React  from 'react'
import {Button, Glyphicon} from 'react-bootstrap'

export const setBoard = (ships,player)=>{

  if(ships.length === 5 && player.status === 0 ){
    return (<div>
      <Button
        type='submit'
        bsSize='large'
      >
        Set Board
      </Button>
    </div>
      )
  }else{
    return (<div>
    </div>
      )
  }

}

export const playBoard = (opponent, local, game)=>{
  if(game.status === 1){
    return (
      <div>

      </div>
    )
  }else{
    return (
      <div>
        <Button
          type='submit'
          bsSize='large'
        >
          PLAY
        </Button>
      </div>
    )
  }

}
