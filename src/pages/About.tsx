import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Globe } from "lucide-react";
import twineLogo from "@/assets/twine-logo.png";

const values = [
  { icon: Heart, title: "Love First", desc: "Every feature is designed to strengthen emotional bonds between partners." },
  { icon: Users, title: "For Real Couples", desc: "Built by couples, for couples. We understand the joys and challenges of relationships." },
  { icon: Globe, title: "No Distance Too Far", desc: "Whether you're across the room or across the world, Twine keeps you connected." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <nav className="container mx-auto px-6 py-5 flex items-center gap-2.5">
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <img src={twineLogo} alt="Twine" width={36} height={36} className="w-9 h-9" />
        <span className="font-heading text-xl font-bold text-foreground">Twine</span>
      </Link>
    </nav>
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">About Twine</h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Twine was born from a simple idea: couples deserve a space that's just theirs — free from social media noise, full of playful connection.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="text-center rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
              <v.icon className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{v.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center rounded-3xl p-12"
        style={{ background: "var(--gradient-card)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Our Mission</h2>
        <p className="font-body text-primary-foreground/80 text-lg max-w-xl mx-auto leading-relaxed">
          To help every couple feel closer, one doodle, one game, and one shared moment at a time. Because love isn't just a feeling — it's a daily practice.
        </p>
      </motion.div>
    </main>
  </div>
);

export default About;
