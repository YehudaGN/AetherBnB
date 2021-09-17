import { fetchBookings } from "../../actions/bookings_actions";
import BookingIndex from "./booking_index";
import { connect, connectAdvanced } from "react-redux";

const mSTP = (state) => ({
    bookings: Object.values(state.entities.bookings)
})

const mDTP = dispatch => ({
    fetchBookings: () => dispatch(fetchBookings())
})

export default connect(mSTP, mDTP)(BookingIndex);