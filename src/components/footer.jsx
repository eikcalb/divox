import React from 'react'
import { SERVER } from '../App';

const Footer = () => {
    return (
        <footer className='footer' >
            <div >
                &COPY; {SERVER.config.author} {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer