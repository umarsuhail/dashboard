'use client'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const router = useRouter();

  const handleLogout=()=>{
    router.push('/login')
  }
  return (
    <div className='w-full min-h-16 flex justify-between items-center'>
        <Image src={logo} height={60} width={100} alt='logo' className='mx-2'></Image>
        <button className='bg-primary justify-center flex items-center text-secondary_bg rounded-md px-3 py-2 m-2 text-sm w-20 h-6 hustify-center' onClick={handleLogout}>Logout</button>
       
        </div>
  )
}
