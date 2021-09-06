import 'styles/apropos.css';
import React from 'react';
import Banner from 'components/Banner/Banner';
import bannerAPropos from 'assets/banner-a-propos.jpg';
import Dropdown from 'components/Dropdown/Dropdown';
import apropos from 'data/apropos.json'

class APropos extends React.Component {

  render() {
    return (
      <main>
        <Banner picture={bannerAPropos} />
        <div className={'APropos-body'}>
          {apropos.map( (item, index) => 
            <Dropdown 
            key={index} 
            title={item.title} 
            list={new Array(item.text)}
            size='large' />
          )}
        </div>
      </main>
    )
  }
}

export default APropos;
