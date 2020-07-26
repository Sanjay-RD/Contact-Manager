import React, { Component } from "react"
import classnames from "classnames"

export class TextInputGroup extends Component {
  render() {
    const {
      label,
      type,
      name,
      value,
      onChange,
      placeholder,
      error,
    } = this.props
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error,
          })}
          onChange={onChange}
        />
        <div className="invalid-feedback">{error}</div>
      </div>
    )
  }
}

export default TextInputGroup
