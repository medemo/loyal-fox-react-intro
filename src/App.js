import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Todos from './containers/Todos'
import Navbar from './components/Navbar'
import Profile from './containers/Profile'
import About from './containers/About'
import Login from './containers/Login'
import PrivateRoute from './components/PrivateRoute'


class App extends React.Component {
  componentDidMount() {
    console.log('mounted')
  }

  componentDidUpdate() {
    console.log('updated')
  }

  componentWillUnmount() {
    console.log('before destroy')
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container mx-auto">
            <Navbar />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <p>Contact</p>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/user/:id">
                <Profile />
              </Route>
              <PrivateRoute exact path="/">
                <Todos />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
