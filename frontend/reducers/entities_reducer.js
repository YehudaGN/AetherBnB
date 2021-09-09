import { combineReducers } from "redux";
import listingsReducer from "./listings_reducer";
import usersReducer from './users_reducer';
const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer
})

export default entitiesReducer;