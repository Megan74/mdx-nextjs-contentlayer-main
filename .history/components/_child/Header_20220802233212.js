import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <><nav className='w-full py-4 bg-blue-800 shadow'>
          <div className='w-full container mx-auto flex flex-wrap items-center justify-between'>

              <nav>
                  <ul className='flex items-center justify-between font-bold text-sm text-white uppercase no-underline'>
                  <Link href={"/"}><li><a className='hover:text-gray-200 hover:underline px-4'>Shop</a></li></Link>
                  <Link href={"/"}><li><a className='hover:text-gray-200 hover:underline px-4'>About</a></li></Link>
                  </ul>
              </nav>

              <div className='flex items-center text-lg no-underline text-white pr-6'>
                  <a className="" href="#">
                      <i className='fab fa-facebook'>My portfolio</i>
                  </a>
                  <Link href={"https://github.com/Megan74"}><a className='pl-6' href="#">
                      <i className='fab fa-github'></i>
                  </a></Link>
                  <a className='pl-6' href="#">
                      <i className='fab fa-twitter'></i>
                  </a>
                  <a className='pl-6' href="#">
                      <i className='fab fa-linkedin'></i>
                  </a>
              </div>
          </div>

      </nav><header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl' href='#'>
                      Minimal Blog </a>
                  <p className='text-lg text-gray-600'>
                      Lorem Ipsum Dolor Sit Amet
                  </p>
              </div>
          </header></>
)
}