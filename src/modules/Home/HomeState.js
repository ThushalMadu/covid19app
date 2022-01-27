const initialState = {
    status: true,
    covidData: {},
    hospitalData: [],
    singleHospital: {}
}

const SET_STATUS = 'home/SET_STATUS'
const SET_COVIDDATA = 'home/SET_COVIDDATA'
const SET_HOSPITALDATA = 'home/SET_HOSPITALDATA'
const SET_SINGLEHOSPITAL = 'home/SET_SINGLEHOSPITAL'

// Action creators
export function setStatusAction(status) {
    return {
        type: SET_STATUS,
        status: status,
    };
}
export function setCovidDataAction(covidData) {
    return {
        type: SET_COVIDDATA,
        covidData: covidData,
    };
}
export function setHospitaDataAction(hospitalData) {
    return {
        type: SET_HOSPITALDATA,
        hospitalData: hospitalData,
    };
}
export function setSingleHospitalAction(singleHospital) {
    return {
        type: SET_SINGLEHOSPITAL,
        singleHospital: singleHospital,
    };
}

const setStatus = (state, action) => ({
    ...state,
    status: action.status,
});
const setCovidData = (state, action) => ({
    ...state,
    covidData: action.covidData,
});
const setHospitaData = (state, action) => ({
    ...state,
    hospitalData: action.hospitalData,
});
const setSingleHospital = (state, action) => ({
    ...state,
    singleHospital: action.singleHospital,
});

// Reducer
export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STATUS:
            return setStatus(state, action);
        case SET_COVIDDATA:
            return setCovidData(state, action);
        case SET_HOSPITALDATA:
            return setHospitaData(state, action);
        case SET_SINGLEHOSPITAL:
            return setSingleHospital(state, action);
        default:
            return state;
    }
}