import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop-page/ShopPage'
import './app.css'

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </React.Fragment>
  )
}

export default App
