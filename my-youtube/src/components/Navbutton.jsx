import React, { useState } from 'react'

const ButtonGroup = ["All","javaScript","java","paython","movie","php","cartoon","song","shorts","digital marketing","blog","holy-special","tailor","cricket", "comedy","dharavalik","salar", "ruby","nextjs",]

const Navbutton = () => {

  const [active,setActive]=useState("All");
  const videoBybtn = (btn)=>{
    if (active !=btn){
      setActive(btn);
    }
   
  }

  return (
   <>
    <div className='m-2 mb-7 flex w-full overflow-x-scroll no-scrollbar'>
    
        {
            ButtonGroup.map((item,index)=>{
                return(
                 <>
                 <div key={index} >

                 <button onClick={()=>{videoBybtn(item)}} className={`${active == item ?"bg-gray-900 text-white":""} mx-1  font-semibold text-sm bg-gray-100 px-3 py-1.5 rounded-md`}><span className='whitespace-nowrap' >{item}</span></button>
                 </div>
                 </>
             
                )
            })
        }
    
    </div>
    </>
  )
}

export default Navbutton
