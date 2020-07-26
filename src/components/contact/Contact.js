import React, { Component } from "react"
import { Consumer } from "../../context"
import axios from "axios"
import { Link } from "react-router-dom"

export class Contact extends Component {
  state = {
    showContact: false,
  }
  onClickShowContact = () => {
    this.setState({ showContact: !this.state.showContact })
  }

  onClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({ type: "DELETE_CONTACT", payload: id })
  }

  render() {
    const { id, name, email, phone } = this.props.contact
    const { showContact } = this.state

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3">
              <h3>
                {name}{" "}
                <i
                  className="fa fa-caret-down"
                  aria-hidden="true"
                  style={arrowDown}
                  onClick={this.onClickShowContact}
                ></i>
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  style={delButton}
                  onClick={this.onClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      color: "black",
                      cursor: "poiner",
                      float: "right",
                      marginRight: "16px",
                    }}
                  ></i>
                </Link>
              </h3>
              {showContact ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="font-weight-bold">Email:</span> {email}
                  </li>
                  <li className="list-group-item">
                    <span className="font-weight-bold">Phone:</span> {phone}
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

const arrowDown = {
  cursor: "pointer",
}

const delButton = {
  cursor: "pointer",
  color: "red",
  float: "right",
}

export default Contact
