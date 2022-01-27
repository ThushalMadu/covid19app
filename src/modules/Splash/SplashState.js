const initialState = {
    status: false
}

const SET_STATUS = 'Splash/SET_STATUS'

// Action creators
export function setStatusAction(status) {
    return {
        type: SET_STATUS,
        status: status,
    };
}

const setStatus = (state, action) => ({
    ...state,
    status: action.status,
});

// Reducer
export default function splashReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STATUS:
            return setStatus(state, action);
        default:
            return state;
    }
}