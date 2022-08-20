import * as yup from "yup";

export const signupFormSchema = yup.object().shape({
    firstName: yup.string().min(6, 'Must not be less than 6 characters').max(15, 'Must be 15 characters or less').required("Please enter your name"),
    phone: yup.number().positive().integer().required("Please enter your phone number"),
    email: yup.string().email("Required").required("Please enter a valid email"),
    confirmEmail: yup.string().oneOf([yup.ref("email"), null], "Emails must match").required("Emails must match"),
    select: yup.string().required("Please choose one"),
    textarea: yup.string().required("Please write a message"),
})