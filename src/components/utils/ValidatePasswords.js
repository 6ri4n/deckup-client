const ValidatePasswords = (
  passwordRef,
  confirmPasswordRef,
  passwordError,
  setPasswordError
) => {
  const password = passwordRef.current.value;
  const confirmPassword = confirmPasswordRef.current.value;

  if (password !== "" && confirmPassword !== "") {
    if (password !== confirmPassword) {
      setPasswordError("Password do not match!");
    } else {
      setPasswordError("");
    }
  }
};

export default ValidatePasswords;
