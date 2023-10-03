import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Layout from './layouts/Layout'
import Test from './pages/Test'
import Calculator2 from './modules/calculator/Calculator2'
import NFTCard from "./pages/NFTCardPage"

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
            <Calculator2/>
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App
/*<Router>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/2nd-project" element={<NFTCard />} />
          <Route path="/calculator" element={<Calculator />} />
        </Switch>
      </Layout>
    </Router> */