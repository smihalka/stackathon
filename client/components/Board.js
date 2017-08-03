import React  from 'react'
import {Table} from 'react-bootstrap'
import {cols, rows} from './Coordinates'

export default function Board (props) {

  return (
    <Table>
      <thead>
        <tr colSpan='11'><th colSpan='11'>{props.title}</th></tr>
      </thead>
      <tbody>
        <tr><th>X/Y</th>
          {cols.map((col)=>{
            return (<th key={`${col}`}>{col}</th>)
          })}
        </tr>
        {rows.map((row)=>{
          return (
            <tr key={row}><th>{row}</th>
              {cols.map((col)=>{
                return (<td key={`${row}${col}`}></td>)
              })}

            </tr>
          )
        })}
      </tbody>
    </Table>
  )

}
