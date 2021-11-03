import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HeaderContainer from "./header/header_container";
import Modal from "./modal/modal";
import { Route, Switch } from "react-router";
import SplashContainer from "./splash/splash_container";
import CreateListingContainer from "./listings_forms/create_listing_container";
import UserShowContainer from "./users/users_show_container";
import ListingShowContainer from "./listing_show/listing_show_container";
import ListingEditContainer from "./listings_forms/edit_listing_container";
import ListingIndexContainer from "./listings_index/listings_index_container";
import BookingShowContainer from "./bookings/booking_show_container";
import BookingIndexContainer from "./bookings/booking_index_container";
import UpdateUserPhotoContainer from "./update_user/update_user_photo_container";
import NotFound from "./not_found/not_found";
const App = () => (
  <div className="app-container">
    <HeaderContainer />
    <Modal />
    <Switch>
      <Route exact path="/listings" component={ListingIndexContainer} />
      <Route exact path="/listings/:city" component={ListingIndexContainer} />
      <Route
        exact
        path="/listing/show/:listingId"
        component={ListingShowContainer}
      />
      <Route
        exact
        path="/listing/:listingId/edit"
        component={ListingEditContainer}
      />

      <ProtectedRoute exact path="/trips" component={BookingIndexContainer} />
      <ProtectedRoute
        path="/listing/:listingId/booking/:bookingId"
        component={BookingShowContainer}
      />
      <ProtectedRoute exact path="/new/listing" component={CreateListingContainer} />
      <Route path="/users/show/:userId" component={UserShowContainer} />
      <ProtectedRoute
        exact 
        path="/user/:userId/edit-photo"
        component={UpdateUserPhotoContainer}
      />
      <Route exact path="/" component={SplashContainer} />
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default App;
