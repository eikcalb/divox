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
                        <img src={logo} alt={SERVER.config.description} width='50' height='50' />
                    </a>
                    <div className='navbar-item'>{SERVER.config.displayName}</div>

                    <div onClick={() => setActive(!active)} id='navbarBurger' className={`navbar-burger burger ${active ? 'is-active' : ''}`} data-target='navMenuDoc'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id='navMenuDoc' className={`navbar-menu ${active ? 'is-active' : ''}`}>
                    <div className='navbar-end'>
                        <NavItems isMobile={active} />
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
            <NavItem {...props} link='/blog' label='Blog' />
            <NavItem {...props} link='/about' label='About Us' />
            <NavItem {...props} link='/contact' label='Contact Us' />
        </>
    )
}

export const NavItem = (props) => {
    return (
        <NavLink exact={props.isExact} activeClassName='is-active' className={`navbar-item ${props.isMobile ? '' : 'is-tab'}`} to={props.link}>{props.label}</NavLink>
    )
}
