import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar , Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props
  ///Nav Component fo now
  return (
    <div>

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">battleoftheships</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Nav>
                <LinkContainer to="/otherpage">
                  <NavItem eventKey={1}>Otherpage</NavItem>
                </LinkContainer>
                <LinkContainer to="/#">
                  <NavItem onClick={handleClick} eventKey={2}>Logout</NavItem>
                </LinkContainer>
                <LinkContainer to="/#">
                  <NavItem eventKey={3}>Battle</NavItem>
                </LinkContainer>
              </Nav>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Nav>
                <LinkContainer to="/login">
                  <NavItem eventKey={1}>Login</NavItem>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavItem eventKey={2}>Sign Up</NavItem>
                </LinkContainer>
                <LinkContainer to="/battle">
                  <NavItem eventKey={3}>Battle</NavItem>
                </LinkContainer>
              </Nav>
            </div>
        }
      </Navbar>
      <hr />
      {children}
    </div>
)
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
