import 'pages/apropos/APropos.css';
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
