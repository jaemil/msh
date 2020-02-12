import React from 'react';
import './App.css';

import { BrowserRouter, Link, Switch, Route } from "react-router-dom"


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Aktuelles from './components/pages/aktuelles/Aktuelles'

import Home from './components/pages/Home'

import Kontakt from './components/pages/kontakt/Kontakt'

import Aktionen  from './components/pages/musikschule/Aktionen' 
import Lehrkraefte from './components/pages/musikschule/Lehrkraefte' 
import Orte_Raeumlichkeiten from './components/pages/musikschule/Orte_Raeumlichkeiten' 
import Ueber_Uns from './components/pages/musikschule/Ueber_Uns' 
import Unterrichtsfaecher from './components/pages/musikschule/Unterrichtsfaecher' 
import Freunde_Partner from './components/pages/musikschule/Freunde_Partner' 

import Abmeldung from './components/pages/sekretariat/Abmeldung'
import Anmeldung from './components/pages/sekretariat/Anmeldung' 
import Buero from './components/pages/sekretariat/Buero' 
import Datenschutz from './components/pages/sekretariat/Datenschutz' 
import Ferienkalender from './components/pages/sekretariat/Ferienkalender' 
import Fragen_Antworten from './components/pages/sekretariat/Fragen_Antworten' 
import Gebuehren from './components/pages/sekretariat/Gebuehren' 
import Schulordung from './components/pages/sekretariat/Schulordnung' 
import Ummeldung from './components/pages/sekretariat/Ummeldung' 

class App extends React.Component 
{
  render() {
    return (
      <div className="App">
        <Navbar/>

        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aktuelles" component={Aktuelles} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/aktionen" component={Aktionen} />
          <Route path="/freunde_partner" component={Freunde_Partner} />
          <Route path="/lehrkraefte" component={Lehrkraefte} />
          <Route path="/orte_raeumlichkeiten" component={Orte_Raeumlichkeiten} />
          <Route path="/ueber_uns" component={Ueber_Uns} />
          <Route path="/unterrichtsfaecher" component={Unterrichtsfaecher} />
          <Route path="/abmeldung" component={Abmeldung} />
          <Route path="/anmeldung" component={Anmeldung} />
          <Route path="/buero" component={Buero} />
          <Route path="/datenschutz" component={Datenschutz} />
          <Route path="/ferienkalender" component={Ferienkalender} />
          <Route path="/fragen_antworten" component={Fragen_Antworten} />
          <Route path="/gebuehren" component={Gebuehren} />
          <Route path="/schulordnung" component={Schulordung} />
          <Route path="/ummeldung" component={Ummeldung} />
          </Switch>
          </BrowserRouter>

        <Footer/>
      </div>
    )
  }
}

export default App;
