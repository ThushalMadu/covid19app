import { combineReducers } from 'redux';

import CommonState from '../modules/CommonState/cmnState';
import Login from '../modules/Login/LoginState';
import Home from '../modules/Home/HomeState';
import SingleHospital from '../modules/SingleHospital/SingleHospitalState';
import Charts from '../modules/Charts/ChartsState';
import Splash from '../modules/Splash/SplashState';
import AnimateMobile from '../modules/AnimateMobile/AnimateMobileState'
export default combineReducers({
    //## Generator Reducers
    CommonState,
    Login,
    Home,
    SingleHospital,
    Charts,
    Splash,
    AnimateMobile
});
