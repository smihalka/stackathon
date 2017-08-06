import React from 'react'
import {Table} from 'react-bootstrap'
import {coordinates, align } from './Coordinates'
import {connect} from 'react-redux'
import {addChangeShip} from '../store'

function Ships (props){

  if(props.playerShips){
    let status = false
    if(props.player.status === 1){
      status = true
    }
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
            const playerShip = props.playerShips.find((localShip)=>{
              return localShip.shipId === ship.id
            })
            ///the amount of jumping I have to do makes me want to figure if promise.all can help me
            let setCoordinates = 'A1'
            let setOrientation = 'vertical'
            if(playerShip !== undefined){
              setCoordinates = playerShip.coordinate
              setOrientation = playerShip.orientation
            }
            return (
              <tr key={ship.id}>
                <td>{ship.name}</td>
                <td>{ship.size}</td>
                <td>
                  <form>
                    <select disabled={status}
                      data-size={ship.size}
                      data-shipid={ship.id}
                      data-name={ship.name}
                      data-direction={setOrientation}
                      onChange={props.handleOnChangeOrient}
                      data-coordinates={setCoordinates}
                      value={setOrientation}
                    >
                      {align.map((a)=>{
                        return <option value={a} key={a}>{a}</option>
                      })}
                    </select>
                  </form>
                </td>
                <td>
                  <form >
                    <select  disabled={status}
                      data-size={ship.size}
                      data-shipid={ship.id}
                      data-name={ship.name}
                      data-direction={setOrientation}
                      onChange={props.handleOnChange}
                      value={setCoordinates}
                    >
                      {coordinates(setOrientation,ship.size).map((xy)=>{
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

const mapDispatchToProps= (dispatch,ownProps) => {
  return {
    handleOnChange (event){
      const ship =  { orientation: event.target.dataset.direction,
        coordinate: event.target.value,
        shipId: +event.target.dataset.shipid,
        gameId: +ownProps.player.gameId,
        playerId: +ownProps.player.id
      }
      dispatch(addChangeShip(ship))
    },
    handleOnChangeOrient (event){
      const ship =  {
        orientation: event.target.value,
        coordinate: event.target.dataset.coordinates,
        shipId: +event.target.dataset.shipid,
        gameId: +ownProps.player.gameId,
        playerId: +ownProps.player.id
      }
      dispatch(addChangeShip(ship))
    }
  }
}

const ShipsContainer = connect(mapStateToProps, mapDispatchToProps)(Ships)

export default ShipsContainer
