import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function LoginPage() {
  const navigate=useNavigate()
  const formik=useFormik({
    initialValues:{email:"",password:""},
    onSubmit:(values) => {
      const user=JSON.parse(localStorage.getItem("user"))
     if(!user){
      alert("please register first")
      return;
     }
     if(
      values.email===user.email &&
      values.password===user.password
     ){
      alert("login successful")
     }
      else {
        alert("Invalid credentials");
    }
  }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

      <label>Email</label><br/>
      <input type='email' name='email' placeholder='enter your email'
      value={formik.values.email} onChange={formik.handleChange} />
      <br/><br/>

      <label>Password</label><br/>
      <input type="password" name="password" placeholder="enter your Password"
      value={formik.values.password} onChange={formik.handleChange}/>
      <br/><br/>

      <button type="submit">Login</button>

      </form>
    </div>
  )
}

export default LoginPage
