import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import './app.css'

const HatsPage = () => {
  return (
    <h1>HATS PAGE</h1>
  )
}

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </React.Fragment>
  )
}

export default App
