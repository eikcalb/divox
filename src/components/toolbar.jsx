import React from 'react';
import { SERVER } from '../App';
import { NavLink } from "react-router-dom";
import logo from '../logo.svg'

const Toolbar = (props) => {
    const [active, setActive] = React.useState(false)
    return (
        <nav className='navbar is-dark is-fixed-top'>
            <div className='container'>
                <div className='navbar-brand'>
                    <a className='navbar-item' href={SERVER.homepage}>
                        <img className='is-clipped' src={logo} alt={SERVER.config.description} width='50' height='50' />
                    </a>
                    <div className='navbar-item'>{SERVER.config.displayName}</div>

                    <div onClick={() => setActive(!active)} id='navbarBurger' className={`navbar-burger burger ${active ? 'is-active' : ''}`} data-target='navMenuDoc'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id='navMenuDoc' className={`navbar-menu ${active ? 'is-active' : ''}`}>
                    <div className='navbar-start'>
                        <NavItems />
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            {/* Shown on desktop */}
                            <div className='field is-grouped is-hidden-touch'>
                                <p className='control'>
                                    <NavLink className='button is-outlined is-light is-rounded' to='/login'>Login</NavLink>
                                </p>
                                <p className='control'>
                                    <NavLink className='button is-outlined is-light is-rounded' to='/register'>Register</NavLink>
                                </p>
                            </div>
                            {/* Shown on mobile and tablet */}
                            <div className='field is-grouped is-grouped-centered is-hidden-desktop'>
                                <p className='control'>
                                    <NavLink className='button is-outlined is-medium is-dark is-rounded' to='/login'>Login</NavLink>
                                </p>
                                <p className='control'>
                                    <NavLink className='button is-outlined is-medium is-dark is-rounded' to='/register'>Register</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Toolbar

export const NavItems = (props) => {
    return (
        <>
            <NavItem {...props} link='/' label='Home' />
            <NavItem {...props} link='/about' label='About Us' />
            <NavItem {...props} link='/contact' label='Contact Us' />
        </>
    )
}

export const NavItem = (props) => {
    return (
        <NavLink exact={props.isExact} activeClassName='is-active' className={`${props.className || ''} navbar-item is-tab`} to={props.link}>{props.label}</NavLink>
    )
}
