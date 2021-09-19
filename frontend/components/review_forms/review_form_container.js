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
    cleanliness: '',
    communication: '',
    check_in: '',
    accuracy: '',
    location: '',
    value: '',
  },
});

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mSTP, mDTP)(CreateReview));
