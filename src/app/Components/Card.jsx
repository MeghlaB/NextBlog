"use client"

import Link from "next/link"

function Card({ id, title, description }) {
  return (
   
<div className="bg-white shadow-xl border h-[300px] border-gray-300 p-4 rounded-lg flex flex-col justify-between">
  <div>
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{description.slice(0, 100)}....</p>
  </div>
  {/* Button Section */}
  <div className="flex items-center justify-end mt-4 gap-4">
    <Link href={`/blog/${id}`} className="btn-custom">Details</Link>
    
  </div>
</div>


  )
}

export default Card
