import React  from 'react'
import {Table} from 'react-bootstrap'

export default function Board (props) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <Table>
      <tbody>
        <tr><th>BS</th>
          {cols.map((col)=>{
            return (<th key={`${col}`}>{col}</th>)
          })}
        </tr>
        {rows.map((row)=>{
          return (
            <tr key={row}><th>{row}</th>
              {cols.map((col)=>{
                return (<td key={`${row}${col}`}>+</td>)
              })}

            </tr>
          )
        })}
      </tbody>
    </Table>
  )

}
