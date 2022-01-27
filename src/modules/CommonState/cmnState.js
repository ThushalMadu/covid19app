const initialState = {
    name: ''
};

const SET_NAME = 'cmnState/SET_NAME';


// Action creators
export function setNameAction(name) {
    return {
        type: SET_NAME,
        name: name,
    };
}

//set name
const setName = (state, action) => ({
    ...state,
    name: action.name,
});


// Reducer
export default function CommonStateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NAME:
            return setName(state, action);
        default:
            return state;
    }
}