const notTextControls = [
    '*',
    'fonttbl',
    'colortbl',
    'datastore',
    'themedata',
    'stylesheet',
    'info',
    'picw',
    'pich'
];

export default (stackData) => {
    if (!stackData) {
        return false;
    }

    const found = notTextControls.some((word) => stackData[word]);
    return !found;
};