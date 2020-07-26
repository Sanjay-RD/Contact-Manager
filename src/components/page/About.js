import React from "react"

const About = (props) => {
  return (
    <div>
      <h1 className="display-4">About</h1>
      <p className="lead">This is About Page</p>
      <p className="text-primary">Version 4.2.1</p>
      {/* <p>{props.match.params.id}</p> */}
    </div>
  )
}

export default About
