import * as React from 'react';
import axios from 'axios';
import {URLS} from './config';

axios.defaults.withCredentials = true;

export const useAuth = () => {
    const [user, setUser] = React.useState(null);
    const [isAuth, setAuth] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    React.useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axios.get(URLS.USER,  {
                    withCredentials: true
                });
                console.log(result);
            } catch (error) {
               // валидация ошибок

                setAuth(false);
                setUser(null);
                if (error.response.status >= 500) {
                    //  обработка ошибок от сервера ,  т е когда 500
                }
            }
        }

        getUser();
    }, [isAuth]);

    const validateLogin = React.useCallback((login, passsword) => {
        const errors = [];

        if (!login) {
            errors.push('Input your login');
        }

        if (!passsword) {
            errors.push('Input you password');
        }

        setErrors(errors);

        return Boolean(errors.length)
    }, [])

    const onLogin = React.useCallback(async (login, password) => {
        if(validateLogin(login, password)) {
            return;
        }

        try {
            const response  = await axios.post(URLS.LOGIN,  {username: login, password},{
                withCredentials: true
            });
            console.log(response);
        } catch (error) {
            // обработка ошибок
        }
    }, []);

    const validateSignUp = React.useCallback((name, login, password) => {
        const errors = [];

        if (!login) {
            errors.push('Input login');
        }

        if (!name) {
            errors.push('Input name');
        }

        if (!password) {
            errors.push('Input password');
        }

        setErrors(errors);

        return Boolean(errors.length);
    }, []);

    const onSignup = React.useCallback(async (name, login, password) => {
        if (validateSignUp(name, login, password)) {
            return;
        }

        try {
            const response  = await axios.post(URLS.SIGNUP, {username: name, login, password}, {
                withCredentials: true
            } );
        } catch (error) {
            // обработка ошибок
        }
    }, []);

    return {user, isAuth, errors, onLogin, onSignup};
}