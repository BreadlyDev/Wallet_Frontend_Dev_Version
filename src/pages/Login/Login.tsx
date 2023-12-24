import React, { useContext, useState } from 'react';
import cla from './Login.module.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../main';
import { googleService } from '../../services/AuthService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authStore } = useContext(Context).stores;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    authStore.login(email, password);
  };

  return (
    <div className={cla.wrap}>
      <form onSubmit={handleSubmit} className={cla.content}>
        <span className={cla.title}>
          <p className={cla.name}>Crypto</p>
          <p className={cla.name2}>wallet</p>
        </span>
        <span className={cla.inp}>
          <p className={cla.inputText}>Email</p>
          <input type="text" value={email} onChange={handleEmailChange} className={cla.inpInp} />
        </span>
        <span className={cla.inp}>
          <p className={cla.inputText}>Password</p>
          <input type="password" value={password} onChange={handlePasswordChange} className={cla.inpInp} />
        </span>
        <div className={cla.btns}>
          <button type="submit" className={cla.submit}>
            Sign in
          </button>
          <button type="button" className={cla.google} onClick={googleService}>
            Google
          </button>
        </div>
        <Link to="/signup" className={cla.create}>
          Create new account
        </Link>
      </form>
    </div>
  );
};

export default Login;
