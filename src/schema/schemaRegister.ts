import * as yup from "yup";
export const schemaRegister = yup
  .object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required"),
    confirmPassword: yup.string().required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(8, "At least eight characters ")
      .max(32, "Thirty two numbers at most")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required();
