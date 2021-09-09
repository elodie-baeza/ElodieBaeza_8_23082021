import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from 'pages/accueil/Accueil';
import APropos from 'pages/apropos/APropos';
import Logement from 'pages/logement/Logement';
import Erreur from 'components/erreur/Erreur';

class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/'>
                  <Accueil />
                </Route>
      
                <Route exact path='/apropos' >
                  <APropos />
                </Route>
      
                <Route
                  exact path={'/fiche/:id'}
                  component={({match}) =>
                    <Logement match={match}/>
                  }>
                </Route>
      
                <Route path='/'>
                  <Erreur number='404' message={`Oups! La page que vous demandez n'existe pas.`}/>
                </Route>
            </Switch>
        )
    }
  }
  
  export default Router;  
