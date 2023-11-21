export const checkFormValidation = (email, password) => {
  // if the input fields are validated and are correct, the variable will receive either true or false from the function
  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  // if (name.length < 4) return "Enter full name";
  if (!isEmailValid) return "Email Id is invalid";
  if (!isPasswordValid) return "Password is invalid";

  return null;
};
