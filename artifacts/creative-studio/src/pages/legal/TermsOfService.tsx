import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export default function TermsofService() {
  return (
    <>
      <SEOHead
        title="Terms of Service — OrdStudio"
        description="Review OrdStudio terms of service. Understand the policies, terms, and guidelines for utilizing our AI design and creation suite."
        canonicalPath="/terms-of-service"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal-content">
        <Breadcrumb items={[{ label: 'Terms of Service' }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Terms of Service
        </h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 1, 2026</p>
        
        <div className="space-y-8 text-white/60 leading-relaxed">
          
<section>
  <h2>1. Acceptance of Terms</h2>
  <p>By creating an account, accessing, or using the OrdStudio platform ("Service"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree with any part of these Terms, you are prohibited from using the Service.</p>
  <p>OrdStudio provides an AI-powered design platform containing presentation makers, copywriting assistants, sticker generators, and vector shape editing canvases. We reserve the right to modify these Terms at any time, and your continued usage constitutes acceptance of such changes.</p>
</section>

<section>
  <h2>2. Account Registration and Security</h2>
  <p>To use most features of the Service, you must register for an account. You agree to provide accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your account credentials (passwords, OAuth tokens) and for all activities that occur under your account.</p>
  <p>You must notify us immediately of any unauthorized use of your account or any other breach of security. OrdStudio will not be liable for any loss or damage arising from your failure to protect your login information.</p>
</section>

<section>
  <h2>3. License and Permitted Use</h2>
  <p>Subject to your compliance with these Terms, OrdStudio grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or commercial design needs. This license does not allow you to:</p>
  <ul>
    <li>Copy, modify, distribute, sell, or lease any part of our software, design algorithms, or proprietary code.</li>
    <li>Reverse engineer or attempt to extract the source code of the Service.</li>
    <li>Use bots, scrapers, or automated systems to extract assets or bypass rate limits.</li>
    <li>Use the Service to generate content that violates legal statutes, promotes violence, or constitutes harassment.</li>
  </ul>
</section>

<section>
  <h2>4. User Content & AI-Generated Content</h2>
  <p>You retain the rights you have in the text prompts, uploads, vector drawings, and other original content ("User Content") that you input or create within OrdStudio. Your rights may be subject to applicable law and the rights of third parties.</p>
  <p>Regarding AI-generated content (e.g., generated slides, generated copy, generated stickers):</p>
  <ul>
    <li><strong>Ownership:</strong> OrdStudio does not claim ownership of AI-generated outputs. Your use of such outputs remains subject to these Terms, applicable law, and any applicable third-party terms. Because legal protection for AI-generated content can vary by jurisdiction and circumstances, we do not guarantee that any particular output will qualify for copyright or other intellectual-property protection.</li>
    <li><strong>API Usage:</strong> To provide AI features, we may process your prompts and other required inputs through third-party AI service providers used by OrdStudio to generate requested outputs.</li>
    <li><strong>No Guarantee of Uniqueness:</strong> Because AI operates on probabilistic models, other users may input identical prompts and receive identical or highly similar outputs. OrdStudio makes no representation that AI outputs are eligible for copyright protection or trademark registration.</li>
  </ul>
</section>

<section>
  <h2>5. Prohibited Activities</h2>
  <p>When using OrdStudio, you agree not to engage in any activity that:</p>
  <ul>
    <li>Violates local, state, national, or international laws or regulations.</li>
    <li>Infringes on the intellectual property, privacy, or publicity rights of others.</li>
    <li>Uploads viruses, malware, or malicious code designed to disrupt the Service.</li>
    <li>Attempts to bypass rate limits, security controls, authentication mechanisms, or other technical protections of the Service.</li>
    <li>Generates sexually explicit, hateful, defamatory, or harmful content.</li>
  </ul>
</section>

<section>
  <h2>6. Service Access and Features</h2>
  <p>OrdStudio provides access to AI creative tools and vector workspace features. We reserve the right to add, modify, or retire features at our discretion to maintain service quality, performance, and reliability.</p>
</section>

<section>
  <h2>7. Service Availability & Disclaimers</h2>
  <p>THE SERVICE AND ALL AI-GENERATED OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ORDSTUDIO DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
  <p>We do not guarantee that the Service will be uninterrupted, error-free, or entirely secure, or that the AI-generated outputs will be accurate, reliable, or fit for any specific business purpose.</p>
</section>

<section>
  <h2>8. Limitation of Liability</h2>
  <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORDSTUDIO AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, INCURRED BY YOU, WHETHER IN AN ACTION IN CONTRACT OR TORT, ARISING FROM YOUR ACCESS TO OR USE OF THE SERVICE.</p>
</section>

<section>
  <h2>9. Governing Law & Jurisdiction</h2>
  <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any legal action arising from these Terms or your use of the Service must be brought in the courts located in San Francisco County, California.</p>
</section>

<section>
  <h2>10. Contact Information</h2>
  <p>If you have any questions or require clarification regarding these Terms of Service, please contact us at ordinance37@gmail.com.</p>
</section>

        </div>
      </div>
    </>
  );
}