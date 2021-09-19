import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import EditUserPhoto from './update_user_photo'
const mSTP = (state, ownProps) => {
    // debugger
    return{
    user: state.entities.users[ownProps.match.params.userId]
}}

const mDTP = dispatch => ({
    fetchUser: (user) => dispatch(fetchUser(user)),
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(EditUserPhoto)