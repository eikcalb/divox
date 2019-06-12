import React, { Component } from 'react';
import Toolbar from '../components/toolbar'
import { ThemeContext } from '../components/theme';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Card from '../components/card';

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
      <section className={`${this.context} app has-navbar-fixed-top`}>
        <Toolbar />
        <div className='content-scrollable'>
          <Banner />
          <div className='container'>
            <Card title='What we do' >
              <div className='title'>Homepage</div>
            </Card>
          </div>
          <Footer />
        </div>
      </section>
    );
  }
}

export default Home;
