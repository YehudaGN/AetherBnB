import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderContainer from "./header/header_container";
import Modal from "./modal/modal";
import { Route } from "react-router";
import SplashContainer from "./splash/splash_container";
import CreateListingContainer from "./listings_forms/create_listing_container";
import UserShowContainer from "./users/users_show_container";
import ListingShowContainer from "./listing_show/listing_show_container";
import ListingIndexContainer from "./listings_index/listings_index_container";
import BookingShowContainer from "./bookings/booking_show_container";
import BookingIndexContainer from './bookings/booking_index_container';
import UpdateUserPhotoContainer from './update_user/update_user_photo_container'
const App = () => (
  <div className="app-container">
    <HeaderContainer />
    <Modal />
    <Route exact path="/listings" component={ListingIndexContainer} />
    <Route exact path="/listings/:city" component={ListingIndexContainer} />
    <Route path="/listing/show/:listingId" component={ListingShowContainer} />
    <ProtectedRoute path='/trips' component={BookingIndexContainer} />
    <ProtectedRoute path="/listing/:listingId/booking/:bookingId" component={BookingShowContainer}/>
    <ProtectedRoute path="/new/listing" component={CreateListingContainer} />
    <Route path="/users/show/:userId" component={UserShowContainer} />
    <ProtectedRoute path="/user/:userId/edit-photo" component={UpdateUserPhotoContainer} />
    <Route exact path="/" component={SplashContainer} />
  </div>
);

export default App;
