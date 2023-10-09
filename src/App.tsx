import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Layout from './layouts/Layout'
import NFTCard from "./pages/NFTCardPage"
import Calculator from './pages/Calculator'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/NFTCard">
            <NFTCard/>
          </Route>
          <Route path="/calculator">
            <Calculator/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App
