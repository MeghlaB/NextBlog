
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'




const page = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log('user data', user)
  
  
      return  (
        <div>
          <h1 className="text-3xl font-bold text-center my-5">
        <span className='text-blue-600'> {user?.given_name} </span> , Welcome to Your Profile
          </h1>
        </div>
      )
    };


export default page
