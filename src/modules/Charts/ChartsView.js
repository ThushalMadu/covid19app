import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';
import { BackHeader, HospitalGif, LocalPieChart, IdentifyLabelPie } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as HomeText from '../../translations/en.json';
import * as Function from './ChartsFunction';
import * as Assets from '../../../assets/utils/Assests';

export default function ChartsView(props) {
    const data = [
        {
            key: 1,
            amount: props.covidData.local_recovered,
            svg: { fill: '#22BD91' },
            // arc: { outerRadius: '130%', cornerRadius: 10, }
        },

        {
            key: 3,
            amount: props.covidData.local_active_cases,
            svg: { fill: '#FDD367' },
            arc: { outerRadius: '130%', cornerRadius: 10, }
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <BackHeader onClick={() => Function.onBackClick(props)} hospitalName={HomeText.lblbrakdown} />
            </View>
            <View style={styles.middleCon}>
                <LocalPieChart dataTrue={data} />
            </View>
            <ImageBackground imageStyle={styles.imgStyle} source={Assets.epidemic} style={styles.buttonContainer}>
                <View style={styles.buttomCon}>
                    <View style={styles.leftCorner} />
                    <View style={styles.buttomConLeft}>
                        <IdentifyLabelPie colorss={1} nameLabel={HomeText.lblactive} />
                    </View>
                    <View style={styles.buttomConRight}>
                        <IdentifyLabelPie nameLabel={HomeText.lblrecver} />
                    </View>
                    <View style={styles.rightCorner} />
                </View>
                <View style={styles.AllDetails}>
                    <Text style={styles.recoverDetails}>{HomeText.lblttlcases}{props.covidData.local_total_cases}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white

    },
    topContainer: {
        flex: 0.8,
        backgroundColor: colors.white

    },

    AllDetails: {
        flex: 1,

    },
    imgStyle: {
        width: "100%",
        height: "100%",
        opacity: 0.2

    },
    buttonContainer: {
        flex: 2,
    },
    topHead: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleCon: {
        flex: 2.5,

    },
    buttomCon: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttomConLeft: {
        flex: 1,

    },
    buttomConRight: {
        flex: 1,

    },
    leftCorner: {
        flex: 0.2,

    },
    rightCorner: {
        flex: 0.2,

    },
    textHospitalDetails: {
        fontFamily: fonts.poppingbold,
        fontSize: 25,
        color: colors.black,
        textAlign: "center"
    },
    recoverDetails: {
        fontFamily: fonts.poppingbold,
        fontSize: 20,
        color: colors.covidpuruple,
        textAlign: "center"
    },
});
