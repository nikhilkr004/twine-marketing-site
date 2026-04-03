import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun",
    duration: "Together 3 years",
    text: "Twine's daily games have become our favorite evening ritual. It's like having a mini date every day!",
    rating: 5,
  },
  {
    name: "Sarah & Mike",
    duration: "Long distance couple",
    text: "The doodle feature is everything! Waking up to a cute sketch from my partner makes my whole day better.",
    rating: 5,
  },
  {
    name: "Emma & Liam",
    duration: "Married 2 years",
    text: "We rediscovered things about each other we never knew. The questions are thoughtful and fun!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-4">
            Love Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Couples Love Twine
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Join thousands of happy couples strengthening their bond daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-card p-8 transition-shadow relative"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="absolute -top-3 left-8 text-4xl text-primary/20 font-heading">"</div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 text-sm">
                {t.text}
              </p>
              <div>
                <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-body text-muted-foreground text-xs">{t.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
