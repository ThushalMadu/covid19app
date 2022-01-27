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
import * as HomeText from '../translations/en.json';
import Doctor123 from './Doctor123';

export default function HospitalList(props) {
    return (
        <View style={styles.btnmain}>
            <View style={styles.topViewHis} />
            <View style={styles.topView}>
                <Text style={styles.topText}>{props.item.hospital.name_si}</Text>
            </View>
            <View style={styles.topImageView}>
                <Doctor123 />
            </View>
            <View style={styles.middleView}>
                <Text style={styles.middleText}>{HomeText.lblttlpatinets} {props.item.cumulative_total}</Text>
            </View>
            <View style={styles.buttomView}>
                <Text style={styles.buttonText}>{HomeText.lblttltreat} {props.item.treatment_total}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnmain: {
        height: "100%",
        minWidth: 250,
        minHeight: 100,
        width: "85%",
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.hospitalorange,
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
    topViewHis: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topImageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttomView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontFamily: fonts.poppingbold,
        fontSize: 10,
        color: colors.white,
        textAlign: "center"
    },
    middleText: {
        fontFamily: fonts.poppingMedium,
        fontSize: 15,
        color: colors.white,
        textAlign: "center"
    },
    buttonText: {
        fontFamily: fonts.poppingMedium,
        fontSize: 10,
        color: colors.white,
    },
    imgStyle: {
        width: 110,
        height: 105
    }
});
