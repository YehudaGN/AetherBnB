
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
import ListingShowContainer from './listing_show/listing_show_container';
import ListingIndexContainer from './listings_index/listings_index_container';


const App = () => (
  <div className="app-container">
        <HeaderContainer />
        <Modal />
        <Route path = '/listings' component={ListingIndexContainer}/>
        <Route path = '/listing/show/:listingId' component={ListingShowContainer}/>
        <ProtectedRoute path = '/new/listing'  component={CreateListingContainer}/>
        <ProtectedRoute path = '/users/show/:userId'  component={UserShowContainer}/>
        <Route exact path='/' component={Splash}/>
  </div>
);

export default App;