import React  from 'react'

export const hitMiss = (playerId,ships,shots)=>{
  let hit = 0
  let miss = 0
  const playerShots = shots.reduce(function(total, shot) {
    if(playerId == shot.playerId){
      return total.concat(shot.coordinate)
    }else{
      return total
    }
  }, [])

  let playerShipCoordinates = []

  ships.forEach((ship)=>{
    playerShipCoordinates = [...playerShipCoordinates,...ship.coordinates]
  })

  playerShots.forEach((shotCoord)=>{
    if(playerShipCoordinates.includes(shotCoord)){
      hit++
    }else{
      miss++
    }
  })

  return {hit, miss}

}
