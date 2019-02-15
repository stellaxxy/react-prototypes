import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import Contact from './contact';
import GiftsParties from './gifts_parties';

export default (props) => {
    return (
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons}/>
            <Route path="/gifts-parties" component={GiftsParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    );
}