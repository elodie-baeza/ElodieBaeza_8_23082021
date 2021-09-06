import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Router from 'Router';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Router />
        <Footer />
    </BrowserRouter>
  )
}

export default App;
