import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'

export default function HospitalGif(props) {
    return (
        <View >
            <Image style={styles.imgStyle} source={Assets.hpt} />
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 250,
        height: 250
    }
});
