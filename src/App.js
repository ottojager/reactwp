import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Nav';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageContent from './PageContent';
import Contact from './blocks/Contact';

class App extends React.Component {

  render() {
    return (
      <div>  
        <BrowserRouter>
        <header className="container">
          <div className="row">
            <img src={logo} alt="logo" className="col-sm-2" />
            <Menu />
          </div>
        </header>
        <Switch>
          <Redirect from='/' to='/medicore' exact />
          <Route path='/contact' component={Contact} />
          <Route path='/:pagename' component={PageContent} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
