import 'styles/pages/apropos/APropos.css'
import React from 'react';
import bannerAPropos from 'assets/banner-a-propos.jpg';
import Dropdown from 'components/dropdown/Dropdown';
import apropos from 'data/apropos.json'
import Banner from 'components/banner/Banner';

class APropos extends React.Component {

  render() {
    return (
      <main>
        <Banner picture={bannerAPropos} />
        <section className={'aPropos'}>
          {apropos.map( (item, index) => 
            <Dropdown 
            key={index} 
            title={item.title} 
            list={[item.text]}/>
          )}
        </section>
      </main>
    )
  }
}

export default APropos;
