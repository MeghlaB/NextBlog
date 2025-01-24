
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'



const page = async () => {
    const session = getKindeServerSession();
    const { isAuthenticated,user } = session;
  
    if(!(await isAuthenticated())){
      redirect('/api/auth/login')
      
    }
  
      return  (
        <div>
        <h1 className="text-3xl font-bold text-center my-5">
        Hey, {user?.given_name || 'Guest'}! Welcome to your profile!
      </h1>
    </div>
      )
    }


export default page
