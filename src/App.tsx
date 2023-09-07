import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NFTCard from './pages/NFTcard'
import Calculator from './pages/Calculator'

function App() {

  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/2nd project">
              <NFTCard />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
