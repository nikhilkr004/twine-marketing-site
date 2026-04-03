import { motion } from "framer-motion";
import { Gamepad2, PenTool, Smartphone, Heart, MessageCircle, Sparkles } from "lucide-react";
import screenshotGame from "@/assets/screenshot-game.jpeg";
import screenshotDoodle from "@/assets/screenshot-doodle.jpeg";
import screenshotHome from "@/assets/screenshot-home.jpeg";

const features = [
  {
    icon: Gamepad2,
    title: "Daily Games",
    description: "Fun quizzes and 'Would You Rather' prompts to spark daily conversation and learn new things about each other.",
    screenshot: screenshotGame,
  },
  {
    icon: PenTool,
    title: "Real-time Doodles",
    description: "Send sketches that appear instantly on your partner's home screen widget. Express yourself beyond words.",
    screenshot: screenshotDoodle,
  },
  {
    icon: Smartphone,
    title: "Tethered Widgets",
    description: "Keep a piece of each other close with live-updating home screen widgets that show your latest doodles.",
    screenshot: screenshotHome,
  },
];

const miniFeatures = [
  { icon: Heart, title: "Daily Check-ins", desc: "Share how you're feeling" },
  { icon: MessageCircle, title: "Sweet Messages", desc: "Surprise your partner" },
  { icon: Sparkles, title: "Memory Lane", desc: "Relive your moments" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Stay Close
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-lg">
            Three powerful ways to keep your connection alive every single day.
          </p>
        </motion.div>

        {/* Main features with screenshots */}
        <div className="space-y-24 max-w-6xl mx-auto mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>
              <div className={`flex justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 2 : -2 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-xl" />
                  <div className="relative rounded-[2.2rem] overflow-hidden border-[3px] border-border/40 shadow-xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-foreground/90 rounded-b-2xl z-10" />
                    <img
                      src={feature.screenshot}
                      alt={feature.title}
                      loading="lazy"
                      className="w-[220px] md:w-[250px] h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {miniFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-2xl bg-card p-5 transition-shadow"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-foreground text-sm">{f.title}</h4>
                <p className="font-body text-muted-foreground text-xs">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
