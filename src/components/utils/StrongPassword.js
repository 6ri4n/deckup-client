function StrongPassword(passwordRef, StrongPassError, setStrongPassError) {
  const password = passwordRef.current.value;
  const minLength = 6;
  const minLowercase = 1;
  const minUppercase = 1;
  const minNumbers = 1;
  const minSymbols = 1;
  const symbols = "/[!@#$%^&*()_+-=[]{};':|/,./</?]/";

  if (password.length < minLength) {
    setStrongPassError(true);
  }
}

export default StrongPassword;
