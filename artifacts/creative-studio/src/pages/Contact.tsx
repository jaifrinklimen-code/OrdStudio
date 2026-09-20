import { useState } from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { secureFetch } from '@/lib/secureFetch';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Support', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    secureFetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    .then(async r => {
      if (!r.ok) {
        const errData = await r.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to submit form');
      }
      return r.json();
    })
    .then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: 'General Support', message: '' });
    })
    .catch(err => {
      setErrors({ submit: err.message || 'Failed to submit contact request.' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <>
      <SEOHead
        title="Contact OrdStudio — Get in Touch"
        description="Have questions about OrdStudio? Contact our team for support, partnerships, or feedback. We typically respond within 24 hours."
        canonicalPath="/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumb items={[{ label: 'Contact' }]} />

        {/* Hero Section */}
        <div className="text-center mt-12 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Get in Touch
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Have questions about OrdStudio, need technical support, or want to discuss enterprise licensing? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                <MessageSquare className="w-5 h-5 text-purple-400" />
                Contact Info
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xs text-white/40 uppercase font-medium">Email Support</h3>
                    <p className="text-white font-medium mt-0.5">ordinance37@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xs text-white/40 uppercase font-medium">Response Time</h3>
                    <p className="text-white font-medium mt-0.5">Under 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xs text-white/40 uppercase font-medium">Office Location</h3>
                    <p className="text-white font-medium mt-0.5">Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Box */}
            <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Support Hours
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Our support team operates Monday through Friday, 9:00 AM to 6:00 PM IST. For weekend support, we monitor urgent infrastructure inquiries.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 lg:col-span-2">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Message Sent Successfully!
                </h2>
                <p className="text-white/50 max-w-md mx-auto mb-8">
                  Thank you for reaching out. A support specialist will review your request and get back to you at the email address provided within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/60 mb-2">Subject</label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  >
                    <option value="General Support" className="bg-[#18181b] text-white">General Support</option>
                    <option value="Billing Inquiries" className="bg-[#18181b] text-white">Billing Inquiries</option>
                    <option value="Enterprise Sales" className="bg-[#18181b] text-white">Enterprise Sales</option>
                    <option value="Partnerships" className="bg-[#18181b] text-white">Partnerships</option>
                    <option value="Feedback" className="bg-[#18181b] text-white">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    placeholder="Describe your request in detail..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {errors.submit && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                    {errors.submit}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:shadow-[0_8px_24px_rgba(124,58,237,0.3)] text-white font-semibold py-3.5 rounded-xl transition-all ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}