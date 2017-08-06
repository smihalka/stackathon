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
      <Button
        disabled
      bsSize='large'>
        Set Board
      </Button>
    </div>
      )
  }

}

export const playBoard = (opponent, local, game)=>{
  if(local.status === 1 && opponent.status === 1 && game.status !== 1){
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
  }else{
    return (
      <div>
        <Button disabled
        bsSize='large'>
          PLAY
        </Button>
      </div>
    )
  }

}
