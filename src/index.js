import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {loadingBarMiddleware} from 'react-redux-loading-bar';


import reducers from './reducers';
import App from './components/App';
import Overview from './components/overview/Overview';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import sitesIn from './components/sites/SitesIndex';
import errorPage from './components/404/404';

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: {
        'token': localStorage.getItem('token')
      }
    }
  },
  applyMiddleware(reduxThunk),
  applyMiddleware(loadingBarMiddleware())
);




class checkStatus extends Component {
  render() {
    if (localStorage.getItem('token')) {
      return (
        <Fragment>
              <App>
                <Switch>
                  <Route exact path="/home"  component={Overview} />
                  <Route path="/signout" component={Signout} />
                  <Route exact path="/sites" component={sitesIn} />
                  <Route exact path="/" render={() => <Redirect to="/home" />} />
                  <Route exact path="*"  component={errorPage} />
                </Switch>
              </App>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Route exact path="/signin"  component={Signin} />
          <Route exact path="/" render={() => <Redirect to="/signin" />} />
        </Fragment>
      )
    }
  }
};



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={checkStatus} />
        <Route path="/:someParam" component={checkStatus} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
