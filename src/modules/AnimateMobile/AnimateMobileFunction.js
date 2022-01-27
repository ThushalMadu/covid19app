import {
    Animated,
} from 'react-native';

export function animateBall(props) {
    Animated.timing(props.ballanimation, {
        toValue: 1,
        duration: 1500
    }).start(() => {
        Animated.timing(props.ballanimation, {
            toValue: 0,
            duration: 1500
        }).start()
    });

    Animated.timing(props.textanimation, {
        toValue: 50,
        duration: 1500
    }).start(() => {
        Animated.timing(props.textanimation, {
            toValue: 25,
            duration: 1500
        }).start()
    });

    Animated.timing(props.coloranimation, {
        toValue: 1,
        duration: 1500
    }).start(() => {
        Animated.timing(props.coloranimation, {
            toValue: 0,
            duration: 1500
        }).start()
    });
}