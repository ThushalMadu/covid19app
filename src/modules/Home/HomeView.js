import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { FirstImage, NextButton, LoadingKite, TopBannerNew, TopBannerDeath, LocalHospital, RecoveredPeople, AllDeathsReprt, HospitalList, HospitalName } from '../../components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as HomeText from '../../translations/en.json';
import * as Function from './HomeFunction'
export default function HomeView(props) {
    function renderItem({ item }) {
        return (
            <TouchableOpacity onPress={() => Function.onClickSingleHospital(props, item)}>
                <HospitalList item={item} />
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.textname}>{HomeText.lblname} {HomeText.lbltruename}</Text>
                <Text style={styles.textlets}>{HomeText.lblcovid}</Text>
                <Text style={styles.texttimes}>{props.covidData.update_date_time}</Text>
            </View>
            <View style={styles.middleView}>
                <ScrollView style={styles.scrView}>
                    {props.status == true ? (
                        <View style={styles.middleViewTopLoading}>
                            <LoadingKite />
                        </View>
                    ) : (
                            <View style={styles.middleViewRe}>
                                <View style={styles.middleViewTop}>
                                    <View style={styles.middleViewLeft}></View>
                                    <View style={styles.middleViewMiddle}>
                                        <View style={styles.middleViewMiddleLeft}>
                                            <TopBannerNew testCases={props.covidData.local_new_cases} />
                                        </View>
                                        <View style={styles.middleViewMiddleRight}>
                                            <TopBannerDeath testDeathCases={props.covidData.local_new_deaths} />
                                        </View>
                                    </View>
                                    <View style={styles.middleViewRight}></View>
                                </View>
                                <View style={styles.middleViewMiddleMain}>
                                    <View style={styles.middleViewMiddle}>
                                        <View style={styles.middleViewMiddleMainLeft}>
                                            <LocalHospital onClickLocal={() => Function.onClickLocalBar(props)} activeCases={props.covidData.local_active_cases} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.middleViewMiddleMain}>
                                    <View style={styles.middleViewMiddle}>
                                        <View style={styles.middleViewMiddleMainLeft}>
                                            <RecoveredPeople recoveredCases={props.covidData.local_recovered} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.middleViewMiddleMain}>
                                    <View style={styles.middleViewMiddle}>
                                        <View style={styles.middleViewMiddleMainLeft}>
                                            <AllDeathsReprt deathCases={props.covidData.local_deaths} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.middleViewMiddleMainBtm}>
                                    <View style={styles.hosiptalNameView}>
                                        <HospitalName />
                                    </View>
                                    <View style={styles.middleViewMiddle}>
                                        <View style={styles.middleViewLeft}></View>
                                        <View style={styles.middleViewMiddleMainLeft}>
                                            <FlatList
                                                data={props.hospitalData}
                                                renderItem={renderItem}
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                                keyExtractor={(item, index) => index.toString()}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                </ScrollView>
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
    scrView: {
        width: '100%',
        flex: 1,
    },

    topView: {
        flex: 1.6,
        backgroundColor: colors.white,
        width: '85%',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    middleView: {
        flex: 6,
        width: '100%',
    },
    scollerView: {
        width: '100%',
    },
    middleViewTop: {
        flex: 3,
        width: '100%',
        flexDirection: 'row',
    },
    middleViewMiddleMain: {
        marginTop: 10,
        flex: 3,
        width: '100%',
        flexDirection: 'row',
    },
    middleViewMiddleMainBtm: {
        marginTop: 10,
        flex: 3,
        width: '100%',
    },
    middleViewRe: {
        flex: 6,
        width: '100%',

    },
    middleViewTopLoading: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttomView: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    hosiptalNameView: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '125%',
    },
    textlets: {
        fontFamily: fonts.poppingbold,
        fontSize: 18,
        color: colors.black,
    },
    texttimes: {
        fontFamily: fonts.poppingRegular,
        fontSize: 12,
        color: colors.black,
    },
    textname: {
        fontFamily: fonts.holidaysignature,
        fontSize: 25,
        color: colors.black,
    },
    middleViewLeft: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleViewMiddle: {
        flex: 1,
        flexDirection: "row",
        width: '100%',

    },
    middleViewMiddleLeft: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    middleViewMiddleMainLeft: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    middleViewMiddleRight: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    middleViewRight: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
