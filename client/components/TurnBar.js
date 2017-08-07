import React, {Component}  from 'react'
import styled, { keyframes } from 'styled-components'
import { flipInY } from 'react-animations'

export default function TurnBar (props) {

  let whoseTurn
  if(props.game){
    if(props.game.status === 0){
      if(props.player.status === 0){
        whoseTurn = 'Set Ships For Battle'
      }else if(props.player.status === 1 && props.opponentplayer.status === 0){
        whoseTurn = 'Awaiting Enemy Incursion'
      }else{
        whoseTurn = 'Press Play!!!'
      }
    }else if(props.game.status !== 0){
      if(props.game.turnId !== props.player.id){
        whoseTurn = 'Take Cover Enemy Fire!!!'
      }else{
        whoseTurn = 'Take Aim And Fire!!!'
      }
    }
    //Press Play

    const Title = styled.h2`
    	font-size: 3em;
    	text-align: left;
    	color: red;
    `
    const animation = keyframes`${flipInY}`

    const BouncyDiv = styled.div`
      animation: 1s ${animation};
    `
    return (
      <div>
        <BouncyDiv>
          <Title>{whoseTurn}</Title>
        </BouncyDiv>
      </div>
    )
  }else{
    return (<h1>Loading....</h1>)
  }
}
