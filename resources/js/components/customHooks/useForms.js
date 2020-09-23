import { useState } from "react";

const useForms = initialValues => {
    const [values, setValues] = useState(initialValues);
    return [
        values,
        e => {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
    ];
};

export default useForms;
