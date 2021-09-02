import 'styles/index.css';
import React from 'react';
import Footer from '../components/Footer';
import Tag from '../components/Tag';
import Carrousel from '../components/Carrousel';
import Dropdown from '../components/Dropdown';
import logementsDatas from 'datas/logements.json'


class Logement extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logement: null
    }
  }

  componentDidMount() {
    let slug = this.props.match.params.id
    this.setState({ 
      logement: logementsDatas.find(x => x.id === slug 
    )})
  }
  
  descriptionInArray() {
    if (this.state.logement != null) {
      var descriptionInArray = new Array([this.state.logement.description])
    }
    return descriptionInArray
  }

  render() {
    return (
      this.state.logement && (
        <React.Fragment>
          <main>
            <Carrousel pictures={this.state.logement.pictures} />
            {this.state.logement.tags.map( (item, index) =>
              <Tag key={index} name={item} /> 
            )}
            <div>
              <Dropdown title='Equipements' list={this.state.logement.equipments}/>
              <Dropdown title='Description' list={this.descriptionInArray()}/>
            </div>
          </main>
          <Footer />
        </React.Fragment>
      )
    )
  }
}

export default Logement;
