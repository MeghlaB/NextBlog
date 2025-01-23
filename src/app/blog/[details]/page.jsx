"use server"
const  details = async({params})=> {
    const {details} = params
    console.log(details)

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${details}`)
const data = await res.json()
// console.log(data)

  return (
    <div className="">
     <h1 className="text-xl font-bold text-center mt-6 pb-4">Post Details</h1>
     <hr />
     <div className="w-1/2 mx-auto border h-[350px] mt-4 p-8 ">
      <h1 className="text-xl font-bold"> Title:{data.title}</h1>
      <p className="pt-2"><span className="text-xl font-bold">Details: </span>

      {data.body}</p>

     </div>
    </div>
  )
}

export default details