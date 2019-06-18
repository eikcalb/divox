import React, { Component } from 'react';
import { SERVER } from '../App';
import { Login, Register } from '../components/auth';
import Banner from '../components/banner';
import Card from '../components/card';
import { ThemeContext } from '../components/theme';
import Container from './container';
import { Wallet } from '../components/wallet';

// export const ThemeContext = React.createContext('dark')

const Content = (props) => {

}

/**
 * Home is the homepage of the application.
 */
class Home extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <Container>
        <Banner slides={[
          <>
            <div className='section'>
              <div className='column'>
                <h1 className='title has-text-centered-mobile'>Welcome to financial freedom</h1>
              </div>
              <div className='columns section is-vcentered'>
                <Login className='column is-5-tablet is-4-desktop' />
                <div className='column is-1' aria-hidden='true' ></div>
                <div className='column has-text-centered'>
                  <h3 className='is-size-5'>{SERVER.config.description}</h3>
                </div>
              </div>
            </div>
          </>,
          <>
            <div className='section'>
              <div className='column'>
                <h1 className='title has-text-centered-mobile'>Welcome to financial freedom</h1>
              </div>
              <div className='columns section is-vcentered'>
                <Wallet name='lagbaja' available={2000} total={5000} className='column is-5-tablet is-4-desktop' />
                <div className='column is-1' aria-hidden='true' ></div>
                <div className='column has-text-centered'>
                  <h3 className='is-size-5'>{SERVER.config.description}</h3>
                </div>
              </div>
            </div>
          </>]} />
        <div className='container'>
          <Card title='What we do' >
            <div className='title'>Homepage</div>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Home;
