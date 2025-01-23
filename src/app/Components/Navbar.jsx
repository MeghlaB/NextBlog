"use server"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

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
        <div>
          <ul className='flex items-center gap-3'>
            <li><Link href='/' className='btn-custom border-none'>
              Home
            </Link></li>
            {
              user?<li><Link prefetch href='/profile' className='btn-custom border-none'>
              Profile
             </Link></li>:''
            }
            {user ? (
              <>
                <li ><Link href='/api/auth/logout' className='btn-custom border-none'>
                  log Out
                </Link></li>
              </>
            ) : (
              <>
                <li ><Link  href="/api/auth/register" className='btn-custom border-none'>
                  signIn
                </Link></li>
                <li ><Link href='/api/auth/login' className='btn-custom border-none'>
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
