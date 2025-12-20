import *as yup from 'yup'


export const SignupValidatio= yup.object({
    name:yup.string().min(4).required("please enter your name"),
    email:yup.string().email("invalid email").required("please enter your email"),
    password:yup.string().min(6).matches(/[A-Za-z]/, "Password must contain at least one alphabet").required("please enter your email"),
    cpassword:yup.string().oneOf([yup.ref("password")]).required("conform your password")
  
})