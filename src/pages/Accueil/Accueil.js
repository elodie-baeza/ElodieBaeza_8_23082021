import 'styles/accueil.css';
import React from 'react';
import Banner from 'components/Banner/Banner';
import bannerHome from 'assets/banner-home.jpg';
import Thumb from 'components/Thumb/Thumb';
import logements from 'data/logements.json'

const getAPI = logements

class Accueil extends React.Component {
  render () {
      return (
          <main>
              <Banner picture={bannerHome} text='Chez vous, partout et ailleurs'/>
              <div className='list'>
                {getAPI.map( item =>
                  <Thumb 
                    key={item.id} 
                    id={item.id} 
                    cover={item.cover} 
                    title={item.title} 
                    index={item.id}
                  />
                )}
              </div>
          </main>
      )
  }
}

export default Accueil;
