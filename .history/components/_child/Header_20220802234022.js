import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <><nav className='w-full py-4 bg-blue-800 shadow'>
          <div className='w-full container mx-auto flex flex-wrap items-center justify-between'>

              <nav>
                  <ul className='flex items-center justify-between font-bold text-sm text-white uppercase no-underline'>
                  <Link href={"/"}><li><a className='hover:text-gray-200 hover:underline px-4'>Shop</a></li></Link>
                  <Link href={"https://megan-portfolio.netlify.app/"}><li><a className='hover:text-gray-200 hover:underline px-4'>About Me</a></li></Link>
                  </ul>
              </nav>

              <div className= "mt-6 w-111 h-55 order-3 flex justify-center">
    <div className="flex gap-6">
        <Link href={'https://github.com/Megan74'}>
        <a className= "social" ><ImGithub color="888888"/></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social"><ImTwitter color="#888888"/></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social"><ImLinkedin color="#888888"/></a>
    </Link>
</div>

</div>
          </div>

      </nav><header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl' href='#'>
                      Welcome to my World! </a>
                  <p className='text-lg text-gray-600'>
                      Lorem Ipsum Dolor Sit Amet
                  </p>
              </div>
          </header></>
)
}