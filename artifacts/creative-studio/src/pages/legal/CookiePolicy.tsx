import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy — OrdStudio"
        description="Review OrdStudio cookie policy. Understand the policies, terms, and guidelines for utilizing our AI design and creation suite."
        canonicalPath="/cookie-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <Breadcrumb items={[{ label: 'Cookie Policy' }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Cookie Policy
        </h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 1, 2026</p>
        
        <div className="space-y-8 text-white/60 leading-relaxed">
          
<section>
  <h2>1. What Are Cookies?</h2>
  <p>Cookies are small text files stored on your device (computer, tablet, or smartphone) by your web browser when you visit a website. They allow the website to recognize your device, remember your preferences, and store information about your activity to improve your user experience.</p>
  <p>We use both first-party cookies (set directly by OrdStudio) and third-party cookies (set by our partners, such as analytics and authentication providers).</p>
</section>

<section>
  <h2>2. How We Use Cookies</h2>
  <p>We use cookies and similar tracking technologies (like local storage and web beacons) to run our platform efficiently and provide a premium user experience. Specifically, cookies help us with:</p>
  <ul>
    <li><strong>Authentication:</strong> Keeping you logged into your account across sessions via Supabase.</li>
    <li><strong>Preferences:</strong> Remembering your UI choices, such as sidebar collapse state, preferred export options, and editor layout.</li>
    <li><strong>Analytics:</strong> Understanding how users navigate the site, which AI tools are most popular, and identifying page load latency.</li>
    <li><strong>Advertising:</strong> If advertising services are enabled on OrdStudio, advertising technologies may use cookies or similar technologies subject to applicable consent requirements and user privacy preferences.</li>
  </ul>
</section>

<section>
  <h2>3. Types of Cookies We Use</h2>
  <p>We categorize cookies into four main types:</p>
  <ol>
    <li><strong>Essential Cookies:</strong> These are strictly necessary for the core functionality of the website. Without these cookies, services like login, billing, and canvas editing cannot be provided.</li>
    <li><strong>Functional Cookies:</strong> These allow the Service to remember choices you make (like your username or preferred theme) and provide enhanced, more personal features.</li>
    <li><strong>Performance & Analytics Cookies:</strong> These collect anonymous information about how you use our platform. They help us monitor site performance and resolve technical bugs.</li>
    <li><strong>Targeting &amp; Advertising Cookies:</strong> These may be set by third-party advertising networks to deliver relevant ads, limit ad frequency, and track ad campaign performance, where advertising services are enabled.</li>
  </ol>
</section>

<section>
  <h2>4. Managing and Disabling Cookies</h2>
  <p>You have the right to decide whether to accept or reject non-essential cookies. You can manage your preferences through several methods:</p>
  <ul>
    <li><strong>Browser Settings:</strong> You can configure your web browser to block, delete, or alert you about cookies. Check your browser's "Help" menu for instructions.</li>
    <li><strong>Third-Party Opt-Out:</strong> You can opt-out of personalized advertising served by Google by visiting the Google Ads Settings page.</li>
  </ul>
  <p>Please note that disabling essential cookies will prevent you from logging in and utilizing our design tools.</p>
</section>

<section>
  <h2>5. Updates to This Cookie Policy</h2>
  <p>We may update this Cookie Policy periodically to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies and related technologies.</p>
</section>

<section>
  <h2>6. Contact Us</h2>
  <p>If you have any questions about our use of cookies, please email us at ordinance37@gmail.com.</p>
</section>

        </div>
      </div>
    </>
  );
}