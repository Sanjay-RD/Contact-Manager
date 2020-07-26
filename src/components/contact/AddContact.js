import React, { Component } from "react"
import { Consumer } from "../../context"
// import { v4 as uuidv4 } from "uuid"
import axios from "axios"
import TextInputGroup from "../layout/TextInputGroup"

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone } = this.state

    if (name === "") {
      this.setState({ error: { name: "Name is Required" } })
      return
    }

    if (email === "") {
      this.setState({ error: { email: "Email is Required" } })
      return
    }

    if (phone === "") {
      this.setState({ error: { phone: "Phone is Required" } })
      return
    }

    const updateContact = {
      name: name,
      email: email,
      phone: phone,
    }
    axios
      .post("https://jsonplaceholder.typicode.com/users", updateContact)
      .then((res) => dispatch({ type: "ADD_CONTACT", payload: res.data }))

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {},
    })
    this.props.history.push("/")
  }
  render() {
    const { name, email, phone, error } = this.state
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter Name.."
                    onChange={this.onChange}
                    error={error.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter Email.."
                    onChange={this.onChange}
                    error={error.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone.."
                    onChange={this.onChange}
                    error={error.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-success btn-block"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
