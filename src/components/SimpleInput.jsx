import useFormInput from "../hooks/useFormInput";

const SimpleInput = (props) => {
  const {
    handleChange,
    handleBlur,
    inputHasError: nameError,
    reset,
  } = useFormInput((value) => value.trim() !== "");


  let formIsValid = false;

  if (!nameError) {
    formIsValid = true;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
  };

  const nameInputClass = nameError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      {nameError && <p className="error-text">Name must be entered</p>}
    </form>
  );
};

export default SimpleInput;
