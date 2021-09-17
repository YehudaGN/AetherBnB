import BookingShow from "./booking_show";
import { fetchBooking, deleteBooking } from "../../actions/bookings_actions";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  booking: state.entities.bookings[ownProps.match.params.bookingId],
  session: state.session.id,
});

const mDTP = dispatch => ({
  fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(BookingShow);
