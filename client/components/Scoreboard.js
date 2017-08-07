import React  from 'react'
import {hitMiss} from './Score'
import {WobbleMaker, ShakeMaker} from './Animator'
export default function ScoreBoard (props) {

  let shots = props.shots.reduce((sum,shot)=>{
    if(shot.playerId === props.playerId){
      return  sum + 1
    }else{
      return sum
    }
  },0)

  const {hit, miss, last} = hitMiss(props.playerId,props.playerShips,props.shots,props.lastShot)
  console.log(last)
  let hitDiv = <div className='hits'>{hit}</div>
  let missAnimate = <div> {miss} </div>

  if(last.hit === true){
    hitDiv = <WobbleMaker animate={hitDiv}/>
  }else if (last.shot === true){
    missAnimate = <ShakeMaker animate={missAnimate}/>
  }


  return (
    <div className='scoreBoard'>
      <table>
        <thead><tr><th colSpan='3'>{props.title}</th></tr></thead>
        <thead><tr><th>Hits</th><th>Misses</th><th>Shots</th></tr></thead>
        <tbody><tr><td>{hitDiv}</td><td>{missAnimate}</td><td>{shots}</td></tr></tbody>
      </table>
    </div>
  )
}
