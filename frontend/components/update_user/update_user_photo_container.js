import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import EditUserPhoto from './update_user_photo'
const mSTP = (state, ownProps) => {
    return{
    user: state.entities.users[ownProps.match.params.userId]
}}

const mDTP = dispatch => ({
    fetchUser: (user) => dispatch(fetchUser(user)),
    updateUser: (user) => dispatch(updateUser(user)),
    spinner: () => dispatch(openModal('spinner')),
    closeSpinner: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditUserPhoto)