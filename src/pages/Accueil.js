import 'styles/index.css';
import React from 'react';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import bannerHome from 'assets/banner-home.jpg';
import Thumb from 'components/Thumb';
import logements from 'datas/logements.json'

const getAPI = logements

function Accueil() {
  return (
    <React.Fragment>
        <main>
            <Banner picture={bannerHome} text='Chez vous, partout et ailleurs'/>
            <div className='list'>
              {getAPI.map( item =>
                <Thumb key={item.id} id={item.id} cover={item.cover} title={item.title} />
              )}
            </div>
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default Accueil;
