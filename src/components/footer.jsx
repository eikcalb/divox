import React from 'react'
import { SERVER } from '../App';

const Footer = ({ className }) => {
    return (
        <footer className={`${className || ''} has-text-centered`} >
            <div className='section'>
                &copy; {SERVER.config.author} {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer