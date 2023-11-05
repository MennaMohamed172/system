"use client"
import React, { useState, useEffect, useContext } from 'react';
import LinkBox from '../components/LinkBox';
import UserHeader from '../components/UserHeader';
import { toast } from 'react-toastify';

import UserContext from '../context/userContext';
const Dashboard = () => {
  const [data, setData] = useState({});
const {setUserData}=useContext(UserContext);
  useEffect(() => {
    // This code will run on the client side after the component mounts.
    const tokenMail = localStorage.getItem('LinkTreeToken');

    if (tokenMail) {
      fetch('http://localhost:8000/data/dashboard', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          tokenMail,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'error') return toast.error('Error happened');
          setData(data.userData);
          setUserData(data.userData); 
          localStorage.setItem('userHandle', data.userData.handle);
          toast.success(data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []); // The empty dependency array ensures this effect runs once after the initial render.
  return (
    <>
    {/* <section className='main flex justify-center'>
    <h1 className='text-white bg-gray-700 rounded-md'>Dashboard</h1>
    </section> */}
   <div className=''>
    <UserHeader/>
    {/* <span className='header'></span> */}
    <main>
<section className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
<LinkBox lbTitle="Links" lbNumber={data.links}  lbSvg="url" lbTheme="red"/>
<LinkBox lbTitle="Growth" lbNumber="30%"  lbSvg="growth" lbTheme="red"/>
<LinkBox lbTitle="Links" lbNumber="12"lbSvg="growth" lbTheme="red"/>
<LinkBox lbTitle="Growth" lbNumber="30%" lbSvg="url" lbTheme="blue"/>
</section>
<section>

</section>
    </main>
   </div>
    </>
   
  )
}
  
export default Dashboard;
