import { connect } from "react-redux";
import { editListing, fetchListing } from "../../actions/listings_actions";
import EditListing from "./edit_listing";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    return{
  listing: state.entities.listings[ownProps.match.params.listingId]
}};

const mDTP = dispatch => ({
  editListing: listing => dispatch(editListing(listing)),
  fetchListing: listingId => dispatch(fetchListing(listingId)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mSTP, mDTP)(EditListing));