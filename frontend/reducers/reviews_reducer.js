import {
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/reviews_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECEIVE_REVIEW: 
            return {...state, [action.review.id]: action.review}
        case REMOVE_REVIEW:
            let newState = {...state};
            delete newState[action.reviewId];
            return newState
        default: 
            return state;
    }
}

export default reviewsReducer;