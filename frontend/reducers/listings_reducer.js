import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING,
} from "../actions/listings_actions";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTING:
      return { ...state, [action.listing.id]: action.listing };
    case RECEIVE_LISTINGS:
      return { ...state, ...action.listings };
    case REMOVE_LISTING:
      let newState = { ...state };
      delete newState[action.listingId];
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
