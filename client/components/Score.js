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

  playerShots.forEach((shotCoord)=>{
    ships.forEach((ship)=>{
      if(ship.coordinates.includes(shotCoord)){
        
        hit++
      }else{
        miss++
      }
    })
  })



  // ships.forEach((ship)=>{
  //   ship.coordinates.forEach((coord)=>{
  //     if(playerShots.includes(coord)){
  //       console.log("hit: ",coord, player)
  //       hit++
  //     }else{
  //       miss++
  //     }
  //   })
  // })

  return {hit, miss}

}
