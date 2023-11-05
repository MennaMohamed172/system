"use client"
import React, { useEffect, useState } from 'react'
import{useRouter} from 'next/router';
import LinkTree from '@/components/LinkTree';
import { toast } from 'react-toastify';
import SocialTree from '../components/SocialTree'
import ShareButton from '@/components/ShareButton';
const Handel = () => {
    const router =useRouter(); 
    const [data,setData]=useState({});
    const [userFound, setUserFound]=useState(false);
  const [social,setSocial]=useState({
    facebook:'',
    twitter:'',
    instegram:'',
    youtube:'',
    linkedin:'',
    github:''
  })
    useEffect(()=>{
if(router.query?.handel){
fetch(`http://localhost:8000/get/${router.query.handel}`)
.then(res=>res.json())
.then(data=>{
    if(data.staus ==='error') return toast.error(data.error)
    if(data.staus ==='sucess'){
        setData(data.userData);
       setSocial(data.socials);

        setUserFound(true);
    }
}).catch (err=>{
console.log(err);
})
}
    },[router.query])

// useEffect(()=>{
//     if(router.query?.handel){
//         fetch(`http://localhost:8000/get/socials/${router.query.handel}`)
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.staus ==='error') return toast.error(data.error)
//             if(data.staus ==='sucess'){
//                 setSocial(data.socials)
//             }
//         }).catch (err=>{
//         console.log(err);
//         })
//         }

// }, [router.query])
if(!userFound){
    return(
        <div className='flex justify-center items-center h-screen '>
           <div className='not-found px-3'>
            <h1 className='font-bold text-lg' > User Not Found🙁</h1>
         {/* <br/> */}

         <p> If you're looking for a page, double check the spelling.</p>
       Create your own  <Link className="bg-indigo-600 px-2 ml-2 text-white hover:bg-indigo-400 translation-all duration-500" href='/apply'> LinkTree</Link>
           </div>
            </div>
    )
}
  return (
    <div>
        <ShareButton/>
        <LinkTree data={data}/>
        <SocialTree social={social}/>
    </div>
  )

}

export default Handel

