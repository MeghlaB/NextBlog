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
          <h1 className="text-xl">Project</h1>
        </div>
        <div>
          <ul className='flex items-center gap-3'>
            <li><Link href='/'>
              Home
            </Link></li>
            <li><Link prefetch href='/profile'>
             Profile
            </Link></li>
            {user ? (
              <>
                <li className='btn btn-primary'><Link href='/api/auth/logout'>
                  log Out
                </Link></li>
              </>
            ) : (
              <>
                <li className='btn btn-primary'><Link href='/api/auth/register'>
                  signIn
                </Link></li>
                <li className='btn btn-primary'><Link href='/api/auth/logout'>
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
