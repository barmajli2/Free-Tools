
import React from 'react'
import Link from 'next/link'
import Image from  'next/image'

function page() {


  const HostData =[
    {
      title:`Netlify`,
      link :` https://app.netlify.com/ `,
      img:`/netlify.png`,
      alt:`Netlify logo`,
    },
    {
      title:`Git Hub`,
      link :` https://github.com/ `,
      img:`/github.png`,
      alt:`github logo`,
    },
    {
      title:`Vrecel`,
      link :` https://vercel.com/ `,
      img:`/vercel.png`,
      alt:`Vrecel logo`,
    },
    {
      title:`Tiiny`,
      link :` https://tiiny.host/manage `,
      img:`/tiiny.png`,
      alt:`Tiiny logo`,
    },


  ]
  return (
    <section className="container mx-auto mt-16 ">
      <h1 className='text-center py-3 mb-3 text-3xl '> الاستضافات المجانية  </h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-[80%] mx-auto  text-center '>
      {
        HostData.map((item,key)=>(
          <div key={key} className=' p-4 flex justify-between flex-col   shadow-xl hover:shadow-teal-400 cursor-progress' >
    <Image
              className="relative self-center  mb-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={item.img}
              alt={item.alt}
              width={200}
              height={200}
              priority
            />
            <Link href={item.link} target='_blank' className='text-lg w-full block my-3 p-2 mt-auto bg-mainColor text-white hover:bg-teal-300' >{item.title}</Link>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default page
