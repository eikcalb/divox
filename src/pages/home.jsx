import React, { Component } from 'react';
import Toolbar from '../components/toolbar'
import { ThemeContext } from '../components/theme';
import Footer from '../components/footer';
import Banner from '../components/banner';

// export const ThemeContext = React.createContext('dark')

/**
 * Home is the homepage of the application.
 */
class Home extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <section className={`${this.context} has-navbar-fixed-top`}>
        <Toolbar />
        <Banner />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Homepage
          </p>
        </header>
        <Footer />
      </section>
    );
  }
}

export default Home;
