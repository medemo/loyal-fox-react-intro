import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

function About(props) {
  return (
    <div>
      <p>This is about page</p>
      <div className="flex my-3">
        <Link className="underline" to="/about/company">Company</Link>
        <Link className="underline ml-3" to="/about/investors">Investors</Link>
        <Link className="underline ml-3" to="/about/team">Team</Link>
      </div>
      <Switch>
        <Route path="/about/company">
          <p>About Company</p>
        </Route>
        <Route path="/about/investors">
          <p>Our Investors</p>
        </Route>
        <Route path="/about/team">
          <p>Our team</p>
        </Route>
      </Switch>
    </div>
  )
}

export default About
