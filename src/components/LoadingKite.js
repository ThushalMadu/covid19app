import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'
import LottieView from 'lottie-react-native';

export default function LoadingKite(props) {
    return (
        <LottieView style={styles.imgStyle} source={Assets.loading} autoPlay loop />
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 200,
        height: 200
    }
});
