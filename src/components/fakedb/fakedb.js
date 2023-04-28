const setValueToLocalStorage = (value) => {
    localStorage.setItem('break-time', value);
};

const getValuesFromLocalStorage = () => {
    return localStorage.getItem('break-time');
}


export { setValueToLocalStorage, getValuesFromLocalStorage };