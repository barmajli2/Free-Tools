"use client"
import React , {useState , useTransition} from 'react'
import Link from 'next/link' 
// بتاخد بينات ال لtab في الشريط الجانبى 
import SideBarTab from './SideBarTab';
// بجيب منة بينات اللي في الجانب
import SideBaTabData from './SideBaTabData';
import ViewData from './ViewData';
function SideBar() {
  const [sideButton,serSideButton] = useState("qraan")
  const [ispending,startTransition] = useTransition()
  const handleSideButtonChange= (title)=>{
    startTransition(()=>{
      serSideButton(title)
    })
  }
  return (
    <section className='grid grid-cols-6 gap-4 bg-gray-50'>
      <aside className='hidden md:block bg-bgColor text-center  pt-20'>
        {
          SideBaTabData.map((ButtonDATA,key)=>(
            <SideBarTab key={key} selectTab={()=>handleSideButtonChange(ButtonDATA.id)} active={sideButton === ButtonDATA.id }>
          {ButtonDATA.title}
        </SideBarTab>
          ))
        }
      </aside>
      
      <section className="col-span-5 w-full container p-4 pt-6 h-screen">
        <h2 className='text-center text-4xl shadow-lg  py-4'>
          {ViewData.find((e)=> e.id ===sideButton).title}
        </h2>
        <p className="text-xl mt-8 py-6  w-[80%]">
          {ViewData.find((e)=> e.id ===sideButton).description}
          <Link href={ViewData.find((e)=> e.id ===sideButton).webLink} target='_blank' 
          className='text-mainColor hover:text-cyan-600  '>
            الموقع الرسمي ...
          </Link>
        </p>
        <div className='my-4'>
          <h2 className='my-6 p-6 w-fit text-lg '>وهنا مجموعة من  
          <span className='text-mainColor py-2'> APIs JSON</span>  اللي بيوفرها الموقع ولاكن  
          <span className="text-white bg-mainColor px-3 rounded-md mx-1" >  شوف   </span> الموقع الرسمي .. </h2>
          {
              ViewData.find((e)=> e.id === sideButton).data_json.map((o,key)=>(
                <Link key={key} 
                href={o.path} 
                target='_blank' 
                className='inline-block rounded bg-mainColor px-8 py-3 mx-2 my-3 text-md font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-mainColor'>
                  {o.title}
                  </Link>
            ))
          }
          
        </div>
      </section>
    </section>
  )
}
export default SideBar