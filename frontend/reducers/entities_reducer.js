import { combineReducers } from "redux";
import bookingsReducer from "./bookings_reducer";
import listingsReducer from "./listings_reducer";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;
