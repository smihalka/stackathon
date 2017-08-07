import React  from 'react'

export const hitMiss = (playerId,ships,shots,lastShot)=>{
  let hit = 0
  let miss = 0
  let last = {
    hit: false,
    shot: false,
    id: playerId
  }
  const playerShots = shots.reduce(function(total, shot) {
    if(playerId === shot.playerId){
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
    if(shotCoord === lastShot.coordinate){
      last.shot = true
    }
    if(playerShipCoordinates.includes(shotCoord)){
      if(shotCoord === lastShot.coordinate){
        last.hit = true
      }
      hit++
    }else{
      miss++
    }
  })

  return {hit, miss, last}

}
