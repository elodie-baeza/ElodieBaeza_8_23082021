import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accueil from 'pages/Accueil/Accueil';
import APropos from 'pages/Apropos/APropos';
import Logement from 'pages/logement/Logement';
import Erreur404 from 'components/Erreur404/Erreur404';

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
                  path={'/fiche/:id'}
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
