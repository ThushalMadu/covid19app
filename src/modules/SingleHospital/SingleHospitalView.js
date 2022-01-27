import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { BackHeader, HospitalGif } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as HomeText from '../../translations/en.json';
import * as Function from './SingleHospitalFunction';

export default function SingleHospitalView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <BackHeader onClick={() => Function.onBackClick(props)} hospitalName={props.singleHospital.hospital.name} />
            </View>
            <View style={styles.topMiddle}>
                <HospitalGif />
            </View>
            <View style={styles.MiddleNameView}>
                <Text style={styles.textHospitalDetails}>{HomeText.lblallhospitadetails}</Text>
            </View>
            <View style={styles.ButtonConatiner}>
                <View style={styles.ButtonConatinerMain}>
                    <View style={styles.ButtonConatinerleft}>
                        <Text style={styles.textHospitalName}>{HomeText.lblhospitalname}</Text>
                    </View>
                    <View style={styles.ButtonConatinerRight}>
                        <Text style={styles.textHospitalName}>{props.singleHospital.hospital.name_si}</Text>
                    </View>
                </View>
                <View style={styles.ButtonConatinerMain}>
                    <View style={styles.ButtonConatinerleft}>
                        <Text style={styles.textLocalPatients}>{HomeText.lbllocalpatients}</Text>
                    </View>
                    <View style={styles.ButtonConatinerRight}>
                        <Text style={styles.textLocalPatients}>{props.singleHospital.cumulative_local}</Text>
                    </View>
                </View>
                <View style={styles.ButtonConatinerMain}>
                    <View style={styles.ButtonConatinerleft}>
                        <Text style={styles.textForeignPatients}>{HomeText.lblforeignpatiets}</Text>
                    </View>
                    <View style={styles.ButtonConatinerRight}>
                        <Text style={styles.textForeignPatients}>{props.singleHospital.cumulative_foreign}</Text>
                    </View>
                </View>
                <View style={styles.ButtonConatinerMain}>
                    <View style={styles.ButtonConatinerleft}>
                        <Text style={styles.textTreatmentTotal}>{HomeText.lblttltreat}</Text>
                    </View>
                    <View style={styles.ButtonConatinerRight}>
                        <Text style={styles.textTreatmentTotal}>{props.singleHospital.treatment_total}</Text>
                    </View>
                </View>
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
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    MiddleNameView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topMiddle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonConatiner: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonConatinerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
    ButtonConatinerleft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonConatinerRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHospitalName: {
        fontFamily: fonts.poppingMedium,
        fontSize: 14,
        color: colors.black,
        textAlign: "center"
    },
    textLocalPatients: {
        fontFamily: fonts.poppingMedium,
        fontSize: 14,
        color: colors.black,
        textAlign: "center"
    },
    textForeignPatients: {
        fontFamily: fonts.poppingMedium,
        fontSize: 14,
        color: colors.black,
        textAlign: "center"
    },
    textTreatmentTotal: {
        fontFamily: fonts.poppingMedium,
        fontSize: 14,
        color: colors.black,
        textAlign: "center"
    },
    textHospitalDetails: {
        fontFamily: fonts.poppingbold,
        fontSize: 18,
        color: colors.black,
        textAlign: "center"
    },
});
