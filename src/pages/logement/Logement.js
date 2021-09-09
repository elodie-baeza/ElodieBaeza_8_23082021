import 'pages/logement/Logement.css';
import React from 'react';
import Tag from 'components/tag/Tag';
import Carrousel from 'components/carrousel/Carrousel';
import Dropdown from 'components/dropdown/Dropdown';
import Rate from 'components/rate/Rate';
import logementsData from 'data/logements.json'
import { Redirect } from 'react-router';

class Logement extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logement: null
    }
  }

  componentDidMount() {
    this.setState({ 
      'logement': logementsData.find(logement => logement.id === this.props.match.params.id)
    })
  }
  
  render() {
    return (
      this.state.logement ? (
          <main>
            <Carrousel pictures={this.state.logement.pictures} />
            <section className='infos'>
              <div>
                <p className='title'>{this.state.logement.title}</p>
                <p className='location'>{this.state.logement.location}</p>
                <div className='tags'>
                  {this.state.logement.tags.map( (item, index) =>
                    <Tag key={index} name={item} /> 
                    )}
                </div>
              </div>
              <div className='host'>
                <figure>
                    <img src={this.state.logement.host.picture} alt="host" className='host-picture'/>
                    <figcaption>
                      {this.state.logement.host.name.split(' ')[0]}<br/>
                      {this.state.logement.host.name.split(' ')[1]}
                    </figcaption>
                </figure>
                <Rate value={this.state.logement.rating}/>
              </div>
            </section>
            <section className='dropdowns'>
              <Dropdown title='Equipements' list={this.state.logement.equipments}/>
              <Dropdown title='Description' list={[this.state.logement.description]}/>
            </section>
          </main>
      )
      : this.state.logement === undefined && 
        <Redirect to='/error' />
    )
  }
}

export default Logement;
