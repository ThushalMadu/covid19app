import {
    Animated,
} from 'react-native';

const initialState = {
    status: false,
    position: new Animated.ValueXY(),
    currentIndex: 0,
    ballanimation: new Animated.Value(0),
    coloranimation: new Animated.Value(0),
    textanimation: new Animated.Value(25),
    images: ""
}

const SET_STATUS = 'AnimateMobile/SET_STATUS'
const SET_IMAGES = 'AnimateMobile/SET_IMAGES'
const SET_ANIMATIONVALUE = 'AnimateMobile/SET_ANIMATIONVALUE'
const SET_TEXTANIMATION = 'AnimateMobile/SET_TEXTANIMATION'
const SET_COLORANIMATION = 'AnimateMobile/SET_COLORANIMATION'
const SET_POSITION = "AnimateMobile/SET_POSITION"
const SET_CURRENTINDEX = "AnimateMobile/SET_CURRENTINDEX"

// Action creators
export function setStatusAction(status) {
    return {
        type: SET_STATUS,
        status: status,
    };
}
export function setImagesAction(images) {
    return {
        type: SET_IMAGES,
        images: images,
    };
}
export function setAnimationValueAction(ballanimation) {
    return {
        type: SET_ANIMATIONVALUE,
        ballanimation: ballanimation,
    };
}
export function setTextAnimationAction(textanimation) {
    return {
        type: SET_TEXTANIMATION,
        textanimation: textanimation,
    };
}
export function setColorAnimationAction(coloranimation) {
    return {
        type: SET_COLORANIMATION,
        coloranimation: coloranimation,
    };
}
export function setPositionAction(position) {
    return {
        type: SET_POSITION,
        position
    };
}
export function setCurrentIndexAction(currentIndex) {
    return {
        type: SET_CURRENTINDEX,
        currentIndex
    };
}


const setStatus = (state, action) => ({
    ...state,
    status: action.status,
});
const setImages = (state, action) => ({
    ...state,
    images: action.images,
});
const setAnimationValue = (state, action) => ({
    ...state,
    ballanimation: action.ballanimation,
});
const setTextAnimation = (state, action) => ({
    ...state,
    textanimation: action.textanimation,
});
const setColorAnimation = (state, action) => ({
    ...state,
    coloranimation: action.coloranimation,
});
const setPosition = (state, action) => ({
    ...state,
    position: action.position,
});
const setCurrentIndex = (state, action) => ({
    ...state,
    currentIndex: action.currentIndex,
});
// Reducer
export default function animateMobileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STATUS:
            return setStatus(state, action);
        case SET_IMAGES:
            return setImages(state, action);
        case SET_ANIMATIONVALUE:
            return setAnimationValue(state, action);
        case SET_TEXTANIMATION:
            return setTextAnimation(state, action);
        case SET_COLORANIMATION:
            return setColorAnimation(state, action);
        case SET_POSITION:
            return setPosition(state, action)
        case SET_CURRENTINDEX:
            return setCurrentIndex(state, action)
        default:
            return state;
    }
}