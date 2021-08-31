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
        <div className={'APropos-body'}>
          <Dropdown 
          title='Fiabilité'
          list={[`Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`]}
          size='large'
          />
          <Dropdown 
          title='Respect'
          list={[`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`]}
          size='large'
          />
          <Dropdown 
          title='Service'
          list={[`Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`]}
          size='large'
          />
          <Dropdown 
          title='Sécurité'
          list={[`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`]}
          size='large'
          />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default APropos;
