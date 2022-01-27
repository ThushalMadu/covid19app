const initialState = {
    signinDetail: ''
}

const SET_SIGNINDETAILS = 'signIn/SET_SIGNINDETAILS'

// Action creators
export function setSignInDetailAction(signinDetail) {
    return {
        type: SET_SIGNINDETAILS,
        signinDetail: signinDetail,
    };
}

const setSignInDetail = (state, action) => ({
    ...state,
    signinDetail: action.signinDetail,
});

// Reducer
export default function SignInReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SIGNINDETAILS:
            return setSignInDetail(state, action);
        default:
            return state;
    }
}