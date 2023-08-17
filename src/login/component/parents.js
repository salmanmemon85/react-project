import React from 'react'
import login from "../../images/login.png"
import { Link } from 'react-router-dom'
export default function Parents() {
  return (
    <>
    <form className='login-form'>
                        <h4>Login</h4>
                       <div className='login-input-area mt-5  flex items-center bg-white'>
                       <div className='icon-contact-area'>
                      <i class="fa-regular fa-user"></i>
                      </div>
                            <div className='input-area'>
                            <input placeholder='Email'/>
                            </div>
                       </div>
                       <div className='login-input-area mt-4  flex items-center bg-white'>
                       <div className='icon-contact-area'>
                      <i class="fa-regular fa-user"></i>
                      </div>
                            <div className='input-area'>
                            <input placeholder='Password' />
                            </div>
                       </div>
                      <button className='login-form-btn'>Login <img src={login} alt=''/></button>
                      <div className='mt-12 flex justify-between'>
                     <Link> <button className='forget-form-btn'>Forget Password?</button></Link>
                      <button className='forget-form-btn dont-have '>Don't have account? <Link className='signup'>  Sign up </Link></button>
                      </div>
                    </form>
   </>
  )
}
