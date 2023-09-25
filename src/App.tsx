import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NFTCard from './pages/NFTpage'
import Calculator from './pages/Calculator'
import Layout from './layouts/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/2nd-project">
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
/*<Router>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/2nd-project" element={<NFTCard />} />
          <Route path="/calculator" element={<Calculator />} />
        </Switch>
      </Layout>
    </Router> */