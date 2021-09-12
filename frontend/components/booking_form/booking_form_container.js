import { connect } from "react-redux";
import React from "react";
import { createBooking } from "../../actions/bookings_actions";
import CreateBooking from "./booking_form";
import { withRouter } from "react-router";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  booking: {
    start_date: "",
    end_date: "",
    guest_id: state.session.id,
    listing_id: ownProps.match.params.listingId,
    num_guests: "",
    price: ""
  },
  listingPrice: state.entities.listings[ownProps.match.params.listingId].price,
});

const mDTP = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  openModal: () => dispatch(openModal("login")),
});

export default withRouter(connect(mSTP, mDTP)(CreateBooking));
