
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import LogInModalContainer from './session_form/login_modal_container';
import SignUpModalContainer from './session_form/signup_modal_container';
import Modal from './modal/modal';
import { Route } from 'react-router';
import Splash from './splash/splash';
import CreateListingContainer from './listings_forms/create_listing_container';
import UserShowContainer from './users/users_show_container';


const App = () => (
  <div>
        <HeaderContainer />
        <Modal />
        <ProtectedRoute path = '/new/listing'  component={CreateListingContainer}/>
        <ProtectedRoute path = '/users/show/:userId'  component={UserShowContainer}/>
        <Route exact path='/' component={Splash}/>
  </div>
);

export default App;