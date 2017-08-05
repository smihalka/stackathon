import React  from 'react'

export const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]
export const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const coordinates = (align, size) =>{

  const bowXY = []
  if(align === 'vertical'){

    for(let i = 0; i < rows.length - size; i++){
      for(let j = 0; j < cols.length; j++){
        bowXY.push(`${rows[i]}${cols[j]}`)
      }
    }
  }else{
    for(let i = 0; i < rows.length; i++){
      for(let j = 0; j < cols.length - size; j++){
        bowXY.push(`${rows[i]}${cols[j]}`)
      }
    }
  }
  return bowXY
}

export const align = ['vertical', 'horizontal']

export const shipCoordinates = (gameships, ships, player)=>{
  const gameShipsLocalPlayer = gameships.filter((gameship)=>{
    if(gameship.playerId === player.id){
      const shipsObject = ships.find((ship)=>{
        if(ship.id === gameship.shipId){
          return ship
        }
      })
      gameship.size = shipsObject.size
      gameship.name = shipsObject.name
      let xy = gameship.coordinate
      let num = rows.indexOf(xy[0])
      if(gameship.orientation === 'vertical'){
        gameship.coordinates = rows.slice(num,gameship.size+num).map((x)=>{return `${x}${xy[1]}`})
      }else{
        num = cols.indexOf(+xy[1])
        gameship.coordinates = cols.slice(num,gameship.size+num).map((y)=>{return `${xy[0]}${y}`})
      }
      return gameship
    }
  })
  return gameShipsLocalPlayer
}







// const gameships = props.gameships.filter((gameship)=>{
//   if(gameship.playerId === props.localplayer.id){
//     const ships = props.ships.find((ship)=>{
//       if(ship.id === gameship.shipId){
//         return ship
//       }
//     })
//     gameship.size = ships.size
//     gameship.coordinates = coordinates(gameship.orientation,ships.size)
//     return gameship
//   }
// })
// }
// const num = rows.indexOf(xy[0])
//    dispatch(setShip(rows.slice(num,size+num).map((x)=>{return `${x}${xy[1]}`})))
