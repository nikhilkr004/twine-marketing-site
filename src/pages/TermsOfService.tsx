import { Link } from "react-router-dom";
import twineLogo from "@/assets/twine-logo.png";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <nav className="container mx-auto px-6 py-5 flex items-center gap-2.5">
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <img src={twineLogo} alt="Twine" width={36} height={36} className="w-9 h-9" />
        <span className="font-heading text-xl font-bold text-foreground">Twine</span>
      </Link>
    </nav>
    <main className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
      <div className="prose prose-pink font-body text-muted-foreground space-y-6 leading-relaxed">
        <p>Last updated: April 2026</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
        <p>By using Twine, you agree to these Terms of Service. If you do not agree, please do not use the app.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">2. User Accounts</h2>
        <p>You must be at least 18 years old to create an account. You are responsible for maintaining the security of your account credentials.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">3. Acceptable Use</h2>
        <p>You agree to use Twine for its intended purpose — connecting with your partner. Any misuse, harassment, or sharing of inappropriate content is strictly prohibited.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">4. Content Ownership</h2>
        <p>You retain ownership of all doodles, messages, and content you create. By using Twine, you grant us a license to store and transmit this content to your partner.</p>
        <h2 className="font-heading text-2xl font-bold text-foreground">5. Termination</h2>
        <p>We reserve the right to suspend or terminate accounts that violate these terms. You may delete your account at any time.</p>
      </div>
    </main>
  </div>
);

export default TermsOfService;
