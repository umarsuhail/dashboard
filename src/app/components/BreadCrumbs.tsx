'use client'
import { usePathname } from 'next/navigation'

export default function BreadCrumbs() {
    const paths = usePathname();
    const pathNames = paths.split('/').filter( path => path );

  return (
    <div className='flex md:max-w-xs items-center  rounded p-2 text-gray-700 shadow-md'>
      {pathNames.map( (link, index) => {
        return (
          <a key={index} href="" className='text-xs italic font-light '> <span className='mx-1'>/</span> {link}</a>
        )
      })}
    </div>
  )
}
