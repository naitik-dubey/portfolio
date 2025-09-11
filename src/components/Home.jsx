import "./Home.css";
export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-blue-100 text-center pt-20"
    >
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
        Hi, I'm <span className="text-blue-600">Naitik</span> 👋
      </h1>
      <p className="text-xl text-gray-600 max-w-xl">
        A passionate <span className="font-semibold text-blue-500">Data Analytics and Web Developer </span> 
        building modern, responsive, and user-friendly web apps and data sheets.
      </p>
      <a
        href="#projects"
        className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform"
      >
        View Projects
      </a>
    </section>
  );
}
