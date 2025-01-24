"use server"

import Link from "next/link"

const  details = async({params})=> {
    const {details} = params
    console.log(details)

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${details}`)
const data = await res.json()
// console.log(data)

  return (
    <div className="">
     <h1 className="text-xl font-bold text-center mt-6 pb-4 text-blue-600 ">Post Details</h1>
     <hr />
     <div className="mb-5 w-full lg:w-1/2 mx-auto border border-black lg:h-[350px] mt-4 p-8 rounded-md shadow-transparent hover:shadow-lg">
      <h1 className="text-xl font-bold"> Title:{data.title}</h1>
      <p className="pt-2"><span className="text-xl font-bold">Details: </span>

      {data.body}</p>
     <div className="mt-36 -ml-3">
     <Link href={'/'} className="  hover:border-b-4 border border-l-indigo-300 hover:border-b-black px-4 py-2 text-blue-600 hover:text-zinc-500 rounded-lg bg-transparent bg-white">Back</Link>
     </div>
     </div>
    
    </div>
  )
}

export default details