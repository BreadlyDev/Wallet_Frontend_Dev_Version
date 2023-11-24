import React, { useContext, useState } from 'react';
import cla from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../main';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {authStore} = useContext(Context).stores


  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    authStore.register(username, email, password)
  };

  return (
    <div className={cla.wrap}>
      <form onSubmit={handleSubmit} className={cla.content}>
        <span className={cla.title}>
          <p className={cla.name}>Crypto</p>
          <p className={cla.name2}>wallet</p>
        </span>
        <span className={cla.inp}>
          <p className={cla.inputText}>Username</p>
          <input type="text" value={username} onChange={handleUsernameChange} className={cla.inpInp} />
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
          <button type='submit' className={cla.submit}>Sign up</button>
          <button type="button" className={cla.google}>Google</button>
        </div>
        <Link to='/login' className={cla.create}>I have an account </Link>
      </form>
    </div>
  );
};

export default SignUp;