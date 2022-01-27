import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { FirstImage, NextButton } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as HomeText from '../../translations/en.json';
import * as Function from './LoginFunction';

export default function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <FirstImage />
            </View>
            <View style={styles.middleView}>
                <View style={styles.middleView1}>
                    <Text style={styles.textlets}>{HomeText.lbllets}</Text>
                    <Text style={styles.textlets}>{HomeText.lblcovid}</Text>
                </View>
                <View style={styles.middleViewmid}>
                    <Text></Text>
                </View>
                <View style={styles.middleView2}>
                    <Text style={styles.textletsdes}>{HomeText.lblmobile}</Text>
                    <Text style={styles.textletsdes}>{HomeText.lblpandemic}</Text>
                    <Text style={styles.textletsdes}>{HomeText.lblperson}</Text>
                    <Text style={styles.textletsdes}>{HomeText.lblpercon}</Text>
                </View>
            </View>
            <View style={styles.buttomView}>
                <NextButton onClick={() => Function.onNextClick(props)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    topView: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    middleView: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    middleView1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    middleView2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        width: "90%"
    },
    middleViewmid: {
        flex: 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    buttomView: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    textlets: {
        fontFamily: fonts.poppingbold,
        fontSize: 28,
        color: colors.black
    },
    textletsdes: {
        fontFamily: fonts.poppingMedium,
        fontSize: 12,
        color: colors.plcblack,
        textAlign: "center"
    },
});
