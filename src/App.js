import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import logo from './xyz.jpg';

import Main from "./pages/Main";
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./providers/AuthProvider";

import {useAuth} from './hooks';

function App() {

  return (
    <AuthProvider>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Switch>
        <PrivateRoute path="/" exact>
          <Main />
        </PrivateRoute>
        {/*<Route path="/" render={() => <Main />} exact/>*/}
        <Route path="/login" render={() => <Login/>} />
        <Route path="/signup" render={() => <Registration/>} />
        <Redirect to="/" />
      </Switch>
    </AuthProvider>
  );
}

export default App;
