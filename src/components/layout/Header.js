import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact/add" className="nav-link">
                <i className="fa fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/About" className="nav-link">
                <i className="fa fa-question"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
