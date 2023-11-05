import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
// import { toast } from 'react-toastify';
import Link from 'next/link';
import axios from "axios";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const Apply = () => {
  const router = useRouter();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handelLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      Email: Email, // Use the state variable Email
      Password: Password, // Use the state variable Password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Unable to login');
      });
  }

  return (
    <>
      <section  className={styles.background + " min-h-screen flex justify-center items-center"}>
        <img src='https://img.freepik.com/free-photo/modern-office-desk-composition-with-technological-device_23-2147915809.jpg' style={{width:"100%", position:"absolute", height:"600px"}}/>
        <div className='main' style={{ marginBottom: "150px" }}>
          <div className='content border-2 px-4 py-8 rounded-2xl shadow-lg'>
            <h1 className='text-2 xl font-bold text-center'>
              Join the top 1% creators
            </h1>
            <p className='text-center '> Create a link for your brand</p>
            <p className='text-center py-2 font-bold-text-gray-500 '> Start building your Hub </p>
            <form onSubmit={handelLogin} className='flex flex-col gap-4 text-lg mt-1'>
              <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <svg className="w-4 h-4 mr-2 mt-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
                <input value={Email} onChange={e => setEmail(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' type='email' placeholder='Enter your email' required></input>
              </span>
              <input value={Password} onChange={e => setPassword(e.target.value)} className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none m' type='password' placeholder='Set a Password' required></input>
              <input className='bg-blue-600 text-white py-2 rounded-lg cursor-pointer' type='submit' value="Login" />
            </form>
            <h3 className='text-center text-white pt-3'>New Here?
              <Link className='font-bold text-red-400' href='/apply'>Apply</Link>
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply;
