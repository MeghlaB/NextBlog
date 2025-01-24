
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'



const page = async () => {
  const session = getKindeServerSession();
  const { isAuthenticated, user } = session;

  if (!(await isAuthenticated())) {
    redirect('/api/auth/login')

  }

  return (
    <div className='bg-slate-100 border w-full lg:w-96 mx-auto mt-36 rounded-lg flex items-center justify-center'>
      <div className='px-2 lg:px-0'  >
        <h1 className="text-3xl font-bold  my-5">
          Welcome to your profile!
        </h1>
        <h2 className='text-xl mb-4'>Hey, {user?.given_name || 'Guest'}!</h2>
      </div>
    </div>

  )
}


export default page
