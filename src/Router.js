import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from 'pages/Accueil';
import APropos from 'pages/APropos';
import Logement from 'pages/Logement';
import Erreur404 from 'pages/Erreur404';

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
                  <Erreur404 />
                </Route>
            </Switch>
        )
    }
  }
  
  export default Router;  
