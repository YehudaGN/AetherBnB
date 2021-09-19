import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginModalContainer from '../session_form/login_modal_container';
import SignupModalContainer from '../session_form/signup_modal_container';
import CreateListingContainer from '../listings_forms/create_listing_container';
import CreateReviewContainer from '../review_forms/review_form_container'
function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginModalContainer />;
      break;
    case 'signup':
      component = <SignupModalContainer />;
      break;
    case 'create listing':
      component = <CreateListingContainer />;
      break;
    case 'create review':
      component = <CreateReviewContainer/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);