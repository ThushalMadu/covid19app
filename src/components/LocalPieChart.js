import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import * as Assets from '../../assets/utils/Assests'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export default function LocalPieChart(props) {
    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={20}
                    fontFamily={fonts.poppingMedium}
                >
                    {data.amount}
                </Text>
            )
        })
    }
    return (
        <View >
            <PieChart
                style={{ height: "100%" }}
                valueAccessor={({ item }) => item.amount}
                data={props.dataTrue}
                spacing={0}
                outerRadius={'75%'}
                innerRadius={'30%'}
                animate={true}
            >
                <Labels />
            </PieChart>
        </View>
    );
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 400,
        height: 400
    }
});
