import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function header() {

   

  return (

    <nav class="w-full py-4 bg-blue-800 shadow">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between">

        <nav>
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                <li><a class="hover:text-gray-200 hover:underline px-4" href="#">Shop</a></li>
                <li><a class="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
            </ul>
        </nav>

        <div class="flex items-center text-lg no-underline text-white pr-6">
            <a className="" href="#">
                <i className="fab fa-facebook"></i>
            </a>
            <a className="pl-6" href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="pl-6" href="#">
                <i className="fab fa-twitter"></i>
            </a>
            <a className="pl-6" href="#">
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
    </div>

</nav>


<header className="w-full container mx-auto">
    <div className="flex flex-col items-center py-12">
        <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
            Minimal Blog
        </a>
        <p className="text-lg text-gray-600">
            Lorem Ipsum Dolor Sit Amet
        </p>
    </div>
</header>
)
}