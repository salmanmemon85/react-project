import React from 'react'
import login from ".././images/login.png"
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <section className='login-sec'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-12 flex justify-center items-center'>
                <div className='col-span-4'>
                    <h2>welcome to</h2>
                    <h3>SkillCompute</h3>
                    <div className='login-area'>
                    <div className='contact-btn flex items-center justify-between bg-blue '>
                      <div className="inner-text-btn ">Student</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className='contact-btn parent flex items-center justify-between'>
                      <div className="inner-text-btn ">Parent</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                    <div className='contact-btn parent flex items-center justify-between'>
                      <div className="inner-text-btn ">Institution</div>
                      <div className="arrow-icon-area">
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                 </div>
                </div>
                <div className='col-span-5'>
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
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
