import { motion } from "framer-motion";
import twineLogo from "@/assets/twine-logo.png";
import screenshotHome from "@/assets/screenshot-home.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
          style={{ top: "-10%", right: "-10%" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[80px]"
          style={{ bottom: "10%", left: "-5%" }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/8 select-none"
            style={{
              left: `${8 + i * 12}%`,
              top: `${5 + (i % 4) * 25}%`,
              fontSize: `${20 + i * 4}px`,
            }}
            animate={{ y: [-15, 15, -15], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={twineLogo} alt="Twine logo" width={40} height={40} className="w-10 h-10" />
            <span className="font-heading text-xl font-bold text-foreground">Twine</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#preview" className="hover:text-primary transition-colors">Preview</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-primary px-5 py-2 font-body text-sm font-semibold text-primary-foreground transition-shadow"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Download
          </motion.a>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 lg:py-0 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-6"
            >
              ✨ Now available on iOS & Android
            </motion.div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Stay Tethered,{" "}
              <span className="relative">
                <span className="text-primary">Every Day</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Daily games, real-time doodles, and intimate challenges to bring you closer — no matter the distance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="/app-release.apk"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 font-body font-semibold text-secondary-foreground transition-shadow hover:shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download APK
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start text-center">
              <div>
                <p className="font-heading text-2xl font-bold text-primary">10K+</p>
                <p className="font-body text-xs text-muted-foreground">Active Couples</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-primary">4.8★</p>
                <p className="font-body text-xs text-muted-foreground">App Rating</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-primary">1M+</p>
                <p className="font-body text-xs text-muted-foreground">Doodles Sent</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-12 rounded-full bg-primary/8 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              {/* Phone frame */}
              <div className="relative rounded-[2.8rem] overflow-hidden border-[4px] border-foreground/10 shadow-2xl"
                style={{ boxShadow: "var(--shadow-glow), 0 30px 60px -15px rgba(0,0,0,0.2)" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />
                <img
                  src={screenshotHome}
                  alt="Twine app home screen"
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] h-auto animate-float"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
