import React, { Component } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Contacts from "./components/contact/Contacts"
import AddContact from "./components/contact/AddContact"
import EditContact from "./components/contact/EditContact"
import { Provider } from "./context"
import Header from "./components/layout/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./components/page/About"
import NotFound from "./components/page/NotFound"

export class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
