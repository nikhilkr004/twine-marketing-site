import { Link } from "react-router-dom";
import twineLogo from "@/assets/twine-logo.png";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <nav className="container mx-auto px-6 py-5 flex items-center gap-2.5">
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <img src={twineLogo} alt="Twine" width={36} height={36} className="w-9 h-9" />
        <span className="font-heading text-xl font-bold text-foreground">Twine</span>
      </Link>
    </nav>
    <main className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-pink font-body text-muted-foreground space-y-6 leading-relaxed">
        <p>Last updated: April 2026</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, email, and partner connection data. We also collect usage data to improve our services.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
        <p>Your information is used to provide and improve the Twine experience, including facilitating partner connections, delivering daily games, and enabling real-time doodle sharing.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">3. Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal data. Your doodles and messages are encrypted in transit and at rest.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">4. Sharing of Information</h2>
        <p>We do not sell your personal information. Data is only shared with your connected partner as part of the app's core functionality.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">5. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at privacy@twine-app.com.</p>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
