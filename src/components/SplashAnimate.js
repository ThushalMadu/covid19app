import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'
import LottieView from 'lottie-react-native';

export default function SplashAnimate(props) {
    return (
        <LottieView style={styles.imgStyle} source={Assets.stayhomesafe} autoPlay loop />
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        width: 250,
        height: 250
    }
});
