import useFormInput from "../hooks/useFormInput";

const BasicForm = () => {
  const {
    handleChange: handleFirstNameChange,
    handleBlur: handleFirstNameBlur,
    inputHasError: firstNameInputHasError,
    reset: resetFirstNameInput,
  } = useFormInput((value) => value.trim() !== "");
  const {
    handleChange: handleLastNameChange,
    handleBlur: handleLastNameBlur,
    inputHasError: lastNameInputHasError,
    reset: resetLastNameInput,
  } = useFormInput((value) => value.trim() !== "");
  const {
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    inputHasError: emailInputHasError,
    reset: resetEmailInput,
  } = useFormInput((value) => value.split("").includes("@"));

  const formHasError =
    firstNameInputHasError || lastNameInputHasError || emailInputHasError;

  const submitHandler = (event) => {
    event.preventDefault();
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const inputClass = formHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={inputClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={handleFirstNameChange}
            onBlur={handleFirstNameBlur}
          />
        </div>
        <div className={inputClass}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
          />
        </div>
      </div>
      <div className={inputClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>

      {formHasError && <p className="error-text">All fields are required!</p>}
    </form>
  );
};

export default BasicForm;
