import Link from "next/link"


export default function Sidebar(){
   
    return (
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3 ml-33">

        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Me</p>
            <p className="pb-2">Hi, I am Megan. I specialise as a full stack developer, I have mastered fundamental knowledge of modern frontend and
           backend technologies, by building web applications including the JavaScript, HTML, CSS, JSX programming languages, with
           Node.js and related libraries/frameworks like React or Express. I describe myself as a passionate and curious self-starter, who finds true enjoyment optimising user experiences, and
            by delivering impactful & well-performing projects.
            </p>
            <Link href={'https://megan-portfolio.netlify.app/'}><a className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                Find Out More
            </a></Link>
        </div>
        </aside>
        )}