import { allArticles } from '../../.contentlayer/generated'
import Link from 'next/link';
import { usedcomponents} from '../SingleArticle'



export default function Nav() {


    return (

        <><nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
    
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <Link href={"/"}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a></Link>
                    <Link href={"/"}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a></Link>
                    <Link href={"/"}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a></Link>
                    <Link href={"/"}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a></Link>
                    <Link href={"/"}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a></Link>
                    <Link href={"/"}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a></Link>
                </div>
                </div>
            </div>
           
    </nav>

        )}


        export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = allArticles.find((article) => article.slug === params.slug);

  return { props: { article } };
}