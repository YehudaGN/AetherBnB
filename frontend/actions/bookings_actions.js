import * as bookingsApiUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})

export const fetchBooking = bookingId => dispatch => (
    bookingsApiUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking)))
)

export const fetchBookings = () => dispatch => (
    bookingsApiUtil.fetchBookings()
        .then(bookings => dispatch(receiveBookings(bookings)))
)

export const createBooking = booking => dispatch => (
    bookingsApiUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)))
)

export const deleteBooking = bookingId => dispatch => (
    bookingsApiUtil.deleteBooking(bookingId)
        .then(() => dispatch(removeBooking(bookingId)))
)