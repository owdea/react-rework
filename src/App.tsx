import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import NFTCard from './pages/NFTpage'
import Calculator from './pages/Calculator'

function App() {
  return (
    <Router>
      <div>
        <div>
          <div className="navbar-content">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/2nd project">2nd project</Link></div>
            <div><Link to="calculator" >Calculator</Link></div>
          </div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/2nd project">
            <NFTCard />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </div>
      </div>
    </Router>
  )
}

export default App


/*
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
    <Router>
*/