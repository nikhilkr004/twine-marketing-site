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
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 font-body font-semibold text-background transition-shadow hover:shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-body font-semibold text-primary-foreground transition-shadow"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                Google Play
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
