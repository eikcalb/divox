// import "bulma/css/bulma.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Server } from "./lib";
import error from "./pages/error";
import Home from './pages/home';
import { ThemeContext } from './components/theme';
import { EventManager } from './notification/message';


export const SERVER = new Server({
    description: `Comfi is a financial management software built to seamlessly integrate various financial channels and provide intuitive interfaces for users.`,
    displayName: `Comfi`
})

/**
 * App is a container for all visual components in the application.
 * App should not impose any markup to the resulting interface and should only act for coordinating interaction of other components.
 */
class App extends Component {
    state = {
        theme: 'dark'
    }
    render() {
        return (
            <EventManager>
                <ThemeContext.Provider value={this.state.theme} >
                    <Router basename={null} >
                        <Switch >
                            <Route path={'/blog'} component={error} />
                            <Route exact path={'/'} component={Home} />
                            <Route component={error} />
                        </Switch>
                    </Router>
                </ThemeContext.Provider>
            </EventManager>
        );
    }
}


export default App;