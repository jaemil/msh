import React from 'react';
import './App.css';

import { BrowserRouter, Link, Switch, Route } from "react-router-dom"


import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './components/pages/Home'

import Kontakt from './components/pages/kontakt/Kontakt'

import Lehrkraefte from './components/pages/musikschule/Lehrkraefte' 
import Unterrichtsorte from './components/pages/musikschule/Unterrichtsorte' 
import Ueber_Uns from './components/pages/musikschule/Ueber_Uns' 
import Unterrichtsfaecher from './components/pages/musikschule/Unterrichtsfaecher' 
import Partner from './components/pages/musikschule/Partner' 

import Abmeldung from './components/pages/sekretariat/Abmeldung'
import Anmeldung from './components/pages/sekretariat/Anmeldung' 
import Buero from './components/pages/sekretariat/Buero' 
import Datenschutz from './components/pages/sekretariat/Datenschutz' 
import Ferienkalender from './components/pages/sekretariat/Ferienkalender' 
import Fragen_Antworten from './components/pages/sekretariat/Fragen_Antworten' 
import Gebuehren from './components/pages/sekretariat/Gebuehren' 
import Schulordung from './components/pages/sekretariat/Schulordnung' 
import Ummeldung from './components/pages/sekretariat/Ummeldung'
import Impressum from "./components/pages/sekretariat/Impressum"
import Info from "./components/pages/Info"

class App extends React.Component 
{
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="Main" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/kontakt" component={Kontakt} />
          <Route path="/partner" component={Partner} />
          <Route path="/musikschul_Team" component={Lehrkraefte} />
          <Route path="/unterrichtsorte" component={Unterrichtsorte} />
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
        </div>

        <Footer></Footer>
      </div>
    )
  }
}

export default App;
