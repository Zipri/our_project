import {Redirect, Route} from "react-router-dom";
import * as React from 'react';
import {AuthContext} from "../../providers/AuthProvider";


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

function PrivateRoute({ children, ...rest  }) {
  const {currentUser} =  React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        Boolean(currentUser) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;