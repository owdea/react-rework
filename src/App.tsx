import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NFTCard from './pages/NFTpage'
import Layout from './layouts/Layout'
import Test from './pages/Test'

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
            <Test/>
          </Route>
          <Route path="/test">
            <NFTCard/>
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