// Creating a component!
export default function Home () {
  return (
    <div>

    <h1 className="text-center pt-20 text-slate-800 font-bold text-6xl font-serif pb-6">About This Assignment</h1>
    <p className="text-center pt-30 pb-10 pr-10 pl-10 text-slate-800 text-2xl font-serif"> This website was created as part of the first assignment for the GIAIC Q2 classes.
      The objective of this assignment is to practice basic web development skills, including HTML, CSS, and layout design. 
      The assignment showcases my ability to build a simple, yet functional webpage using modern web technologies.</p>

    <p className="text-center pt-30 pr-10 pl-10 text-slate-800 text-2xl font-serif"> This website features a clean and professional design, focusing on core web development principles. 
      The main goal is to demonstrate how I can apply what I've learned so far in the course to build a functional webpage.</p>

    <h1 className="text-center pt-10 pb-10 text-slate-800 font-bold text-5xl font-serif">Key Features:</h1>
    <ul className="list-disc pl-20 text-left text-slate-800 text-2xl font-serif mb-2">
      <li>Navbar for easy navigation</li>
      <li>Email and contact links in the footer</li>
      <li>Simple layout using Tailwind CSS classes</li>
      <li className="mb-12">Basic structure for web development assignments</li>
      </ul>
    </div>
  );
}