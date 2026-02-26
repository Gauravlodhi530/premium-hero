import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const mainHeadlines = [
  "HIMMAT HAI TO KAR NA",
  "DARR LAG RAHA HAI?",
  "SAFE REHNA HAI?",
  "AVERAGE BANOGE?",
  "SYSTEM KO BREAK KAROGE?",
  "BUILD KARNE AAYE HO?",
  "LIMIT TODNE KA PLAN HAI?",
  "STANDOUT BANNA HAI?",
  "READY HO YA NAHI?",
  "ENTER KARNE KI HIMMAT HAI?",
  "COMFORT ZONE ME REHNA HAI?",
  "SCROLL KARKE KHUSH HO?",
  "RISK LENE KA SCENE HAI?",
  "JEETNA HAI YA DEKHNA HAI?",
  "NORMAL BANNA HAI YA ALAG?",
  "LOG KYA KAHENGE SOCHOGE?",
  "CHALLENGE ACCEPT KAROGE?",
  "GAME CHANGE KARNA HAI?",
  "BAKIYON JAISA BANOGE?",
  "SYSTEM FOLLOW KAROGE YA TODOGE?"
];

const headlines = [
  "REGISTER",
  "PROVE IT",
  "ENTER NOW",
  "INITIATE ACCESS",
  "UNLOCK ENTRY",
  "BREAK THE LIMIT",
  "STEP FORWARD",
  "TAKE THE RISK",
  "OVERRIDE FEAR",
  "EXECUTE MOVE",
  "CLAIM YOUR SPOT",
  "LEVEL UP",
  "GO BEYOND",
  "ENTER THE GRID",
  "BUILD OR QUIT",
  "MAKE YOUR MARK",
  "CROSS THE LINE",
  "SHOW UP",
  "NO TURNING BACK",
  "START NOW"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.05 } },
};

const glitchVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const flickerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: [0, 1, 0.8, 1, 0.9, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }
  },
};

export default function App() {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const cursorRef = useRef(null);
  const glitchTimeoutRef = useRef(null);

  useEffect(() => {
    // Select random headlines on mount
    const randomFirst =
      mainHeadlines[Math.floor(Math.random() * mainHeadlines.length)];
    
    const randomSecond =
      headlines[Math.floor(Math.random() * headlines.length)];
    
    setFirstLine(randomFirst);
    setSecondLine(randomSecond);
    
    // Glitch effect for second line
    const glitchInterval = setInterval(() => {
      const glitchVariants = [
        randomSecond.replace(/E/g, "3"),
        randomSecond.replace(/A/g, "@"),
        randomSecond.replace(/O/g, "0"),
        randomSecond.replace(/I/g, "!"),
        randomSecond
      ];
      
      setSecondLine(
        glitchVariants[Math.floor(Math.random() * glitchVariants.length)]
      );
      
      glitchTimeoutRef.current = setTimeout(() => setSecondLine(randomSecond), 120);
    });
    
    // Cursor blink animation
    const cursorAnimation = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)"
    });
    
    // Cleanup
    return () => {
      clearInterval(glitchInterval);
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
      cursorAnimation.kill();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://whereuelevate.com/drills/hack-gear-2.0?w_ref=2PRGSY"; // Redirect after 7 seconds
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative bg-black overflow-hidden text-green-400 font-mono">
      {/* Advanced cyber horror background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep vignette */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]"
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Glitch bars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glitch-${i}`}
            className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
            animate={{ x: ['-100%', '200%'], opacity: [0, 1, 0] }}
            transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 1.5, ease: "easeInOut" }}
          />
        ))}
        
        {/* Digital corruption blocks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`block-${i}`}
            className="absolute bg-green-500/10 backdrop-blur-sm border border-green-500/20"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
            }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }}
          />
        ))}
        
        {/* Minimal red danger zone */}
        <motion.div 
          className="absolute top-[5%] right-[5%] w-24 h-24 border-2 border-red-600/30 bg-red-900/10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute inset-0 bg-red-600/20 blur-xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Cyber circuit lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{ left: `${i * 8}%`, top: 0, width: '2px', height: '100%' }}
            animate={{ opacity: [0.1, 0.4, 0.1], scaleY: [0.8, 1, 0.8] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
        
        {/* Floating binary */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-green-500/20 text-xs font-mono"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3, ease: "linear" }}
          >
            {Math.random() > 0.5 ? '01010101' : '10101010'}
          </motion.div>
        ))}
        
        {/* Hexagon grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300ff00' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Energy orbs */}
        <motion.div 
          className="absolute top-[30%] left-[20%] w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-[25%] right-[15%] w-80 h-80 bg-cyan-500/8 rounded-full blur-[120px]"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.4, 1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Scanline */}
        <motion.div 
          className="absolute left-0 w-full h-1 bg-gradient-to-b from-transparent via-green-400/40 to-transparent"
          animate={{ y: ['0vh', '100vh'], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-green-400/60 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4, ease: "easeOut" }}
          />
        ))}
        
        {/* Noise */}
        <motion.div 
          className="absolute inset-0 opacity-10 mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Flicker */}
        <motion.div 
          className="absolute inset-0 bg-green-500/5"
          animate={{ opacity: [0, 0.15, 0, 0.1, 0] }}
          transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5, times: [0, 0.2, 0.4, 0.6, 1] }}
        />
      </div>

      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <motion.div 
          className="max-w-6xl w-full mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto max-w-4xl">
            {/* Skull/Warning Badge */}
            <div className="mb-6 sm:mb-4 text-center">
              <motion.div 
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-red-600/50 bg-black/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                variants={flickerVariants}
              >
                <span className="text-red-600 text-base sm:text-lg">⚠</span>
                <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-red-500 font-bold glitch-text">
                  ACCESS RESTRICTED
                </span>
                <span className="text-red-600 text-base sm:text-lg">⚠</span>
              </motion.div>
            </div>

            {/* Terminal-style Headline */}
            <motion.div 
              className="text-center mb-6 sm:mb-8 px-2"
              variants={glitchVariants}
            >
              <div className="text-green-500 text-xs sm:text-sm mb-2 opacity-70">
                <span ref={cursorRef}>█</span> root@system:~$
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
                  &gt; {firstLine || "LOADING..."}
                </span>
                <br />
                <span className="text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
                  {secondLine || "PLEASE WAIT"}
                </span>
                <span className="text-green-400">.</span>
              </h1>
              <div className="text-yellow-500 text-xs sm:text-sm opacity-70 mt-2">
                [WARNING: UNAUTHORIZED ACCESS DETECTED]
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
              variants={flickerVariants}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">
                <span className="text-red-500">[ERROR]</span> Most people scroll.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-green-400">
                <span className="text-green-500">[SUCCESS]</span> Few people <span className="text-cyan-400 font-bold">BUILD</span>.
              </p>
            </motion.div>

            {/* Terminal Messages */}
            <motion.div 
              className="space-y-2 mb-8 sm:mb-10 max-w-3xl mx-auto px-4 text-xs sm:text-sm"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
            >
              {[
                '> Average log scroll karte hain. Builders click karte hain.',
                '> Darr lag raha hai? Tabhi to karna chahiye.',
                '> Safe rehna hai ya standout banna hai?'
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="px-3 sm:px-4 py-2 border border-green-900/50 bg-black/60 backdrop-blur-sm font-mono shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <p className="text-green-500">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex items-center justify-center gap-3 sm:gap-4 flex-col sm:flex-row px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="https://whereuelevate.com/drills/hack-gear-2.0?w_ref=2PRGSY" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-red-600 bg-black text-red-500 font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:bg-red-600 hover:text-black hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] w-full sm:min-w-[240px] max-w-[320px] text-center uppercase tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">[Take the Risk]</span>
              </motion.a>

              <motion.a 
                href="https://unstop.com/hackathons/hack-gear-20-nova-coders-1612261?lb=gAsqeJDc&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Gaurakum1185" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 bg-black text-cyan-400 font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] w-full sm:min-w-[240px] max-w-[320px] text-center uppercase tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">[Stay Safe (Ignore)]</span>
              </motion.a>
            </motion.div>

            {/* Bottom Terminal Message */}
            <motion.div
              className="text-center text-gray-600 text-xs sm:text-sm mt-6 sm:mt-8 px-4 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-red-600">&gt;&gt;</span> Join the builders. Not the scrollers. <span className="text-red-600">&lt;&lt;</span>
              <div className="text-[10px] text-gray-700 mt-2">
                [System ID: {Math.random().toString(36).substring(2, 11).toUpperCase()}]
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
