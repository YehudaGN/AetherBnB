import { RECEIVE_LISTING, RECEIVE_LISTING_ERRORS } from "../actions/listings_actions";

const listingsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_LISTING_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default listingsErrorsReducer;