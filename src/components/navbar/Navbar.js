import React, { Component, useState  } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import {
    Link
} from "react-router-dom";


import Banner from "../../img/Banner.png"


const _Navbar = (props) => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div className="nav">
            <img style ={{width: "400px", backgroundColor: "transparent", paddingLeft: "0%"}} src ={Banner}></img>
                <Navbar className="nav navbar-dark py-0" light expand="md">
                    <NavbarToggler onClick={toggle} />
                        <Collapse color="light" isOpen={isOpen} navbar>
                        <Nav  navbar>
                            <ul>
                                    <li><Link to="/"><a id="g" onclick="scrollWin()"><h1><font style={{backgroundColor: "rgb(30, 30, 30)"}} color="3dc097">HOME</font></h1></a></Link></li>
                                <li>
                                    
                                    <a id="r" ><h1><font style={{backgroundColor: "rgb(30, 30, 30)"}} color="E85648">SEKRETARIAT</font></h1></a>
                                    <ul>
                                            <li><Link to="/buero"><a className="r" onclick="scrollWin()">BÜRO</a></Link></li>
                                            <li><Link to="/fragen_antworten"><a className="r" onclick="scrollWin()">FRAGE-ANTWORT</a></Link></li>
                                            <li><Link to="/gebuehren"><a className="r" onclick="scrollWin()">GEBÜHREN</a></Link></li>
                                            <li><Link to="/anmeldung"><a className="r" onclick="scrollWin()">ANMELDUNG</a></Link></li>
                                            <li><Link to="/ummeldung"><a className="r" onclick="scrollWin()">UMMELDUNG</a></Link></li>
                                            <li><Link to="/abmeldung"><a className="r" onclick="scrollWin()">ABMELDUNG</a></Link></li>
                                            <li><Link to="/ferienkalender"><a className="r" onclick="scrollWin()">FERIENKALENDER</a></Link></li>
                                            <li><Link to="/schulordnung"><a className="r" onclick="scrollWin()">SCHULORDNUNG</a></Link></li>
                                            <li><Link to="/datenschutz"><a className="r" onclick="scrollWin()">DATENSCHUTZ</a></Link></li>
                                    </ul>
                                </li>
                                <li><a id="b" ><h1><font style={{backgroundColor: "rgb(30, 30, 30)"}} color="52adbb">MUSIKSCHULE</font></h1></a>
                                    <ul>
                                            <li><Link to="/ueber_uns"><a className="b" onclick="scrollWin()">ÜBER UNS</a></Link></li>
                                            <li><Link to="/musikschul_team"><a className="b" onclick="scrollWin()">MUSIKSCHUL-TEAM</a></Link></li>
                                            <li><Link to="/unterrichtsfaecher"><a className="b" onclick="scrollWin()">UNTERRICHTSFÄCHER</a></Link></li>
                                            <li><Link to="/unterrichtsorte"><a className="b" onclick="scrollWin()">UNTERRICHTSORTE</a></Link></li>
                                            <li><Link to="/partner"><a className="b" onclick="scrollWin()">PARTNER</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/kontakt"><a id="o" onclick="scrollWin()"><h1><font style={{backgroundColor: "rgb(30, 30, 30)"}} color="E9B041">KONTAKT</font></h1></a></Link></li>
                                
                            </ul>
                            
                        </Nav>
                        
                    </Collapse>
                    </Navbar>
                
            </div>
        );
    }

export default _Navbar;

