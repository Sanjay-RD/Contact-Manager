import React, { Component } from "react"
import { Consumer } from "../../context"
import TextInputGroup from "../layout/TextInputGroup"
import axios from "axios"

export class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    // console.log(id)
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    const getContact = res.data
    this.setState({
      name: getContact.name,
      email: getContact.email,
      phone: getContact.phone,
    })
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
    const { id } = this.props.match.params
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
      .then((res) => dispatch({ type: "UPDATE_CONTACT", payload: res.data }))

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
              <div className="card-header">Edit Contact</div>
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
                    value="Update Contact"
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

export default EditContact
