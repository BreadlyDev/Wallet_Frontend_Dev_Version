import React from 'react'
import cla from './Login.module.scss'

const Login: React.FC = () => {
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
                <p className={cla.inputText}>Password</p>
                <input type="text"  className={cla.inpInp} />
            </span>
            <div className={cla.btns}>
                <button type='submit' className={cla.submit}>Sing in</button>
                <button type="button" className={cla.google}>Google</button>
            </div>
            <a href='#' className={cla.create}>Create new account</a>
        </form>
    </div>    
  )
}

export default Login