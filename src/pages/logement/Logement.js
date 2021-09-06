import 'styles/logement.css';
import React from 'react';
import Tag from '../../components/Tag/Tag';
import Carrousel from '../../components/Carrousel/Carrousel';
import Dropdown from '../../components/Dropdown/Dropdown';
import logementsDatas from 'data/logements.json'
import Rate from 'components/Rate/Rate';
import { Redirect } from 'react-router';

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
      logement: logementsDatas.find(x => x.id === slug)
    })
  }
  
  descriptionInArray() {
    if (this.state.logement != null) {
      var descriptionInArray = new Array([this.state.logement.description])
    }
    return descriptionInArray
  }

  render() {
    return (
      this.state.logement ? (
        <main>
          <Carrousel pictures={this.state.logement.pictures} />
          <div className='presentation-container'>
            <div>
              <div className='title-container'>
                <div className='title'>{this.state.logement.title}</div>
                <div className='location'>{this.state.logement.location}</div>
              </div>
              <div>
                {this.state.logement.tags.map( (item, index) =>
                  <Tag key={index} name={item} /> 
                  )}
              </div>
            </div>
            <div>
              <div className='host-container'>
                {this.state.logement.host.name.split(' ')[0]}<br/>
                {this.state.logement.host.name.split(' ')[1]}
                <img src={this.state.logement.host.picture} alt="host" className='host-picture'/>
              </div>
              <Rate value={this.state.logement.rating}/>
            </div>
          </div>
          <div className='dropdowns'>
            <Dropdown title='Equipements' list={this.state.logement.equipments}/>
            <Dropdown title='Description' list={this.descriptionInArray()}/>
          </div>
        </main>
      )
      : this.state.logement === undefined && 
        <Redirect to='/error' />
    )
  }
}

export default Logement;
