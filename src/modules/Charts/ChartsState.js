const initialState = {
    status: false,
    dataArray: []
}

const SET_STATUS = 'ChartsState/SET_STATUS'
const SET_DATAARRAY = 'ChartsState/SET_DATAARRAY'

// Action creators
export function setStatusAction(status) {
    return {
        type: SET_STATUS,
        status: status,
    };
}
export function setDataArrayAction(dataArray) {
    return {
        type: SET_DATAARRAY,
        dataArray: dataArray,
    };
}

const setStatus = (state, action) => ({
    ...state,
    status: action.status,
});
const setDataArray = (state, action) => ({
    ...state,
    dataArray: action.dataArray,
});

// Reducer
export default function ChartsStateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STATUS:
            return setStatus(state, action);
        case SET_DATAARRAY:
            return setDataArray(state, action);
        default:
            return state;
    }
}