export function getCovid19details(props) {
    props.setStatusAction(true);
    fetch('https://hpb.health.gov.lk/api/get-current-statistical', {
        method: 'GET',
        headers: {
            method: 'GET',
            headers: {},
        }
    })
        .then(response => response.json())
        .then(responseJson => {
            props.setStatusAction(false);
            if (responseJson.error == undefined) {
                // console.log("Output  ~ file JSON: ", responseJson);
                props.setCovidDataAction(responseJson.data);
                props.setHospitaDataAction(responseJson.data.hospital_data)
            } else {
                alert('Error tRy again');
            }
        })
        .catch(error => {
            props.setStatusAction(false);
            alert(JSON.stringify(error));
            console.log("Output  ~ file FULL ERROR: ", error)
        });
}

export function onClickSingleHospital(props, item) {
    props.setSingleHospitalAction(item);
    props.navigation.navigate('SingleHospital');
}
export function onClickLocalBar(props) {
    props.navigation.navigate('ChartsView');
}