import * as React from 'react';
import {Link, useHistory} from "react-router-dom";

import Container from "../../components/Container";
import Input from '../../components/Input'
import Button from "../../components/Button";
import app from '../../config';

import styles from './Registration.module.css';

const Registration = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const onLoginChange = (event) => setLogin(event.currentTarget.value);
  const onPassword = (event) => setPassword(event.currentTarget.value);

  const handleOnSignUp = React.useCallback(async () => {
    const trimedLogin = login.trim();
    const trimedPassword = password.trim();

    try {
      await app.auth().createUserWithEmailAndPassword(trimedLogin, trimedPassword);
      history.push('/');
    } catch (error) {
      alert(error);
    }
    

  }, [login, password]);

  return (
    <Container>
      <h2>Sign Up</h2>
      <Input placeholder="email" type="email" className={styles['sign-up__item']} value={login} onChange={onLoginChange}/>
      <Input placeholder="password" className={styles['sign-up__item']} value={password} onChange={onPassword} type="password"/>
      <Link className={styles['sign-up__link']} to="/login">Log In</Link>
      <Button className={styles['sign-up__button']} onClick={handleOnSignUp}>Sign Up</Button>
    </Container>
  );
}

export default Registration;