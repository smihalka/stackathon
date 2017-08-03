import React  from 'react'
import {Button, Glyphicon} from 'react-bootstrap'

export const setBoard = ()=>{
  return (<div>

    <Button
    bsSize='large'>
      Set Board
    </Button>
  </div>
    )

}

export const playBoard = ()=>{
  return (
    <div>
      <Button
      bsSize='large'>
        PLAY
      </Button>
    </div>
  )
}
