import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'

export default function NextImage(props) {
    return (
        <View >
            <Image style={styles.imgStyle} source={Assets.next} />
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 30,
        height: 30
    }
});
