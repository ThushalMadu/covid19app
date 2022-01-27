import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { FirstImage, NextButton, SplashAnimate } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as HomeText from '../../translations/en.json';
import * as Function from './SpalshFunction';

export default function SplashView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <SplashAnimate />
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
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    middleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
    },
    textlets: {
        fontFamily: fonts.poppingMedium,
        fontSize: 18,
        color: colors.black
    },
    textletsdes: {
        fontFamily: fonts.poppingMedium,
        fontSize: 12,
        color: colors.plcblack,
        textAlign: "center"
    },
});
