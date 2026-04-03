import { motion } from "framer-motion";
import { Gamepad2, PenTool, Smartphone } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Daily Games",
    description: "Fun quizzes and 'Would You Rather' prompts to spark daily conversation.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: PenTool,
    title: "Real-time Doodles",
    description: "Send sketches that appear instantly on your partner's home screen widget.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Smartphone,
    title: "Tethered Widgets",
    description: "Keep a piece of each other close with live-updating home screen widgets.",
    color: "bg-accent text-accent-foreground",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Stay Close
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Three powerful ways to keep your connection alive every single day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-card p-8 text-center transition-shadow"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6 transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
