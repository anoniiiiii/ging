import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Affix } from "antd";
import CV from './components/cv';

function App() {
  return (
    <Router>
      <div>
        <Affix>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cv">CV</Link>
              </li>
            </ul>
          </nav>
        </Affix>
        <Switch>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>This is Home page</h1>;
}
export default App;
