import React from 'react'
import Toolbar from '../components/toolbar';
import Footer from '../components/footer';
import { ThemeContext } from '../components/theme';

export default function Container({ children }) {
    return (
        <ThemeContext.Consumer>{value => (
            <section className={`${value} app has-navbar-fixed-top`}>
                <Toolbar />
                <div className='content-scrollable'>
                    {children}
                    <Footer />
                </div>
            </section>
        )}
        </ThemeContext.Consumer>
    )
}