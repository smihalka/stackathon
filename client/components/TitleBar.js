import React  from 'react'

export default function TitleBar (props) {

  let whoseTurn = 'Your Turn'
  if(props.game){
    if(props.game.turnId !== props.player.id){
      whoseTurn = 'Opponent\'s Turn'
    }


    return (
      <div>
        <h3><b>{whoseTurn}</b></h3>
      </div>
    )
  }else{
    return (<h1>Loading....</h1>)
  }
}
