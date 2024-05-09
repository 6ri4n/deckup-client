function StrongPassword(passwordRef, strongPassError, setStrongPassError) {
  const password = passwordRef.current.value;
  const minLength = 6;
  const minLowercase = 1;
  const minUppercase = 1;
  const minNumbers = 1;
  const minSymbols = 1;

  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numbersRegex = /[0-9]/;
  const symbolsRegex = /[!@#$%&]/;

  // to reset error state
  setStrongPassError(false);

  if (password.length < minLength) {
    setStrongPassError(true);
    return;
  }

  if ((password.match(lowercaseRegex) || []).length < minLowercase) {
    setStrongPassError(true);
    return;
  }

  if ((password.match(uppercaseRegex) || []).length < minUppercase) {
    setStrongPassError(true);
    return;
  }

  if ((password.match(numbersRegex) || []).length < minNumbers) {
    setStrongPassError(true);
    return;
  }

  if ((password.match(symbolsRegex) || []).length < minSymbols) {
    setStrongPassError(true);
    return;
  }

  setStrongPassError(false);
}

export default StrongPassword;
