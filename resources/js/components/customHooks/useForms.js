import { useState } from "react";

const useForms = initialValues => {
    const [values, setValues] = useState(initialValues);
    const SetInputValues = e => {
        if (e.target.files) {
            let files = e.target.files[0];
            let name = e.target.name;
            let reader = new FileReader();
            reader.onload = e => {
                setValues({ ...values, [name]: e.target.result });
            };
            reader.readAsDataURL(files);
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
    };
    return [values, setValues, SetInputValues];
};

export default useForms;
