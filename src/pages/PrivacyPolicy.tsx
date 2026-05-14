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
      <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Privacy Policy for Twine</h1>
      <p className="font-body text-sm text-muted-foreground mb-8"><strong>Last Updated:</strong> 2026-05-14</p>

      <div className="font-body text-muted-foreground space-y-6 leading-relaxed">
        <p>
          Twine ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the application.
        </p>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the App includes:</p>

          <h3 className="font-heading text-xl font-semibold text-foreground mt-4">A. Personal Data</h3>
          <p>When you sign in using Google Sign-In, we collect your:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Profile picture</li>
          </ul>

          <h3 className="font-heading text-xl font-semibold text-foreground mt-4">B. Sensitive Data (Prominent Disclosure)</h3>
          <p>To provide the core functionalities of Twine, we require access to the following sensitive data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Location Data (Foreground and Background):</strong> We collect your precise (Fine) and approximate (Coarse) location to share your journey with your connected partner in real-time. This location sharing continues even when the app is in the background or closed.</li>
            <li><strong className="text-foreground">Contacts:</strong> We request access to your device's phone book/contacts to help you automatically find and pair with your partner. We do not store your entire contact list on our servers permanently; it is only used for matching.</li>
            <li><strong className="text-foreground">Images/Camera:</strong> We collect images you upload or take with your camera for profile avatars and for sharing photos or doodles with your partner.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Authenticate your account.</li>
            <li>Connect you with your designated partner.</li>
            <li>Share your real-time location and status with your connected partner.</li>
            <li>Send you push notifications regarding partner updates or messages.</li>
            <li>Enable the drawing/doodling and home screen widget features.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-foreground">3. Disclosure of Your Information</h2>
          <p>We do not share your personal information with third parties except:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">With Your Connected Partner:</strong> The core purpose of Twine is to share your status, location, and messages exclusively with the one partner you connect with.</li>
            <li><strong className="text-foreground">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-foreground">4. Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. Your data is stored securely using Firebase (Firestore, Realtime Database, Cloud Storage). While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-foreground">5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:codly360@gmail.com" className="text-primary hover:underline">codly360@gmail.com</a></p>
        </section>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
