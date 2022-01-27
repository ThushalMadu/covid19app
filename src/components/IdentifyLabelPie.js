import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import * as HomeText from '../translations/en.json';


export default function IdentifyLabelPie(props) {
    return (
        <View style={styles.topContainer}>
            <View style={styles.topContainerLeft}>
                {props.colorss == 1 ? (<View style={styles.rondYBall} />) : (<View style={styles.rondGBall} />)}
            </View>
            <View style={styles.topContainerRight}>
                <Text style={styles.buttonText}>{props.nameLabel}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContainerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rondYBall: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.yellowCovid
    },
    rondGBall: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.greenCovid
    },
    buttonText: {
        fontFamily: fonts.poppingRegular,
        fontSize: 15,
        color: colors.black,
    },
});
