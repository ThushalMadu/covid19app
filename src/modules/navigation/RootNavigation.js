import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login/LoginContainer';
import Home from '../Home/HomeContainer';
import SingleHospital from '../SingleHospital/SingleHospitalContainer';
import ChartsView from '../Charts/ChartsContainer';
import Splash from '../Splash/SplashContainer';
import AnimateMobile from '../AnimateMobile/AnimateMobileContainer';

const Stack = createStackNavigator();

class RootNavigation extends Component {
    render() {
        return <StackNav />;
    }
}
export default RootNavigation;

class StackNav extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="AnimateMobile"
                        component={AnimateMobile}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ChartsView"
                        component={ChartsView}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SingleHospital"
                        component={SingleHospital}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />


                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
































// const stackNavigator = createStackNavigator(
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="Login"
//                 component={Login}
//                 options={{ headerShown: false }}
//             />
//         </Stack.Navigator>
//     </NavigationContainer>
// )
// export default createAppContainer(stackNavigator);
