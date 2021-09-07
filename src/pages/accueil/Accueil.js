import 'pages/accueil/Accueil.scss';
import React from 'react';
import bannerHome from 'assets/banner-home.jpg';
import Thumb from 'components/thumb/Thumb';
import logements from 'data/logements.json'
import Banner from 'components/banner/Banner';

const getAPI = logements

class Accueil extends React.Component {
  render () {
      return (
        <main>
          <Banner picture={bannerHome} slogan='Chez vous, partout et ailleurs'/>
          <section className='list'>
            {getAPI.map( item =>
              <Thumb 
                key={item.id} 
                id={item.id} 
                cover={item.cover} 
                title={item.title} 
                index={item.id}
              />
            )}
          </section>
        </main>
      )
  }
}

export default Accueil;
