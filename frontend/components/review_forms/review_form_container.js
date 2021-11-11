import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CreateReview from "./create_review_form";
import { createReview } from "../../actions/reviews_actions";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
  review: {
    body: '',
    rating: '',
    guest_id: state.session.id,
    listing_id: parseInt(ownProps.location.pathname.split('/')[2]),
    cleanliness: 5,
    communication: 5,
    check_in: 5,
    accuracy: 5,
    location: 5,
    value: 5,
  },
});

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mSTP, mDTP)(CreateReview));
