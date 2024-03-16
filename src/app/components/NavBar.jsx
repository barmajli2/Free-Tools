import React from 'react'
import Link from 'next/link'
import Image from  'next/image'
function Navbar() {
    const navlinks=[
        {
            title:"APIs",
            path:"/"
        },
        {
            title:"استضافة",
            path:"host"
        },
    ]
return (
    <header className=' bg-bgColor fixed top-0 left-0 right-0 md:block z-50'>
        <nav className='flex justify-between items-center container mx-auto'>
            <Link href="/">
                <Image
                    className=''
                    src="/logo.png"
                    alt="Free Tools Logo"
                    width={50}
                    height={50}
                    priority
                />
            </Link>
            <div className=''>
                <ul className='flex '>
                    {
                        navlinks.map((link,key)=>(
                            <li key={key} className=''>
                                <Link  href={link.path} className='text-white px-3 font-medium text-xl  hover:text-mainColor transition-colors ease-in duration-200  '>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    </header>
)
}
export default Navbar
