import React  from 'react'
import {Table} from 'react-bootstrap'
import {hitMiss} from './Score'

export default function ScoreBoard (props) {

  let shots = props.shots.reduce((sum,shot)=>{
    if(shot.playerId === props.playerId){
      return  sum + 1
    }else{
      return sum
    }
  },0)

  const {hit, miss} = hitMiss(props.playerId,props.playerShips,props.shots)

  return (
    <Table>
      <thead><tr><th colSpan='3'>{props.title}</th></tr></thead>
      <thead><tr><th>Hits</th><th>Misses</th><th>Shots</th></tr></thead>
      <tbody><tr><td>{hit}</td><td>{miss}</td><td>{shots}</td></tr></tbody>
    </Table>
  )
}
