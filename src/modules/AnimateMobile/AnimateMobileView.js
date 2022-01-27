import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    Image,
    Animated,
    Dimensions,
    PanResponder,
    ImageBackground
} from 'react-native';
import { TextInput, NextButton, SplashAnimate, SliderImage } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as HomeText from '../../translations/en.json';
import * as Function from './AnimateMobileFunction';

export default function AnimateMobileView(props) {

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width
    const [positionNew, setPositionNew] = useState(new Animated.ValueXY());
    const [currentIndexNew, setCurrentIndexNew] = useState(0);
    this.PanResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
            positionNew.setValue({ x: gestureState.dx, y: gestureState.dy });
        },

        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > 120) {
                Animated.spring(positionNew, {
                    toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                }).start(() => {
                    setCurrentIndexNew(currentIndexNew + 1);
                    positionNew.setValue({ x: 0, y: 0 })
                    console.log("Output  Rotate 120")

                })
            } else if (gestureState.dx < -120) {
                Animated.spring(positionNew, {
                    toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                }).start(() => {
                    setCurrentIndexNew(currentIndexNew + 1);
                    positionNew.setValue({ x: 0, y: 0 })
                    console.log("Output  Rotate -120")

                })
            }
            else {
                Animated.spring(positionNew, {
                    toValue: { x: 0, y: 0 },
                    friction: 4
                }).start()
            }
        }
    })

    const Foods = [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
        { id: "10" },
        { id: "11" },
        { id: "12" },
        { id: "13" },
        { id: "14" },
    ]

    this.rotate = positionNew.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
        extrapolate: 'clamp'
    })
    this.rotateAndTranslate = {
        transform: [{
            rotate: this.rotate
        },
        ...positionNew.getTranslateTransform()
        ]
    }
    this.likeOpacity = positionNew.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
    })
    this.nopeOpacity = positionNew.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
    })
    this.nextCardOpacity = positionNew.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp'
    })
    this.nextCardScale = positionNew.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: 'clamp'
    })

    return Foods.map((item, i) => {
        if (i < currentIndexNew) {
            return null;
        } else if (i == currentIndexNew) {
            return (
                <Animated.View
                    {...this.PanResponder.panHandlers}
                    // key={i}
                    style={[
                        this.rotateAndTranslate,
                        {
                            marginTop: 50,
                            height: SCREEN_HEIGHT - 300,
                            width: SCREEN_WIDTH,
                            position: "absolute",
                            justifyContent: 'center',
                            alignItems: "center",
                        }
                    ]}
                >
                    <View
                        style={{
                            height: 500,
                            width: 400,
                            resizeMode: "cover",
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: colors.backBlue,
                            borderRadius: 50
                        }}
                    >
                        <TextInput
                            placeholder={HomeText.lblactibity}
                            isSecure={false}
                            KeyBoard={'email-address'}
                            Capitalize="sentences"
                            sttype={"middleclr"}
                        />
                    </View>
                </Animated.View>
            );
        } else {
            return (
                <Animated.View
                    key={item.id} style={[{
                        opacity: this.nextCardOpacity,
                        transform: [{ scale: this.nextCardScale }],
                        height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
                    }]
                    }>
                    <View
                        style={{
                            flex: 1,
                            height: null,
                            width: null,
                            resizeMode: "cover",
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: "center",
                        }}
                    >
                        <TextInput
                            placeholder={HomeText.lblactibity}
                            isSecure={false}
                            KeyBoard={'email-address'}
                            Capitalize="sentences"
                            sttype={"middleclr"}
                        />
                    </View>
                </Animated.View>
            );
        }
    }).reverse();
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F7FA"
    },
    containerUp: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    containerDown: {
        flex: 0.7,
        alignItems: "center",
        justifyContent: "center",
    },
    containerDown1: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    animationRound: {
        width: 300,
        height: 110,
        // backgroundColor: colors.redd,
        borderRadius: 20
    },
    animationRoundText: {
        fontFamily: fonts.poppingbold,
        fontSize: 25,
        color: "#F5F7FA",
        textAlign: "center"
    },
    textlets: {
        fontFamily: fonts.poppingbold,
        fontSize: 50,
        color: colors.white,
    },
});
