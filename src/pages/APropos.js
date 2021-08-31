import 'styles/index.css';
import React from 'react';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import bannerAPropos from 'assets/banner-a-propos.jpg';
import Dropdown from 'components/Dropdown';

function APropos() {
  return (
    <React.Fragment>
      <main>
        <Banner picture={bannerAPropos} />
        <Dropdown title='Equipements' />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default APropos;
