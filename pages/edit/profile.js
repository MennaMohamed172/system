import React ,{useContext,useEffect,useState}from 'react'
import UserContext from '../../context/userContext'
import UserHeader from '../../components/UserHeader';
// import { toast } from 'react-toastify';
import {useRouter} from 'next/router'
import axios from 'axios';
const profile = () => {
    const router=useRouter();
    const {userData,setUserData}=useContext(UserContext);
    const [facebook,setFacebook]=useState('');
    const [twitter,setTwitter]=useState('');
    const [instagram,setInstagram] =useState('');
    const [youtube,setYoutube]=useState('');
    const [linkedin,setLinkedin]=useState('');
    const [github,setGithub]=useState('');
      const [name,setName]=useState('');
      const [bio,setBio]=useState('');
      const [avatar,setAvatar]=useState('')
    const saveProfile=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/profile', {
            name: name,
            bio: bio, 
            avatar:avatar,
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    }
    const saveSocials=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/social', {
            facebook: facebook,
            instagram: instagram, 
            twitter:twitter,
            linkedin:linkedin,
            github:github,
            youtube:youtube
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    }
    
      return (
     <>
     <div>
    <UserHeader/>
    <main>
        <section>
        <div>
            <h4 className='font-bold text-center mb-5'> Edit Profile</h4>
            <div>
                <form onSubmit={saveProfile}  className='flex flex-col justify-center items-center'>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2'src='/svg/user.svg'/>
                            <input  value={name} onChange={e=>setName(e.target.value)} className='focus:outline-none w-full' type='text' placeholder='set a Name' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2'src='/svg/bio.svg'/>
                            <input value={bio} onChange={e=>setBio(e.target.value)}  className='focus:outline-none w-full' type='text' placeholder='Enter a bio' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                          <img className='w-6 mr-2'src='/svg/user.svg'/>
                            <input value={avatar} onChange={e=>setAvatar(e.target.value)}  className='focus:outline-none w-full' type='text' placeholder='Enter Image Link' required></input>
                    <img className='w-10 rounded-full border-2 border-white shadow-md' src={avatar}/>
                    {/* src==================https://soumyamondal.com/soumya2.jpg */}
                    </span>
                   <input className='bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white' type='submit' value="save profile" ></input>
 </form>
            </div>
        </div>

        <div className='mt-14'>
            <h4 className='font-bold text-center mb-5'> Edit Socials</h4>
            <div>
                <form onSubmit={saveSocials} className='flex flex-col justify-center items-center'>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2'src='/svg/facebook.svg'/>
                            <input value={facebook} onChange={e => setFacebook(e.target.value)} className='focus:outline-none w-full' type='text' placeholder='Enter Facebook' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2'src='/svg/instagram.svg'/>
                            <input value={instagram} onChange={e => setInstagram(e.target.value)}  className='focus:outline-none w-full' type='text' placeholder='Enter Instagram' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                          <img className='w-6 mr-2'src='/svg/twitter.svg'/>
                            <input value={twitter} onChange={e => setTwitter(e.target.value)}  className='focus:outline-none w-full' type='text' placeholder='Enter Twitter' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2'src='/svg/linkedin.svg'/>
                            <input value={linkedin} onChange={e => setLinkedin(e.target.value)} className='focus:outline-none w-full' type='text' placeholder='Enter Linkedin' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2'src='/svg/github.svg'/>
                            <input value={github} onChange={e => setGithub(e.target.value)} className='focus:outline-none w-full' type='text' placeholder='Enter Github' required></input>
                    </span>
                    <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                          <img className='w-6 mr-2'src='/svg/youtube.svg'/>
                            <input value={youtube} onChange={e => setYoutube(e.target.value)}  className='focus:outline-none w-full' type='text' placeholder='Enter Youtube' required></input>
                    </span>
                   <input className='bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer mb-10 text-white btn'  type='submit' value="save Socails" ></input>
 </form>
            </div>

        </div>
        </section>
    </main>
        </div>
     </>
    )
}

export default profile