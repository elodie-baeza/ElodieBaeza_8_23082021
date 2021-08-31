import 'styles/index.css';
import React from 'react';
import Footer from '../components/Footer';
import Tag from '../components/Tag';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown';

function Card() {
  return (
    <React.Fragment>
      <main>
        <Carrousel slideIndex={3} />
        <Tag name='tag-name'/> 
        <Dropdown title='Equipements'/>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Card;
