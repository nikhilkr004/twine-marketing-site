import { motion } from "framer-motion";
import { Download, Link, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download",
    description: "Get the Twine app from the App Store or Google Play.",
  },
  {
    icon: Link,
    step: "02",
    title: "Pair",
    description: "Your partner enters your unique code to connect instantly.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Play",
    description: "Your daily tether is live — games, doodles, and more!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-4">
            Getting Started
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Steps to Connection
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Getting started with Twine takes less than a minute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              {i < 2 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ background: "var(--gradient-card)" }}>
                <s.icon className="w-8 h-8 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold font-body flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
