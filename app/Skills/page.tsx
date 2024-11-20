// Creating a component!
export default function Home () {
  return (
    <div>
    <h1 className="text-center pt-20 text-slate-800 font-bold text-6xl font-serif pb-6">View My Skills!</h1>

    <p className="text-center pt-30 pb-10 pr-10 pl-10 text-slate-800 text-2xl font-serif">This section highlights the key skills I have gained throughout my studies and practice. These skills enable me to work on various aspects of web development, design, and office applications.</p>

    <h1 className="text-left pl-10 pt-10 pb-5 text-slate-800 font-bold text-5xl font-serif">Key Skills:</h1>

    <ul className="list-disc pl-20 text-left text-slate-800 text-2xl font-serif mb-2">
          <li>Proficient in MS Office (Word, Excel, PowerPoint)</li>
          <li>Experience in Graphic Designing (Photoshop, Illustrator, Corel, Inpage and Canva)</li>
          <li>Strong foundation in HTML & CSS for web development</li>
          <li>Basic knowledge of JavaScript and its functionalities</li>
          <li>New to Tailwind CSS but eager to learn and apply it</li>
          <li className="mb-12">Familiar with routing, components, and component architecture in Next.js</li>
    </ul>


    </div>
  );
}