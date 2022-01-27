import React from 'react';
import { View, Platform, StyleSheet, TextInput } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
const RNSTextInput = ({
    type,
    dark,
    style,
    isSecure,
    sttype,
    KeyBoard,
    Capitalize,
    FocusKeyboard,
    placeholderTextColor,
    ...restProps
}) => {
    const textstyle = [
        sttype == 'middleclr' ? styles.mdlplcordr : sttype == 'middleclrsmall' ? styles.mdlsmallcordr : styles.textinpu,
    ];
    return (
        <View style={{
            alignSelf: 'stretch', flexDirection: 'column', alignItems: "center", justifyContent: "center"
        }}>
            <TextInput
                autoFocus={FocusKeyboard}
                secureTextEntry={isSecure}
                autoCapitalize={Capitalize}
                keyboardType={KeyBoard}
                placeholderTextColor={placeholderTextColor || colors.headercolor}
                // underlineColorAndroid={colors.placeblack}
                {...restProps}
                style={textstyle}
            />
            {Platform.OS === 'ios' && (
                <View style={{ height: 0.5, backgroundColor: colors.black }} />
            )}
            <View style={styles.containerBorder}></View>
        </View>
    );
};

const HEIGHT = 200;

const styles = StyleSheet.create({
    default: {
        height: HEIGHT,
        color: colors.darkGray,
        fontFamily: fonts.primaryRegular,
        ...Platform.select({
            android: {
                marginTop: 30,
                paddingLeft: 15,
                opacity: 2,
            },
        }),
    },
    bordered: {
        borderWidth: 0.5,
        borderColor: colors.headercolor,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    dark: {
        color: colors.white,
    },
    containerBorder: {
        borderBottomColor: colors.white,
        borderBottomWidth: 5,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    primary: {
        borderRadius: HEIGHT / 2,
        backgroundColor: 'transparent',
    },
    textinpu: {
        fontSize: 18,
        paddingLeft: 20,
        height: 41,
        alignItems: 'center',
        color: colors.white
    },
    mdlplcordr: {
        fontSize: 20,
        height: 60,
        alignItems: 'center',
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.poppingbold,
    },
    mdlsmallcordr: {
        fontSize: 14,
        height: 40,
        alignItems: 'center',
        textAlign: 'center',
        color: colors.white,

    },
});

export default RNSTextInput;
