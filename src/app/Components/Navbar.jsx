"use server"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import DropDown from '../Components/DropDown'


const Navbar = async () => {
  
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log('user data', user)
  return (
    <div className='bg-slate-400'>
      <nav className='container mx-auto flex items-center justify-between py-4 px-3 lg:px-0'>
        <div>
          <h1 className="text-2xl">Blog</h1>
        </div>
       <div className='inline lg:hidden'>
       <DropDown></DropDown>
       </div>
        <div className='hidden lg:inline'>
          <ul className='flex items-center gap-3 py-2  '>
            <li><Link href='/' className='btn-custom border-none hidden py-4 lg:inline'>
              Home
            </Link></li>
            {
              user ? <li><Link prefetch href='/profile' className='btn-custom border-none hidden lg:inline py-4'>
                Profile
              </Link></li> : ''
            }
            {user ? (
              <>
                <li ><Link href='/api/auth/logout' className='btn-custom border-none hidden lg:inline py-4'>
                  log Out
                </Link></li>
              </>
            ) : (
              <>
                <li ><Link href="/api/auth/register" className='btn-custom border-none hidden lg:inline py-4'>
                  signIn
                </Link></li>
                <li ><Link href='/api/auth/login' className='btn-custom border-none hidden lg:inline py-4'>
                  signUp
                </Link></li>
              </>
            )}

          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
