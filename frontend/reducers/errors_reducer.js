import { combineReducers } from "redux";
import listingsErrorsReducer from "./listings_errors_reducer";
import sessionErrorsReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    listings: listingsErrorsReducer
})

export default errorsReducer;