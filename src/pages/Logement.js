import 'styles/index.css';
import React from 'react';
import Footer from '../components/Footer';
import Tag from '../components/Tag';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown';
import logements from 'datas/logements.json'

const logement = logements[1];

class Logement extends React.Component {

  

  descriptionInArray() {
    const descriptionInArray = []
    descriptionInArray.push(logement.description)
    return descriptionInArray
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <Carrousel pictures={logement.pictures} />
          {logement.tags.map( item =>
            <Tag name={item} /> 
          )}
          <div>
            <Dropdown title='Equipements' list={logement.equipments}/>
            <Dropdown title='Description' list={this.descriptionInArray()}/>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Logement;
