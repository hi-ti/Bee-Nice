import React from "react"
import "./login.css"

export const Login = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src="https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' />
          </div>

          <form>
            <span>Username or email address *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <button className='button'>Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}
