// Importing Link 
import Link from "next/link";

// Creating a Component, Footer
export default function Footer() {
    return (
        <div className="bg-slate-700 flex justify-around p-4 flex-wrap h-60">

            <div>
            <h1 className="text-2xl text-slate-300 font-bold font-serif pt-7">Courses Completed / Education:</h1>
            <ul className="list-disc text-slate-300 font-serif">
            <li className="pt-4">CIT (Certificate Information Technology)</li>
            <li>9th Grade Boards Exam Passed</li>
            </ul>
            </div>

            <div>
            <h1 className="text-2xl text-slate-300 font-bold font-serif pt-7">Learning:</h1>
            <ul className="list-disc text-slate-300 font-serif">
            <li className="pt-4">DIT (Diploma in Information Technology)</li>
            <li>Metric Grade Student</li>
            <li>GIAIC Student</li>
            </ul>
            </div>

            <div>
            <h1 className="text-2xl text-slate-300 font-bold font-serif pt-7">Social Media Links:</h1>
            <ul className="list-disc text-slate-300 font-serif">
            <li className="pt-4"><Link href="https://www.instagram.com/saboo4._.offic1al/profilecard/?igsh=Mmx6a29mMXp0NXZm">Instagram</Link></li>
            <li> <Link href="mailto:a.saboor.no.1@gmail.com">Mail me!</Link></li>
            <li><Link href="tel:+9231348105">Call me!</Link></li>
            </ul>
            </div>

        </div>
    );
};