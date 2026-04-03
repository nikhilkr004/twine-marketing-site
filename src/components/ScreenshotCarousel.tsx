import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mockupHome from "@/assets/mockup-home.png";
import mockupGame from "@/assets/mockup-game.png";
import mockupChat from "@/assets/mockup-chat.png";
import mockupProfile from "@/assets/mockup-profile.png";
import mockupConnect from "@/assets/mockup-connect.png";

const screenshots = [
  { src: mockupHome, label: "Home Dashboard" },
  { src: mockupGame, label: "Daily Games" },
  { src: mockupChat, label: "Chat & Doodles" },
  { src: mockupProfile, label: "Your Profile" },
  { src: mockupConnect, label: "Connect" },
];

const ScreenshotCarousel = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % screenshots.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) =>
    (active + offset + screenshots.length) % screenshots.length;

  return (
    <section className="py-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            See Twine in Action
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center h-[420px] md:h-[500px]">
          {[-1, 0, 1].map((offset) => {
            const idx = getIndex(offset);
            const isCenter = offset === 0;
            return (
              <motion.div
                key={`${idx}-${offset}`}
                className="absolute cursor-pointer"
                onClick={() => !isCenter && setActive(idx)}
                animate={{
                  x: offset * 220,
                  scale: isCenter ? 1 : 0.75,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 5,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <img
                  src={screenshots[idx].src}
                  alt={screenshots[idx].label}
                  loading="lazy"
                  width={512}
                  height={1024}
                  className="w-[200px] md:w-[260px] rounded-3xl drop-shadow-xl"
                />
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
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? "bg-primary w-6" : "bg-primary/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
