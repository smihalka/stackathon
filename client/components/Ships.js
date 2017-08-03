import React  from 'react'
import {Table} from 'react-bootstrap'
import {coordinates, align} from './Coordinates'

export default function Ships (props) {
  const ships = [
    {ship: 'Carrier', size: 5},
    {ship: 'Battleship', size: 4},
    {ship: 'Cruiser', size: 3},
    {ship: 'Submarine', size: 3},
    {ship: 'Destroyer', size: 2}
  ]

  return (
    <Table>
      <thead>
        <tr colSpan='4'>
          <th colSpan='4'> Ship Placement</th>
        </tr>
        <tr>
          <th>Class</th>
          <th>Size</th>
          <th>Align</th>{/* hoping to have ships here not numbers*/}
          <th>Coord</th>{/* dislay the coordinates that the ship is on drop down for now*/}
        </tr>
      </thead>
      <tbody>
        {ships.map((ship,key)=>{
          return (
            <tr key={key}>
              <td>{ship.ship}</td>
              <td>{ship.size}</td>
              <td>
                <select>{align.map((a)=>{
                  return <option key={a}>{a}</option>
                })}
                </select>
              </td>
              <td>
                <select>
                  {coordinates('vertical',ship.size).map((xy)=>{
                    return <option key={xy}>{xy}</option>
                  })}
                </select>

              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>)
}
