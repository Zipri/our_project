import * as React from 'react';
import styles from './Main.module.css';
import app from "../../config";
import {AuthContext} from "../../providers/AuthProvider";

// Главная страница , отображает инфу о юзере, когда тот залогинется
const Main = () => {
  const {currentUser} = React.useContext(AuthContext);

  return (
    <div>
      <div>Main</div>
      <div>{currentUser.email}</div>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  )
};

export default Main;