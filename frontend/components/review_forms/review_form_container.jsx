import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CreateReview from "./create_review_form";
import { createReview } from "../../actions/reviews_actions";
import { withRouter } from "react-router";
import React from "react";

const mSTP = (state, ownProps) => ({
  review: {},
});

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mSTP, mDTP)(CreateReview));
