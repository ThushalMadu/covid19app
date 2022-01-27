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

export default function RecoveredPeople(props) {
    return (
        <View style={styles.btnmain}>
            <View style={styles.topView}>
                <Image style={styles.imgStyle} source={Assets.recoverPatient} />
            </View>
            <View style={styles.middleView}>
                <Text style={styles.topText}>{HomeText.lblttlercvcase}</Text>
            </View>
            <View style={styles.buttomView}>
                <Text style={styles.buttonText}>{props.recoveredCases}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnmain: {
        height: "100%",
        width: "85%",
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.greenCovid,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.7,
        shadowRadius: 6,
        alignItems: 'center',
        elevation: 6,
        flexDirection: "row"
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
        alignItems: 'center',
    },
    buttomView: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontFamily: fonts.poppingMedium,
        fontSize: 18,
        color: colors.white,
        textAlign: "center"
    },
    buttonText: {
        fontFamily: fonts.poppingbold,
        fontSize: 20,
        color: colors.white,
    },
    imgStyle: {
        width: 110,
        height: 105
    }
});
