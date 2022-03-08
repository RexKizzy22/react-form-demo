import { useState } from "react";

const useFormInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isBeenActive, setIsBeenActive] = useState(false);

    const enteredValueIsValid = validate(enteredValue);
    const inputHasError = !enteredValueIsValid && isBeenActive;

    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    };
    
    const handleBlur = () => {
        setIsBeenActive(true);
    };

    const reset = () => {
        setIsBeenActive(true);
    }


    return { handleChange, handleBlur, inputHasError, reset };
};

export default useFormInput;