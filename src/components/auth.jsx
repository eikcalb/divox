import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = ({ className, action, enctype }) => {
    return (

        <form method='POST' action={action} encType={enctype} className={`${className || ''} `}>
            <div className='field'>
                <div className='control'>
                    <input name='username' className='input' id='loginFormUsername' autoComplete='current-username' type='text' placeholder='username' />
                </div>
            </div>
            <div className='field has-addons'>
                <div className='control is-expanded'>
                    <input name='password' className='input' id='loginFormPassword' type='password' placeholder='password' />
                </div>
                <div className='control'>
                    <button type='submit' name='submit' className='button is-link'>Login</button>
                </div>
            </div>
            <div className='field'>
                <div className='control has-text-centered'>
                    <NavLink className='button is-small is-outlined is-light is-rounded' to='/register' >Click here to create an account </NavLink>
                </div>
            </div>
        </form>

    )
}

export const Register = ({ className, action, enctype }) => {
    return (

        <form method='POST' action={action} encType={enctype} className={`${className || ''} `}>
            <div className='field'>
                <div className='control'>
                    <input name='username' className='input' id='regFormUsername' type='text' placeholder='username' />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <input name='email' className='input' id='regFormEmail' type='mail' placeholder='email address' />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <input name='password' className='input' id='regFormPassword' type='password' placeholder='password' />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <input name='passwordVerify' className='input' id='regFormPasswordVerify' type='password' placeholder='verify password' />
                </div>
            </div>
            <div className='field is-grouped is-grouped-centered'>
                <div className='control'>
                    <NavLink className='button is-outlined is-light' to='/login' >Already have an account?</NavLink>
                </div>
                <div className='control'>
                    <button type='submit' className='button is-primary'>Register</button>
                </div>
            </div>
        </form>

    )
}