import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupValidatio } from './SignupValidation'


const initialValues={
    name:"",
    email:"",
    password:"",
    cpassword:""
}
function RegisterPage() {
    const navigate=useNavigate()
const{values,handleChange,handleBlur,handleSubmit,errors}=useFormik({
    initialValues:initialValues,
    validationSchema:SignupValidatio,
    onSubmit:(values)=>{
        localStorage.setItem("user",JSON.stringify(values));
        alert("registration successfull");
        navigate('/loginpage')
    }
})
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name:</label><br/>
        <input type='text' name='name' placeholder='enter your name' 
        value={values.name} onBlur={handleBlur} onChange={handleChange}/>
        <br/> {errors.name&&<small>{errors.name}</small>}<br/>

        <label>Email</label><br/>
        <input type='email' name='email' placeholder='enter your email' 
        value={values.email} onBlur={handleBlur} onChange={handleChange}/>
        <br/> {errors.email&&<small>{errors.email}</small>}<br/>

        <label>Password:</label><br/>
        <input type='password' name='password' placeholder='enter you password' 
        value={values.password} onBlur={handleBlur} onChange={handleChange}/>
        <br/> {errors.password&&<small>{errors.password}</small>}<br/>

        <label>Confirme password:</label><br/>
        <input type='password' name='cpassword' placeholder='enter your password' 
        value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>
        <br/> {errors.cpassword&&<small>{errors.cpassword}</small>}<br/>

        <button type='submit' >submit</button>

      </form>
    </div>
  )
}

export default RegisterPage
