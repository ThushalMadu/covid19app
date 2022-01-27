import { compose, lifecycle } from 'recompose';
import SplashView from './SplashView';
import { setStatusAction } from './SplashState';
import { connect } from 'react-redux';
import * as Function from './SpalshFunction';
// import SplashScreen from 'react-native-splash-screen';

export default compose(
    connect(
        state => ({
            status: state.Splash.status,
        }),
        dispatch => ({
            setStatusAction: status => dispatch(setStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            // setTimeout(() => {
            // SplashScreen.hide()
            // }, 300)
            this.props.setStatusAction(false);
            Function.setTimeOutFunction(this.props);

        },
    }),
)(SplashView);