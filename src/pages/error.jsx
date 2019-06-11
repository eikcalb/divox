import React from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from '../components/theme';
import Footer from '../components/footer';

/**
 * Error is the default error page of the application.
 */
export const Error = (props) => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return (
          <section className={`${value} hero is-fullheight is-clipped is-bold is-black`}>
            <div className='hero-body'>
              <div className='container'>
                <h1 className='title is-uppercase is-size-4-mobile'>Error!</h1>
                <p className='subtitle is-size-6-mobile'>We're sorry, the page you requested could not be found.</p>
                <Link className={'button is-success is-outlined'} to={'/'} >Back To Home</Link>
              </div>
            </div>
              <Footer className='hero-foot' />
          </section>
        )
      }}
    </ThemeContext.Consumer>
  );
}

export default Error;
