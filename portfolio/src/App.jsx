import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const theme = darkMode
    ? "bg-[#0f0f12] text-white"
    : "bg-white text-black";

  return (
    <div className={`${theme} overflow-x-hidden min-h-screen`}>

      {/* LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <h1 className="text-white text-xl tracking-widest">
            Rohan Kumar
          </h1>
        </div>
      )}

      {/* SCROLL BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-white origin-left z-50"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-40">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="font-semibold text-lg">
            Rohan Kumar
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#work" className="hover:opacity-70 transition">Work</a>
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1 border rounded-full text-xs"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Full-Stack Engineer.
            </h1>

            <p className="mt-8 text-lg md:text-xl opacity-80 max-w-xl">
              Building scalable backend systems and Web3 platforms
              with production-ready architecture.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-20">
          Selected Work
        </h2>

        {[
          {
            title: "Blockchain Document Verification",
            img: "/blockchain.png",
            github: "https://github.com/BlackMagic95/blockChain-Document-Verification",
            live: "https://block-chain-document-verification-phi.vercel.app"
          },
          {
            title: "Netflix Clone",
            img: "/netflix.png",
            github: "https://github.com/BlackMagic95/netflix-clone",
            live: "https://netflix-clone-frontend-ng5y.onrender.com"
          },
          {
            title: "Credit Sea App",
            img: "/credit.png",
            github: "https://github.com/BlackMagic95/Credit_Sea_App",
            live: "https://credit-sea-app-lime.vercel.app"
          }
        ].map((project, i) => (
          <div
            key={i}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            {i % 2 === 0 && (
              <img
                src={project.img}
                alt={project.title}
                className="rounded-2xl shadow-md"
              />
            )}

            <div>
              <h3 className="text-3xl font-semibold mb-6">
                {project.title}
              </h3>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-gray-400 hover:bg-gray-200 hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-black text-white border border-white hover:bg-white hover:text-black transition"
                >
                  Live
                </a>
              </div>
            </div>

            {i % 2 !== 0 && (
              <img
                src={project.img}
                alt={project.title}
                className="rounded-2xl shadow-md"
              />
            )}
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 border-t border-gray-300 text-center px-6">
        <h2 className="text-4xl font-bold mb-10">
          About
        </h2>

        <p className="max-w-3xl mx-auto text-lg opacity-80">
          Backend-focused engineer building scalable systems
          at the intersection of Web2 and Web3 technologies.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 border-t border-gray-300 text-center px-6">
        <h2 className="text-4xl font-bold mb-10">
          Contact
        </h2>

        <div className="space-y-3 text-lg opacity-80">
          <p>Email: yourmail@email.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>

          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
            <a href="https://github.com/BlackMagic95" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center opacity-60">
        © {new Date().getFullYear()} Rohan Kumar
      </footer>

    </div>
  );
}

export default App;
