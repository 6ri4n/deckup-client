const ValidateForm = (
  passwordRef,
  confirmPasswordRef,
  passwordError,
  setPasswordError,
  usernameRef,
  usernameError,
  setUsernameError
) => {
  const password = passwordRef.current.value;
  const confirmPassword = confirmPasswordRef.current.value;
  const username = usernameRef.current.value;

  const usernameErrorMessage =
    username.length < 4 ? "Username must be greater than 4 characters!" : "";
  setUsernameError(usernameErrorMessage);

  if (password !== "" && confirmPassword !== "") {
    if (password !== confirmPassword) {
      setPasswordError("Password do not match!");
    } else {
      setPasswordError("");
    }
  }
};

export default ValidateForm;
