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
