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

export default function NextButton(props) {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.btnmain}>
            <View style={styles.btnmainleftcorner}>

            </View>
            <View style={styles.btnmainleft}>
                <Text style={styles.getText}>{HomeText.btngetstart}</Text>
            </View>
            <View style={styles.btnmainRight}>
                <NextImage />
            </View>
            <View style={styles.btnmainRightcorner}>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnmain: {
        flex: 0.5,
        flexDirection: "row",
        height: "3%",
        width: "75%",
        borderRadius: 34,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.backBlue
    },
    btnmainleft: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    btnmainRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnmainleftcorner: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnmainRightcorner: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getText: {
        fontFamily: fonts.poppingbold,
        fontSize: 16,
        color: colors.backBlue,
        textAlign: 'center',
    },
});
