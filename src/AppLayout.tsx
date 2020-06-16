import React from "react";
import { type } from "os";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { withRouter, matchPath, RouteComponentProps } from "react-router";
  import { Affix } from "antd";
  import CV from './components/cv';
  

type TProps = {} & RouteComponentProps<any>;
type TState = {};
class AppLayout extends React.Component<TProps, TState> {
    render() {
        const {location} = this.props;
        return <>
        {!matchPath(location.pathname, {path: '/cv'}) && 
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
        </Affix>}
        <Switch>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>;
    }
}

const Home = () => {
    return <h1>This is Home page</h1>;
}
export default withRouter(AppLayout);

  
