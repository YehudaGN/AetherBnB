import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS,
  REMOVE_BOOKING,
} from "../actions/bookings_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKING:
      return { ...state, [action.booking.id]: action.booking };
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case REMOVE_BOOKING:
      let newState = { ...state };
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
