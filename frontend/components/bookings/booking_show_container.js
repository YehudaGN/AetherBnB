import BookingShow from "./booking_show";
import { fetchBooking, deleteBooking } from "../../actions/bookings_actions";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => ({
    booking: state.entities.bookings[ownProps.match.params.bookingId]
})

const mDTP = dispatch => ({
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
})

export default connect(mSTP, mDTP)(BookingShow)