import React, {ReactNode} from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {withRouter, RouteComponentProps} from "react-router";
import CV from './components/cv';
import AWS from "./components/aws";
import {Layout, Menu} from 'antd';
import styled from "styled-components";

const {Header, Content} = Layout;

type TProps = {
    children?: ReactNode
} & RouteComponentProps<any>;
type TState = {};

class AppLayout extends React.Component<TProps, TState> {
    render() {
        return (<Layout>
            <UnPrintHeader>
                <Menu
                    theme="dark" mode="horizontal">
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/cv">CV</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/AWS">AWS</Link></Menu.Item>
                </Menu>
            </UnPrintHeader>
            <Content>
                <Switch>
                    <Route path="/cv">
                        <CV/>
                    </Route>
                    <Route path="/AWS">
                        <AWS/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch></Content>
        </Layout>);
    }
}

const UnPrintHeader = styled(Header)`
  @media print {display: none;}
`

const Home = () => {
    return <h1>This is Home page</h1>;
}

export default withRouter(AppLayout);

  
