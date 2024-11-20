// Importing Link 
import Link from "next/link";

// Creating a Component: Navbar
export default function Navbar() {
    return (
        <div className="bg-slate-700">
        <ul className="text-slate-300 flex p-5 justify-end">
          <li className="mr-10 font-bold hover:bg-sky-600 rounded "><Link href="./">Home</Link></li>
          <li className="mr-10 font-bold hover:bg-sky-600 rounded"><Link href="./About">About</Link></li>
          <li className="mr-10 font-bold hover:bg-sky-600 rounded"><Link href="./Contact">Contact</Link></li>
          <li className="mr-10 font-bold hover:bg-sky-600 rounded"><Link href="./Skills">Skills</Link></li>
          <li className="mr-10 font-bold hover:bg-sky-600 rounded"><Link href="./Projects">Projects</Link></li>
        </ul>
        </div>
    );
};