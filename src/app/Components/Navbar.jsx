"use server"
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
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

            <li><Link prefetch href='/profile' className='btn-custom border-none hidden lg:inline py-4'>
              Profile
            </Link></li>

            {user ? (
              <>


                <button className='btn-custom border-none hidden lg:inline py-4'>
                  <LogoutLink>LogOut</LogoutLink>
                </button>
              </>
            ) : (
              <>
                <button className='btn-custom border-none hidden lg:inline py-4'>
                  <RegisterLink>SignIn</RegisterLink>
                </button>
              
                <button className='btn-custom border-none hidden lg:inline py-4'>
                  <LoginLink>SignUp</LoginLink>
                </button>
              </>
            )}

          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
