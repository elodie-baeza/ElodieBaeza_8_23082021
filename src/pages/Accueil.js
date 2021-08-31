import 'styles/index.css';
import React from 'react';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import bannerHome from 'assets/banner-home.jpg';
import Thumb from 'components/Thumb';
import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <React.Fragment>
        <main>
            <Banner picture={bannerHome} text='Chez vous, partout et ailleurs'/>
            <div>
                <Thumb title='Titre de la location'/>
                <Thumb title='Titre de la location'/>
                <Thumb title='Titre de la location'/>
                <Thumb title='Titre de la location'/>
            </div>
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default Accueil;
