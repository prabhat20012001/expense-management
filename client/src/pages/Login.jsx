import React from 'react'
import {Form,Input} from 'antd'
import { Link } from 'react-router-dom'

function Login() {

    const submitHandler=(values)=>{
        console.log(values)
    }
  return (
    <>
       <div className=' register-page'>
<Form layout='vertical'onFinish={submitHandler}>
    <h1>Login Form</h1>
  
    <Form.Item label='Emmail' name="email">
        <Input type='email'/>
    </Form.Item>
    <Form.Item label='Password' name="password">
        <Input type='password'/>
    </Form.Item>
    <div className='d-flex justify-content-between'>
        <Link to="/register">Not a user? click Here to register</Link>
        <button className='btn btn-primary'>Register</button>

    </div>
</Form>
    </div>
    
    
    
    
    </>
  )
}

export default Login