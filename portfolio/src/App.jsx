import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const [darkMode, setDarkMode] = useState(true);

  const cursorX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cursorY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const theme = darkMode
    ? "bg-[#0D0D0D] text-[#E8E8E8]"
    : "bg-[#F5F5F0] text-[#1A1A1A]";

  return (
    <div className={`${theme} overflow-x-hidden min-h-screen relative transition-colors duration-700`}>
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className={`absolute top-0 right-0 w-[800px] h-[800px] ${
            darkMode ? "bg-[#FF6B35]" : "bg-[#4A90E2]"
          } opacity-10 blur-[150px] rounded-full`}
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7B68EE] opacity-10 blur-[120px] rounded-full" />
      </div>

      {/* Noise Texture */}
      <div 
        className="fixed inset-0 -z-5 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B35] via-[#7B68EE] to-[#4A90E2] origin-left z-50"
      />

      {/* NAVBAR */}
<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8 }}
  className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/10 border-b border-white/5 z-40"
>
  <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
    <motion.h1
      className="font-light text-base tracking-[0.15em]"
      whileHover={{ letterSpacing: "0.2em" }}
      transition={{ duration: 0.3 }}
    >
      ROHAN KUMAR
    </motion.h1>

    <div className="hidden md:flex gap-10 text-xs items-center tracking-wider">
      {["WORK", "ABOUT", "CONTACT"].map((item, i) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="relative group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <span className="relative z-10">{item}</span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF6B35] origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}

      {/* RESUME LINK */}
      <motion.a
        href="/Resume_Rohan_Kumar.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="relative z-10">RESUME</span>
        <motion.span
          className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF6B35] origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>

      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-1.5 text-xs rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {darkMode ? "☀" : "☾"}
      </motion.button>
    </div>
  </div>
</motion.nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 px-8">
        <div className="max-w-7xl mx-auto w-full">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <motion.p
              className="text-sm tracking-[0.3em] opacity-60 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              FULL-STACK ENGINEER
            </motion.p>
            
            <motion.h1
              className="text-[clamp(3rem,8vw,8rem)] font-light leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Crafting
              <br />
              <span className="inline-block">
                <span className="italic font-serif">Scalable</span>
              </span>
              <br />
              Digital Systems
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="h-[2px] bg-[#FF6B35] mt-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-xl">
                Building high-performance backend systems and Web3 products 
                with production-grade architecture. Specialized in distributed 
                systems, blockchain infrastructure, and performance optimization.
              </p>

              <div className="flex gap-6">
                <motion.a
                  href="#work"
                  className="group relative px-8 py-4 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-white mix-blend-difference">VIEW WORK</span>
                  <motion.div
                    className="absolute inset-0 bg-[#FF6B35]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 border border-white/20" />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GET IN TOUCH
                </motion.a>
              </div>
            </div>

            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="relative w-64 md:w-80">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#FF6B35] to-[#7B68EE] opacity-20 blur-2xl" />
                <img
                  src="/profile.jpg"
                  alt="Rohan Kumar"
                  className="relative w-full aspect-[3/4] object-cover transition-all duration-700"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)" }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-40 px-8 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-sm tracking-[0.3em] opacity-60 mb-4">SELECTED PROJECTS</h2>
          <h3 className="text-5xl md:text-7xl font-light">Recent Work</h3>
        </motion.div>

        <div className="space-y-32">
          {[
            {
              title: "Blockchain Document Verification",
              desc: "Decentralized verification system built on Ethereum with IPFS storage integration",
              img: "/blockchain.png",
              github: "https://github.com/BlackMagic95/blockChain-Document-Verification",
              live: "https://block-chain-document-verification-phi.vercel.app",
              tech: ["Solidity", "Web3.js", "IPFS", "React"]
            },
            {
              title: "Netflix Clone",
              desc: "Full-stack streaming platform with authentication, video playback, and recommendation engine",
              img: "/netflix.png",
              github: "https://github.com/BlackMagic95/netflix-clone",
              live: "https://netflix-clone-frontend-ng5y.onrender.com",
              tech: ["Node.js", "MongoDB", "React", "Express"]
            },
            {
              title: "Credit Sea App",
              desc: "Financial management platform with loan tracking and credit score analytics",
              img: "/credit.png",
              github: "https://github.com/BlackMagic95/Credit_Sea_App",
              live: "https://credit-sea-app-lime.vercel.app",
              tech: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"]
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {i % 2 === 0 ? (
                  <>
                    <motion.div
                      className="relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#7B68EE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
                      />
                    </motion.div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs tracking-[0.2em] opacity-50 mb-2">PROJECT {String(i + 1).padStart(2, '0')}</p>
                        <h3 className="text-3xl md:text-4xl font-light mb-4">{project.title}</h3>
                        <p className="text-lg opacity-70 leading-relaxed">{project.desc}</p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs tracking-wider px-4 py-2 border border-white/20 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm tracking-wider hover:text-[#FF6B35] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          VIEW CODE →
                        </motion.a>

                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm tracking-wider hover:text-[#FF6B35] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          LIVE DEMO →
                        </motion.a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-6 order-2 md:order-1">
                      <div>
                        <p className="text-xs tracking-[0.2em] opacity-50 mb-2">PROJECT {String(i + 1).padStart(2, '0')}</p>
                        <h3 className="text-3xl md:text-4xl font-light mb-4">{project.title}</h3>
                        <p className="text-lg opacity-70 leading-relaxed">{project.desc}</p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs tracking-wider px-4 py-2 border border-white/20 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm tracking-wider hover:text-[#FF6B35] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          VIEW CODE →
                        </motion.a>

                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm tracking-wider hover:text-[#FF6B35] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          LIVE DEMO →
                        </motion.a>
                      </div>
                    </div>

                    <motion.div
                      className="relative overflow-hidden order-1 md:order-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#7B68EE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
                      />
                    </motion.div>
                  </>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-40 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-sm tracking-[0.3em] opacity-60 mb-4">ABOUT</h2>
            <h3 className="text-5xl md:text-7xl font-light">Background</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div className="space-y-6 text-lg leading-relaxed opacity-80">
              <p>
                Backend-focused engineer with expertise in building scalable 
                distributed systems across Web2 and Web3 ecosystems.
              </p>
              <p>
                Passionate about system architecture, blockchain infrastructure, 
                performance optimization, and creating robust solutions that scale.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs tracking-[0.2em] opacity-50 mb-4">EXPERTISE</h4>
                <div className="space-y-3">
                  {["Distributed Systems", "Blockchain Development", "Backend Architecture", "Performance Optimization", "Web3 Integration"].map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-[#FF6B35]" />
                      <span className="text-sm tracking-wider">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-40 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm tracking-[0.3em] opacity-60 mb-8">GET IN TOUCH</h2>
            <h3 className="text-5xl md:text-8xl font-light mb-20">Let's Connect</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-12 flex-wrap text-lg"
          >
            {[
  { name: "GitHub", url: "https://github.com/BlackMagic95" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rkrohankumar/" },
  { name: "LeetCode", url: "https://leetcode.com/u/RK_CODES/" },
  { name: "rohanrk2611@gmail.com",
  url: "https://mail.google.com/mail/?view=cm&fs=1&to=rohanrk2611@gmail.com" },
  { name: "+91 95465 22548", url: "tel:+919546522548" }
].map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="relative z-10 tracking-wider">{link.name}</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#FF6B35] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm opacity-50 tracking-wider">
          <p>© {new Date().getFullYear()} ROHAN KUMAR</p>
          <p>DESIGNED & DEVELOPED WITH PRECISION</p>
        </div>
      </footer>

    </div>
  );
}

export default App;