import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import AppLayout from './AppLayout';

class App extends React.Component<any, any> {
    render() {
        console.log(JSON.stringify(this.props));
        return (
            <Router>
                <AppLayout></AppLayout>
            </Router>
        );
    }
}


export default App;
