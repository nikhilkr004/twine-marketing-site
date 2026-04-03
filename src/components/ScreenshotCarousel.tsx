import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import screenshotHome from "@/assets/screenshot-home.jpeg";
import screenshotGame from "@/assets/screenshot-game.jpeg";
import screenshotDoodle from "@/assets/screenshot-doodle.jpeg";
import screenshotProfile from "@/assets/screenshot-profile.jpeg";
import screenshotConnect from "@/assets/screenshot-connect.jpeg";
import screenshotPairing from "@/assets/screenshot-pairing.jpeg";
import screenshotGallery from "@/assets/screenshot-gallery.jpeg";
import screenshotCanvas from "@/assets/screenshot-canvas.jpeg";
import screenshotAnswers from "@/assets/screenshot-answers.jpeg";

const screenshots = [
  { src: screenshotHome, label: "Home Dashboard" },
  { src: screenshotGame, label: "Daily Questions" },
  { src: screenshotDoodle, label: "Doodle Canvas" },
  { src: screenshotGallery, label: "Doodle Gallery" },
  { src: screenshotProfile, label: "Your Profile" },
  { src: screenshotConnect, label: "Connect with Partner" },
  { src: screenshotPairing, label: "Pair with Code" },
  { src: screenshotCanvas, label: "Draw Together" },
  { src: screenshotAnswers, label: "Game Answers" },
];

const ScreenshotCarousel = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % screenshots.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) =>
    (active + offset + screenshots.length) % screenshots.length;

  const handleClick = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-background via-accent/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-4">
            App Preview
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            See Twine in Action
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Explore every corner of the app designed to keep couples connected.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[480px] md:h-[560px]">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const idx = getIndex(offset);
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);
            return (
              <motion.div
                key={`${idx}-${offset}`}
                className="absolute cursor-pointer"
                onClick={() => !isCenter && handleClick(idx)}
                animate={{
                  x: offset * 180,
                  scale: isCenter ? 1 : absOffset === 1 ? 0.78 : 0.6,
                  opacity: isCenter ? 1 : absOffset === 1 ? 0.6 : 0.3,
                  zIndex: isCenter ? 10 : absOffset === 1 ? 5 : 1,
                  rotateY: offset * -5,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 32 }}
                style={{ perspective: 1200 }}
              >
                {/* Phone frame */}
                <div className={`relative rounded-[2.2rem] overflow-hidden border-[3px] transition-all duration-300 ${isCenter ? 'border-primary/40 shadow-2xl' : 'border-border/30'}`}
                  style={isCenter ? { boxShadow: "var(--shadow-glow), 0 25px 50px -12px rgba(0,0,0,0.15)" } : {}}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/90 rounded-b-2xl z-10" />
                  <img
                    src={screenshots[idx].src}
                    alt={screenshots[idx].label}
                    loading="lazy"
                    className="w-[200px] md:w-[240px] h-auto object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-center font-body font-semibold text-foreground mt-6 text-lg"
          >
            {screenshots[active].label}
          </motion.p>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-7" : "bg-primary/20 w-2.5 hover:bg-primary/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
