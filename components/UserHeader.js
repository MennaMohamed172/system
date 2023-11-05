import React ,{useContext,useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import UserContext from '../context/userContext';
import { toast } from 'react-toastify';
const UserHeader = () => {
  // const {name,role,avater,handel,links}=data;
  const router=useRouter();

  const handleLogout = () => {
    // Perform any necessary cleanup or API requests for logout here.
    // For this example, we will just clear a token in local storage.
    localStorage.removeItem('authToken');
    
    // Redirect the user to the login page or any other desired page.
    // You can use React Router for navigation.
    window.location.href = '/login'; // Replace with your login page URL.
  };
  const {setUserData,userData}=useContext(UserContext);
  const {role,avater,handel}=userData;

  // useEffect(() => {
  //   // This code will run on the client side after the component mounts.
  //   const tokenMail = localStorage.getItem('LinkTreeToken');

  //   if (tokenMail) {
  //     fetch('http://localhost:8000/data/dashboard', {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         tokenMail,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status === 'error') return toast.error('Error happened');
  //         setUserData(data.userData); 
  //         localStorage.setItem('userHandle', data.userData.handle);
  //         toast.success(data.message);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);


  return (
    <>
    <header className='flex flex-row justify-between items-center  '>
        <div className='flex flex-col md:flex-row p-5'>
<Link href='/edit/links'>
<button className='inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500 md:mb-7 ml-3'>
<img src='/svg/url.svg/' className="w-6"/>
Edit Links
</button>
</Link>
<Link href='/edit/profile'>
<button className='inline-flex w-full md:w-auto px-4 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-red-500 md:mb-7 ml-3'>
<img src='/svg/user.svg/' className="w-6"/>
Edit profile
</button>
</Link>
        </div>
        <div className='flex flex-row' style={{marginBottom:"90px", marginRight:"20px"}}>
     <Link href={`http://localhost:3000/${handel}`}>

                         <img className='w-6 cursor-pointer' style={{marginRight:"10px", float:"left"}} src='/svg/notify.svg'/>
                         <img className='w-6 mr-5 cursor-pointer inline-block' src='/svg/logout.svg' onClick={handleLogout}/>
            
     </Link>
        </div>
        </header>
        </>
  )
}

export default UserHeader