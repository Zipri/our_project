import * as React from 'react';
import app from '../config';

export const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;