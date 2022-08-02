import Link from "next/link"


export default function Sidebar(){
   
    return (
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

        <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
            </p>
            <Link><a  className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                Find out More
            </a></Link>
        </div>
        )}