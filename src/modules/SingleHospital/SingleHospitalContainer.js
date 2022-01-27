import { compose, lifecycle } from 'recompose';
import SingleHospitalView from './SingleHospitalView';
import { setStatusAction } from './SingleHospitalState';
import { connect } from 'react-redux';

export default compose(
    connect(
        state => ({
            status: state.SingleHospital.status,
            singleHospital: state.Home.singleHospital,
        }),
        dispatch => ({
            setStatusAction: status => dispatch(setStatusAction(status)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            this.props.setStatusAction(false);
        },
    }),
)(SingleHospitalView);