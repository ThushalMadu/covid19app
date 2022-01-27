import { compose, lifecycle } from 'recompose';
import HomeView from './HomeView';
import { setStatusAction, setCovidDataAction, setHospitaDataAction, setSingleHospitalAction } from './HomeState';
import { connect } from 'react-redux';
import * as Function from './HomeFunction'
export default compose(
    connect(
        state => ({
            status: state.Home.status,
            covidData: state.Home.covidData,
            hospitalData: state.Home.hospitalData,
            singleHospital: state.Home.singleHospital,
        }),
        dispatch => ({
            setStatusAction: status => dispatch(setStatusAction(status)),
            setCovidDataAction: covidData => dispatch(setCovidDataAction(covidData)),
            setHospitaDataAction: hospitalData => dispatch(setHospitaDataAction(hospitalData)),
            setSingleHospitalAction: singleHospital => dispatch(setSingleHospitalAction(singleHospital)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            this.props.setStatusAction(true);
            Function.getCovid19details(this.props);
        },
    }),
)(HomeView);