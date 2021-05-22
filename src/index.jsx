import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Reservation } from './pages/Reservation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

render(<App />, document.querySelector('#app'));
