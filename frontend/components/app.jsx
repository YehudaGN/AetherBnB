
import React from 'react';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import LogInModalContainer from './session_form/login_modal_container';
import SignUpModalContainer from './session_form/signup_modal_container';
import Modal from './modal/modal';
import { Route } from 'react-router';
import Splash from './splash/splash';
import CreateListingContainer from './listings_forms/create_listing_container';


const App = () => (
  <div>
        <HeaderContainer />
        <Modal />
        <Route path = '/new/listing'  component={CreateListingContainer}/>
        <Route path='/' component={Splash}/>
  </div>
);

export default App;