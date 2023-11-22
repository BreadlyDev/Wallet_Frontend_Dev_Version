import React from 'react'
import cla from './SignUp.module.scss'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <div className={cla.wrap}>
        <form action='#' className={cla.content}>
            <span className={cla.title}>
            <p className={cla.name}>Crypto</p>
            <p className={cla.name2}>wallet</p>
            </span>
            <span className={cla.inp}>
                <p className={cla.inputText}>Username</p>
                <input type="text"  className={cla.inpInp} />
            </span>
            <span className={cla.inp}>
                <p className={cla.inputText}>Email</p>
                <input type="text"  className={cla.inpInp} />
            </span>
            <span className={cla.inp}>
                <p className={cla.inputText}>Password</p>
                <input type="text"  className={cla.inpInp} />
            </span>
            <div className={cla.btns}>
                <button type='submit' className={cla.submit}>Sing up</button>
                <button type="button" className={cla.google}>Google</button>
            </div>
            <Link to='/login' className={cla.create}>I have an account </Link>
        </form>
    </div>   
  )
}

export default SignUp