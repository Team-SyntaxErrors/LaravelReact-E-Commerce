// CLear the object state value.
const ClearForm = initialValues => {
    Object.keys(initialValues).forEach(function(key) {
        initialValues[key] = "";
    });

    return initialValues;
};

export default ClearForm;
