import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-primary-foreground"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${16 + Math.random() * 24}px`,
                }}
                animate={{ y: [-8, 8, -8], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3 + Math.random() * 3, repeat: Infinity }}
              >
                ♥
              </motion.span>
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Get Closer?
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg max-w-lg mx-auto mb-8">
              Download Twine today and start your daily connection journey with your partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 font-body font-bold text-primary transition-shadow hover:shadow-lg"
              >
                Download Free
              </motion.a>
              <motion.a
                href="/app-release.apk"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-8 py-4 font-body font-bold text-primary-foreground transition-shadow hover:shadow-lg backdrop-blur-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download APK
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
