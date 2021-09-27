import 'styles/pages/accueil/Accueil.css'
import React from 'react';
import bannerHome from 'assets/banner-home.jpg';
import Thumb from 'components/thumb/Thumb';
import Banner from 'components/banner/Banner';
import logements from 'data/logements.json'

class Accueil extends React.Component {
  render () {
      return (
        <main>
          <Banner picture={bannerHome} slogan='Chez vous, partout et ailleurs'/>
          <section className='thumbsList'>
            {logements.map( item =>
              <Thumb 
                key={item.id}
                id={item.id} 
                cover={item.cover} 
                title={item.title} 
              />
            )}
          </section>
        </main>
      )
  }
}

export default Accueil;
