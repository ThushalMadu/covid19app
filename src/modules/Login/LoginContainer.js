import { compose, lifecycle } from 'recompose';
import LoginScreen from './LoginScreen';
import { setSignInDetailAction } from './LoginState';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';

export default compose(
    connect(
        state => ({
            signinDetail: state.Login.signinDetail,
        }),
        dispatch => ({
            setSignInDetailAction: signinDetail => dispatch(setSignInDetailAction(signinDetail)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            this.props.setSignInDetailAction('');
            BackHandler.addEventListener('hardwareBackPress', () => true)

        },
    }),
)(LoginScreen);