import 'styles/index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Erreur from 'pages/Erreur';
import Accueil from 'pages/Accueil';
import APropos from 'pages/APropos';
import Logement from 'pages/Logement';

function App() {
  return (
    <Router>
        <Header/>

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
            <Erreur />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
