import React  from 'react'
import {Table} from 'react-bootstrap'

export default function ScoreBoard (props) {
  return (
    <Table>
      <thead><tr><th colSpan='3'>Score Board</th></tr></thead>
      <thead><tr><th>Hits</th><th>Misses</th><th>Sank</th></tr></thead>
      <tbody><tr><td>5</td><td>16</td><td>0</td></tr></tbody>
    </Table>
  )
}
