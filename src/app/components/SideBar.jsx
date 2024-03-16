"use client"
import React, { useState, useTransition } from 'react'
import Link from 'next/link'
//   SideBarTab ==>    This function displays data in the sidebar
import SideBarTab from './SideBarTab';
//   SideBaTabData ==>  This is sidebar data
import SideBaTabData from './SideBaTabData';
//  ViewData ==>  This is the data that is displayed
import ViewData from './ViewData';
function SideBar() {
  const [openMenu, setOpenMenu] = useState(true)
  const [sideButton, serSideButton] = useState("qraan")
  const [ispending, startTransition] = useTransition()
  const handleSideButtonChange = (title) => {
    startTransition(() => {
      serSideButton(title)
    })
  }
  return (
    <section className="bg-white h-auto text-black pb-5 md:pb-0">
      {
        !openMenu ? (
          <button onClick={() => setOpenMenu(true)} className="fixed top-[50px] left-0 right-0 py-4 bg-mainColor md:hidden text-lg font-semibold text-white w-full">
            Hidden Menu
          </button>
        ) : (
          <button onClick={() => setOpenMenu(false)} className=" fixed  top-[50px] left-0 right-0 py-4 bg-mainColor md:hidden text-lg font-semibold text-white w-full">
            Show Menu
          </button>
        )
      }
      <section className='grid grid-cols-1 md:grid-cols-6 gap-4'>
        {
          openMenu ? (
            <aside className=' hidden md:block bg-bgColor fixed md:static  md:top-[50px]  text-center   pt-10  md:pt-20'>
              {
                SideBaTabData.map((ButtonDATA, key) => (
                  <SideBarTab key={key} selectTab={() => {
                    handleSideButtonChange(ButtonDATA.id)
                    setOpenMenu(false)
                  }
                  } active={sideButton === ButtonDATA.id}>
                    {ButtonDATA.title}
                  </SideBarTab>
                ))
              }
            </aside>
          ) : (
            <aside className='fixed md:static  left-0 right-0 top-[110px] md:top-[50px] z-20  bottom-0     bg-bgColor opacity-90 md:opacity-100 text-center pt-10  md:pt-20'>
              {
                SideBaTabData.map((ButtonDATA, key) => (
                  <SideBarTab key={key} selectTab={() => {
                    handleSideButtonChange(ButtonDATA.id)
                    setOpenMenu(true)
                  }
                  } active={sideButton === ButtonDATA.id}>
                    {ButtonDATA.title}
                  </SideBarTab>
                ))
              }
            </aside>
          )
        }
        <section className="md:col-span-5 w-full container p-4 pt-6 mt-[110px]  md:h-screen">
          <h2 className='text-center text-4xl shadow-lg  py-4'>
            {ViewData.find((e) => e.id === sideButton).title}
          </h2>
          <p className="text-xl mt-8 py-6  w-[80%]">
            {ViewData.find((e) => e.id === sideButton).description}
            <Link href={ViewData.find((e) => e.id === sideButton).webLink} target='_blank'
              className='text-mainColor hover:text-cyan-600  '>
              الموقع الرسمي ...
            </Link>
          </p>
          <div className='my-4'>
            <h2 className='my-6 p-6 w-fit text-lg '>وهنا مجموعة من
              <span className='text-mainColor py-2'> APIs JSON</span>  اللي بيوفرها الموقع ولاكن
              <span className="text-white bg-mainColor px-3 rounded-md mx-1" >  شوف   </span> الموقع الرسمي .. </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 pb-4">

              {
                ViewData.find((e) => e.id === sideButton).data_json.map((o, key) => (
                  <Link key={key}
                    href={o.path}
                    target='_blank'
                    className='inline-block rounded text-center bg-mainColor px-8  py-3 mx-2 my-3 text-md font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-mainColor'>
                    {o.title}
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
export default SideBar
