import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import NextImage from './NextImage'

export default function HospitalName(props) {
    return (
        <View style={styles.btnmain}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Hospitals</Text>
            </View>
            <View style={styles.middleView}>
                <Image style={styles.imgStyle} source={Assets.hospitapic} />
            </View>
            <View style={styles.buttomView}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnmain: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
    },
    btnmainleft: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    buttomView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontFamily: fonts.poppingbold,
        fontSize: 20,
        color: colors.black,
        textAlign: "center"
    },
    buttonText: {
        fontFamily: fonts.poppingbold,
        fontSize: 20,
        color: colors.white,
    },
    imgStyle: {
        width: 35,
        height: 70
    }
});
