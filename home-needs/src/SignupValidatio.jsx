import *as yup from 'yup'


export const SignupValidatio = yup.object({
    name:yup.string().min(3).required("please enter you name"),
    email:yup.string().email("nvalid email").required("please enter email"),
    password:yup.string().min(8).required("please enter password"),
    confirmpassword:yup.string().oneOf([yup.ref("password")],"password not matched")
})
