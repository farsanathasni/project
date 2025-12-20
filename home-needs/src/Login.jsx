import React from 'react'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import { SignupValidation } from './SignupValidation'
const initialValues={
    name:'',
    email:'',
    password:'',
    confirmpassword: ''
}
function egistration() {
   const {values,handleChange,handleSubmit,handleBlur,errors}= useFormik({
        initialValues: initialValues,
        validationSchema:SignupValidation,
        onSubmit:(values)=>{
localStorage.setItem("user", JSON.stringify(values));
      alert("Registration Successful!");         
         navigate("/cookware")  
        }
    })
    const navigate =useNavigate()
    
  return (
    <div>
      <h1>Registration...</h1>
      <form onSubmit={handleSubmit}  autoComplete="off">
       
        <label>Name</label><br/>
        <input type='text' name='name' placeholder='Enter your name'
         value={values.name} onBlur={handleBlur} onChange={handleChange} />
        <br/>   {errors.name&&<small>{errors.name}</small>}
        <br/>
        <br/>

         <label>Email</label><br/>
        <input type='email' name='email' placeholder='Enter your email'
        value={values.email} onBlur={handleBlur} onChange={handleChange}  />
        <br/>{errors.email&&<small>{errors.email}</small>}
        <br/>
        <br/>
         <label>Password</label><br/>     
        <input type='password' name='password' placeholder='Enter your password' 
        value={values.password} onBlur={handleBlur} onChange={handleChange}/>
        <br/>{errors.password&&<small>{errors.password}</small>}
        <br/>
        <br/>
        <label>Confirm Password</label><br/>     
        <input type='password' name='confirmpassword' placeholder='Enter your password'
        value={values.confirmpassword} onBlur={handleBlur} onChange={handleChange}  />
         <br/>{errors.confirmpassword&&<small>{errors.confirmpassword}</small>}
         <br/>
         <br/>
        <button type='submit' >submit</button>

      </form>
      
    </div>
  )
}

export default egistration
