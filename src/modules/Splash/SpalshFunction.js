export function setTimeOutFunction(props) {
    setTimeout(() => {
        retrieveData(props);
    }, 2500);
}

export function retrieveData(props) {
    props.navigation.navigate('Login');
}