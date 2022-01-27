import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'

export default function FirstImage(props) {
    return (
        <View >
            <Image style={styles.imgStyle} source={Assets.doctorsGif} />
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 400,
        height: 400
    }
});
