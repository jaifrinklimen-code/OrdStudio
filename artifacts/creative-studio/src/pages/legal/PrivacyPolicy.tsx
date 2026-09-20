import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — OrdStudio"
        description="Review OrdStudio privacy policy. Understand the policies, terms, and guidelines for utilizing our AI design and creation suite."
        canonicalPath="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Privacy Policy
        </h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 1, 2026</p>
        
        <div className="space-y-8 text-white/60 leading-relaxed">
          
<section>
  <h2>1. Introduction</h2>
  <p>Welcome to OrdStudio ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our web application, including our AI-powered presentation, writing, and sticker generation tools.</p>
  <p>By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.</p>
</section>

<section>
  <h2>2. Information We Collect</h2>
  <p>We collect information that you provide directly to us when registering for an account, using our creative tools, or communicating with support. This includes:</p>
  <ul>
    <li><strong>Account Information:</strong> Name, email address, password, profile picture, and authentication tokens (e.g., from Google OAuth via Supabase).</li>
    <li><strong>User Content:</strong> Presentation files, text prompts, document drafts, images uploaded for sticker reference, and vector drawings created on our canvas editor.</li>
  </ul>
  <p>We also automatically collect certain technical data when you interact with our website:</p>
  <ul>
    <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, referral URLs, pages viewed, features used, and timing of your actions.</li>
    <li><strong>Cookies:</strong> Essential session cookies, analytics cookies, and marketing cookies. Please see our Cookie Policy for detailed control options.</li>
  </ul>
</section>

<section>
  <h2>3. How We Use Your Information</h2>
  <p>We utilize the collected information to deliver, improve, and secure our AI creative platform. Specifically, we use it for:</p>
  <ul>
    <li><strong>Service Delivery:</strong> Managing your account, executing AI presentations, rendering vector graphics, and exporting files.</li>
    <li><strong>AI Processing:</strong> Passing your input prompts to third-party AI service providers used to provide specific AI features to generate sticker visuals and slide contents. Your uploaded assets are processed strictly to fulfill your generation requests.</li>
    <li><strong>Product Optimization:</strong> Analyzing usage metrics to find performance bottlenecks, fix software errors, and improve layout heuristics.</li>
    <li><strong>Security & Abuse Prevention:</strong> Enforcing our terms of service, defending against spam or automated attacks, and preventing illicit use of our AI engines.</li>
    <li><strong>Communication:</strong> Sending transaction notifications, critical system alerts, and marketing newsletters (which you can opt out of at any time).</li>
  </ul>
</section>

<section>
  <h2>4. Information Sharing & Third Parties</h2>
  <p>We do not sell your personal data. We only share information with third parties in the following scenarios:</p>
  <ul>
    <li><strong>Service Providers:</strong> We work with trusted vendors for hosting (Supabase, databases), payment gateway processing, analytics, and customer support.</li>
    <li><strong>AI APIs:</strong> When you generate text or graphics, we pass your text prompts to third-party AI service providers. Your prompts are governed by their respective API privacy policies.</li>
    <li><strong>Legal Compliance:</strong> We may disclose data if required by law, subpoena, or government regulation, or to protect the safety and rights of our users.</li>
  </ul>
</section>

<section>
  <h2>5. Data Security & Storage</h2>
  <p>We implement industry-standard administrative, technical, and physical security measures to safeguard your account data. All network communication is encrypted using Transport Layer Security (TLS). Data is stored in secure data centers with modern access controls. However, no transmission over the internet or storage system is 100% secure, and we cannot guarantee absolute safety.</p>
</section>

<section>
  <h2>6. Your Privacy Rights</h2>
  <p>Depending on your location and applicable law, you may have rights concerning access, correction, deletion, portability, restriction, or objection to certain processing of your personal information.</p>
  <ul>
    <li><strong>Access & Portability:</strong> The right to request copies of the personal data we hold about you.</li>
    <li><strong>Correction:</strong> The right to request correction of inaccurate or incomplete personal records.</li>
    <li><strong>Deletion (Right to be Forgotten):</strong> The right to request deletion of your account and all associated designs from our servers.</li>
    <li><strong>Restriction of Processing:</strong> The right to object to or limit certain processing of your information.</li>
  </ul>
  <p>To exercise these rights, please submit a request to ordinance37@gmail.com. We will respond within legal deadlines.</p>
</section>

<section>
  <h2>7. Data Retention</h2>
  <p>We retain your personal data for as long as you maintain an active account, or as required to fulfill the purposes outlined in this policy. When you delete your account, we will delete or anonymize personal information and associated projects within a reasonable period, subject to applicable legal, security, backup, and compliance requirements.</p>
</section>

<section>
  <h2>8. Children's Privacy</h2>
  <p>Our platform is not designed for or targeted to children under the age of 13. We do not knowingly collect personal data from anyone under 13. If we become aware that we have collected such data, we will take immediate steps to delete it from our systems.</p>
</section>

<section>
  <h2>9. Changes to This Privacy Policy</h2>
  <p>We may update this Privacy Policy from time to time to reflect changes in our technology, business practices, or legal obligations. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date at the top of the policy.</p>
</section>

<section>
  <h2>10. Contact Us</h2>
  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please write to us at ordinance37@gmail.com.</p>
</section>

        </div>
      </div>
    </>
  );
}