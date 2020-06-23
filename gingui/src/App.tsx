import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import AppLayout from './AppLayout';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const defaultStore = createStore(rootReducer);

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={defaultStore}>
                <Router>
                    <AppLayout></AppLayout>
                </Router>
            </Provider>
        );
    }
}


export default App;
