import Link from 'next/link'
import MyHead from '../components/MyHead'

export default function Home() {
  return (
    <>
      <MyHead
        title="El-mrooj"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
      />

      <main
        className="w-full min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: 'url(https://gtmteknoloji.com/wp-content/uploads/2019/04/business-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className='text-center' style={{fontFamily:"cursive", fontSize:"21px"}}> Welcome  <br/><span className='text-indigo-600 font-semibold' style={{fontSize:"21px"}}>In El-mrooj Accounts Website</span></h1>
        <Link title='Notice the page loader' className='bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white' href="/apply">Link to a page</Link>
      </main>
    </>
  )
}

