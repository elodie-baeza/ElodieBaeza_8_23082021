import 'styles/index.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Erreur from './Erreur';
import bannerHome from 'assets/banner-home.jpg';
import bannerAPropos from 'assets/banner-a-propos.jpg';
import Tag from './Tag';
import Thumb from './Thumb';
import Carrousel from './Carrousel';

function App() {
  return (<React.Fragment>
      <Header />
      <main>
        <Thumb title='Titre de la location'/>
        <Carrousel slideIndex={3} />
          <Tag name='tag-name'/> 
        <Banner picture={bannerHome} text='Chez vous, partout et ailleurs'/>
        <Banner picture={bannerAPropos} />
        <Erreur />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App;
