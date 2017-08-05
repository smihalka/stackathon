import React,{ Component }  from 'react'
import {Table} from 'react-bootstrap'
import {coordinates, align, cols, rows} from './Coordinates'
import {connect} from 'react-redux'
import {fetchShips} from '../store'

function Ships (props){

  if(props.ships){
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
          {props.ships.map((ship)=>{
            return (
              <tr key={ship.id}>
                <td>{ship.name}</td>
                <td>{ship.size}</td>
                <td>
                  <select>{align.map((a)=>{
                    return <option key={a}>{a}</option>
                  })}
                  </select>
                </td>
                <td>
                  <form>
                    <select data-size={ship.size} data-name={ship.name} data-direction='vertical' onChange={props.handleOnChange}>
                      {coordinates('vertical',ship.size).map((xy)=>{
                        return <option value={xy} key={xy}>{xy}</option>
                      })}
                    </select>
                  </form>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }else{
    return (<h1>Loading.....</h1>)
  }

}

const mapStateToProps = null

const mapDispatchToProps= (dispatch) => {
  return {
    getShipData (){
      dispatch(fetchShips())
    },
    handleOnChange (event){
      const xy = event.target.value
      const name = event.target.dataset.name
      const size = +event.target.dataset.size
      const direction = event.target.dataset.direction
      //console.log(xy,name,size,direction,rows.indexOf(xy[0]))
      const num = rows.indexOf(xy[0])
      //    dispatch(setShip(rows.slice(num,size+num).map((x)=>{return `${x}${xy[1]}`})))

    }
  }
}

const ShipsContainer = connect(mapStateToProps, mapDispatchToProps)(Ships)

export default ShipsContainer
