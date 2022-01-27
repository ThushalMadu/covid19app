import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'

export default function Doctor123(props) {
    return (
        <View >
            <Image style={styles.imgStyle} source={Assets.doctors123} />
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 100,
        height: 100
    }
});
