import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
    .string("Enter your Name")
    .min(3, "Name must be at least 3 characters")
    .matches(/^[^\s].+[^\s]$/, " Please Remove Whitespace ")
    .matches(/^[a-zA-Z\s]*$/, "Enter valid Name")
    .required("Name is required")
    .max(100),
  email: yup
    .string("Enter your email")
    .email("Enter valid email")
    .test('email', 'Invalid email format', (value) => {
      if (!value) {
        return false; // The value is empty, so it's considered invalid
      }
      // Use your regular expression for email validation
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    })
    .max(100)
    .required("Email is required"),
  phone: yup
    .string("Enter your phone")
    .min(10, "Phone number should be 10 digit")
    .matches(/^[6-9][0-9]*$/, "Enter valid mobile number")
    .required("Phone Number is required"),

  location: yup
    .string("Enter your location")
    .required("Location is required"),
});