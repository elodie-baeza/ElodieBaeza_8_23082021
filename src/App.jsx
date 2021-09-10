import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header/Header';
import Router from 'Router';
import Footer from 'components/footer/Footer';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <Header />
          <Router />
          <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
