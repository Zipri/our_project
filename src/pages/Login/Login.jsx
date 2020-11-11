import * as React from 'react';
import {Link, useHistory} from "react-router-dom";
import Container from "../../components/Container";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";
import app from '../../config';

import styles from './Login.module.css';

const Login = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();


  const onLoginChange = (event) => setLogin(event.currentTarget.value);
  const onPasswordChange = (event) => setPassword(event.currentTarget.value);

  const handleOnLoginButton = React.useCallback(async () => {
    const trimedLogin = login.trim();
    const trimedPassword = password.trim();

    try {
      await app.auth().signInWithEmailAndPassword(trimedLogin, trimedPassword);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }, [password, login]);

  return (
    <Container>
      <h2>Login</h2>
      <Input placeholder="login" className={styles['login__item']} value={login} onChange={onLoginChange} type="email"/>
      <Input placeholder="password" className={styles['login__item']} value={password} onChange={onPasswordChange} type="password" minlength="2"/>
      <div className={styles['login__reference']}>
        Not registered? <Link to="/signup" className={styles['login__link']}>Create an account</Link>
      </div>
      <Button className={styles['login__button']} onClick={handleOnLoginButton}>Log In</Button>
    </Container>
  )
};

export default Login;