"use client"


import { category } from "@/data"
import { useState } from "react"

type Props = {}

const Category = (props: Props) => {
    const [selectedCategory, setSelectedCategory] = useState("All")
  return (
    <div className='flex  gap-2 overflow-x-scroll hide-scrollbar w-full bg-screen'>
        {
              category.map((category,id)=>{
                return  <span key={id} className={`${selectedCategory === category ?"bg-black text-white" :"bg-gray-200" }  text-sm  py-1 px-4 rounded-lg  min-w-fit max-w-fit cursor-pointer  `} onClick={()=>setSelectedCategory(category)}>
                <p > {category}</p>
              </span>
              })
            }
    </div>
  )
}

export default Category