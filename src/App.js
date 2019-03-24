import React, { Component } from 'react';
import './App.css';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers';
import routes from './routes';
import { Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './utils/history'
import AppBar from './screens/Appbar'

const middleware = [thunk];

const store = createStore(rootReducers, 
                          compose(applyMiddleware(...middleware), 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default class App extends Component {
  render() {
    return (
    <Provider store = {store}>
      <Router history={history}>
        <MuiThemeProvider>
          <AppBar/>
          <Switch>{routes()}</Switch>
        </MuiThemeProvider>
      </Router>
    </Provider>
    );
  }
}
