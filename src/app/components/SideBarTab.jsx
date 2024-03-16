
import React from 'react'

function SideBarTab({active,selectTab,children}) {
    const ButtonClass = active ? "text-mainColor ":"text-white "
  return (
    <button onClick={selectTab} className={` ${ButtonClass} my-3 block mx-auto px-3 font-medium text-xl  hover:text-mainColor transition-colors ease-in duration-200`}>
        {children}
    </button>

  )
}

export default SideBarTab