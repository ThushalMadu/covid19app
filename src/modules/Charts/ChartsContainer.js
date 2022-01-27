import { compose, lifecycle } from 'recompose';
import ChartsView from './ChartsView';
import { setStatusAction, setDataArrayAction } from './ChartsState';
import { connect } from 'react-redux';

export default compose(
    connect(
        state => ({
            status: state.Charts.status,
            dataArray: state.Charts.dataArray,
            covidData: state.Home.covidData,
        }),
        dispatch => ({
            setStatusAction: status => dispatch(setStatusAction(status)),
            setDataArrayAction: dataArray => dispatch(setDataArrayAction(dataArray)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            this.props.setStatusAction(false);
            console.log("Output  ered", this.props.covidData.local_recovered)

        },
    }),
)(ChartsView);