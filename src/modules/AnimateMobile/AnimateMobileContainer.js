import { compose, lifecycle } from 'recompose';
import AnimateMobileView from './AnimateMobileView';
import {
    setStatusAction,
    setImagesAction,
    setAnimationValueAction,
    setTextAnimationAction,
    setColorAnimationAction,
    setPositionAction,
    setCurrentIndexAction
} from './AnimateMobileState';
import { connect } from 'react-redux';
import * as Function from './AnimateMobileFunction';
import { Animated, Dimensions, PanResponder } from "react-native";


export default compose(
    connect(
        state => ({
            status: state.AnimateMobile.status,
            images: state.AnimateMobile.images,
            ballanimation: state.AnimateMobile.ballanimation,
            textanimation: state.AnimateMobile.textanimation,
            coloranimation: state.AnimateMobile.coloranimation,
            position: state.AnimateMobile.position,
            currentIndex: state.AnimateMobile.currentIndex,
        }),
        dispatch => ({
            setStatusAction: status => dispatch(setStatusAction(status)),
            setImagesAction: images => dispatch(setImagesAction(images)),
            setAnimationValueAction: ballanimation => dispatch(setAnimationValueAction(ballanimation)),
            setTextAnimationAction: textanimation => dispatch(setTextAnimationAction(textanimation)),
            setColorAnimationAction: coloranimation => dispatch(setColorAnimationAction(coloranimation)),
            setPositionAction: position => dispatch(setPositionAction(position)),
            setCurrentIndexAction: currentIndex => dispatch(setCurrentIndexAction(currentIndex)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            console.log("Output  ~ file:  position", this.props.position)

        },
        // UNSAFE_componentWillMount() {
        //     const SCREEN_WIDTH = Dimensions.get('window').width
        //     const PanResponderr = PanResponder.create({
        //         onStartShouldSetPanResponder: (evt, gestureState) => true,
        //         onPanResponderMove: (evt, gestureState) => {
        //             this.props.setPositionAction({ x: gestureState.dx, y: gestureState.dy });
        //         },
        //         onPanResponderRelease: (evt, gestureState) => {

        //             if (gestureState.dx > 120) {
        //                 Animated.spring(this.props.position, {
        //                     toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
        //                 }).start(() => {
        //                     this.props.setCurrentIndexAction(this.props.currentIndex + 1)
        //                     this.props.setPositionAction({ x: 0, y: 0 })

        //                 })
        //             } else if (gestureState.dx < -120) {
        //                 Animated.spring(this.props.position, {
        //                     toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
        //                 }).start(() => {
        //                     this.props.setCurrentIndexAction(this.props.currentIndex + 1)
        //                     this.props.setPositionAction({ x: 0, y: 0 })
        //                 })
        //             }
        //             else {
        //                 Animated.spring(this.props.position, {
        //                     toValue: { x: 0, y: 0 },
        //                     friction: 4
        //                 }).start()
        //             }
        //         }
        //     })
        //     this.props.setImagesAction(PanResponderr);
        //     console.log("Output  ~ file: .props.position", this.props.position)

        //     console.log("This is Component will mount")
        // }
    }),
)(AnimateMobileView);