import React, { useState } from 'react';
import styles from "./Login.module.css"
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../authSlice';
import { RootState } from '../../../store';

import HeaderLogo from "../../../Assets/linkedin_header_logo.svg"; 
import GoogleLogo from "../../../Assets/google_logo.svg"; 
import AppleLogo from "../../../Assets/apple_logo.svg";

import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login(email, password) as any);
  };

  

  return (
    <div className={styles.login}>
        <Helmet>
            <title>LinkedIn Login, Sign in | LinkedIn</title>
        </Helmet>
        <div className={styles.login__content}>
            <form onSubmit={handleLogin}>
                <img src={HeaderLogo} alt="header logo" className={`${styles.login_header_logo} h-24 w-24`}/>
                <div className={styles.login__center_content}>
                    <div className={styles.login__box_content}>
                        <div className={styles.login__text_content}> 
                            <p className={styles.login__text_content__head}>Sign in </p>
                            <p className={styles.login__text_content__head__description}>Stay updated on your professinal world</p>
                        </div>
                    <TextField className={styles.login__input}
                        fullWidth
                        label="Email or phone"
                        type="text"
                        sx={{
                            marginBottom:"25px",
                            marginTop:"30px"
                        }}
                        value={email} onChange={handleEmailChange}
                    />
                    <TextField className={styles.login__input}
                        fullWidth
                        label="Password"
                        type="password"
                        InputProps={{endAdornment: <InputAdornment position="end" >
                            <span className={styles.input__password_show}>show</span>
                        </InputAdornment>
                        }} value={password} onChange={handlePasswordChange}
                    />
                
            <p className={styles.login__forgot_password}>Forgot password?</p>


                <button type="submit" id="join-form-submit" 
                className={styles.login__form__form_body_signin_button} 
                value="Agree &amp; Join" disabled={loading}>Sign in</button>

                <h2 className={styles.login__content__or_h2}><span 
                className={styles.login__content__or_span}>or</span></h2>

                <div className={styles.login__login__google}>
                    <img src={GoogleLogo} alt="google logo"/>
                    <span>Sign in with Google</span>
                </div>

                <div className={styles.login__login__google}>
                    <img src={AppleLogo} alt="apple logo"/>
                    <span>Sign in with Apple</span>
                </div>
            </div>
            <p className={styles.login__new_to_help_link__text}>
                New to Linkedin? 
                <a href="/signup" 
            className={styles.login__page_newto_link__link} target="_blank" 
            rel="noopener 
            noreferrer"> Join now</a></p>
        </div>
        </form>
    </div>
</div>);
};

export default Login;
