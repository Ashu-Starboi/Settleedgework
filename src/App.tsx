/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  ChevronDown, 
  HelpCircle, 
  ArrowRight,
  Shield,
  UserCheck,
  FileText,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type PageType = 'credit-card' | 'personal-loan';

interface FormData {
  loanType: string;
  outstandingAmount: string;
  isOverdue: string;
  incomeRange: string;
  phone: string;
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium text-slate-800 gap-4 cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-slate-600 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <button 
        onClick={() => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="mb-8 flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Back to Home
      </button>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: 25-02-2026</p>
      
      <div className="max-w-none space-y-6 text-slate-600">
        <p>Welcome to SettleEdge. This Privacy Policy explains how we collect, use, store, and share information when you visit our website or submit your details through our eligibility form.</p>
        
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Loan type</li>
            <li>Total outstanding amount</li>
            <li>Overdue status</li>
            <li>Monthly income range</li>
            <li>Phone number</li>
            <li>Any other information you voluntarily provide during calls or follow-up</li>
          </ul>
          <p className="mt-3">We may also collect basic website usage information such as IP address, browser/device information, and page activity through cookies, analytics tools, or advertising tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Why We Collect Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Review whether your case may be suitable for our services</li>
            <li>Contact you by phone, SMS, WhatsApp, or email</li>
            <li>Respond to your enquiry</li>
            <li>Improve our website, ads, and lead handling</li>
            <li>Maintain internal records and protect against misuse or fraud</li>
            <li>Comply with legal or regulatory requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Contact You</h2>
          <p>By submitting the form, you consent to us contacting you regarding your enquiry through:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>phone call</li>
            <li>SMS</li>
            <li>WhatsApp</li>
            <li>email, if provided</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Sharing of Information</h2>
          <p>We do not sell your personal information.</p>
          <p className="mt-2">We may share your information only with:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>our internal team and service providers who help us operate the website or handle enquiries</li>
            <li>technology, analytics, hosting, CRM, telephony, or advertising providers</li>
            <li>legal or regulatory authorities if required by law</li>
            <li>professional advisors where necessary for business, compliance, or dispute resolution</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Google Ads, Analytics, and Tracking</h2>
          <p>Our website may use Google Ads, analytics tools, cookies, pixels, or similar technologies to measure traffic, form submissions, and ad performance. These tools may collect device, browser, IP, or interaction data.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
          <p>We keep your information only for as long as reasonably necessary for enquiry handling, internal records, legal compliance, dispute resolution, or service improvement.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">7. Data Security</h2>
          <p>We use reasonable technical and organizational measures to protect your information. However, no internet transmission or storage system is completely secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">8. Your Rights</h2>
          <p>Subject to applicable law, you may request access, correction, update, or deletion of your personal information, or withdraw consent for future communications, by contacting us.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">9. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">10. Children</h2>
          <p>Our website and services are not intended for children.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised “Last updated” date.</p>
        </section>
      </div>
    </div>
  );
};

const SuccessScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Application Received!</h1>
      <p className="text-slate-600 mb-8">
        Thank you for checking your eligibility. Our team will review your details and call you back as soon as possible.
      </p>
      <button 
        onClick={onBack}
        className="text-primary font-semibold hover:underline cursor-pointer"
      >
        Back to Home
      </button>
    </motion.div>
  </div>
);

export default function App() {
  const [view, setView] = useState<'home' | 'privacy'>('home');
  const [pageType, setPageType] = useState<PageType>('credit-card');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    loanType: '',
    outstandingAmount: '',
    isOverdue: '',
    incomeRange: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Webhook URL from environment variable
  const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

  useEffect(() => {
    if (!WEBHOOK_URL) {
      console.warn('VITE_WEBHOOK_URL is not defined. Form submissions will fail. Please set this environment variable in your deployment settings.');
    }
  }, [WEBHOOK_URL]);

  // Detect URL params for versioning
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type === 'personal-loan') setPageType('personal-loan');
    else setPageType('credit-card'); // Default to credit-card if not specified or general
  }, []);

  // Handle view state based on URL hash for better back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setView('privacy');
      } else {
        setView('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.loanType) newErrors.loanType = 'Required';
    if (!formData.outstandingAmount) newErrors.outstandingAmount = 'Required';
    if (!formData.isOverdue) newErrors.isOverdue = 'Required';
    if (!formData.incomeRange) newErrors.incomeRange = 'Required';
    
    // Indian Phone Number Validation (starts with 6-9, 10 digits)
    if (!formData.phone) {
      newErrors.phone = 'Required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (validate()) {
      setIsSubmitting(true);
      
      try {
        if (!WEBHOOK_URL || WEBHOOK_URL === 'YOUR_WEBHOOK_URL_HERE') {
          throw new Error('Form submission is not configured. Please set the VITE_WEBHOOK_URL environment variable.');
        }

        const params = new URLSearchParams();
        params.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
        params.append('loanType', formData.loanType);
        params.append('totalOutstanding', formData.outstandingAmount);
        params.append('overdueStatus', formData.isOverdue);
        params.append('monthlyIncomeRange', formData.incomeRange);
        params.append('phoneNumber', formData.phone);
        params.append('landingPageSource', pageType);

        const responsePromise = fetch(WEBHOOK_URL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        });

        // Optimistic UI: If the request takes longer than 2 seconds, 
        // we assume it will succeed and show the success screen to the user.
        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 2000));

        await Promise.race([responsePromise, timeoutPromise]);

        // Transition to success state
        setSubmitted(true);
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Process response in background
        responsePromise.then(async (res) => {
          try {
            const result = await res.json();
            if (result && (result.ok === false)) {
              console.error('Background submission error:', result.error);
            }
          } catch (e) {
            // Ignore background parsing errors
          }
        }).catch(err => {
          console.error('Background fetch error:', err);
        });

      } catch (error) {
        console.error('Submission error:', error);
        setSubmitError('Failed to connect to the server. Please check your internet or try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const headlines = {
    'credit-card': "Get a Free Loan Settlement Eligibility Check",
    'personal-loan': "Get a Free Loan Settlement Eligibility Check"
  };

  const subheadline = "For overdue credit card dues and personal loans only. Our team will review your details and call you back as soon as possible.";
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 py-3 md:py-4 px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => { setView('home'); setSubmitted(false); window.location.hash = ''; }}
            className="flex items-center gap-1.5 md:gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">SettleEdge</span>
          </button>
          <div className="flex items-center gap-3 md:gap-4 text-sm font-medium text-slate-600">
            <a href="tel:+917291009145" className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              <PhoneCall className="h-4 w-4" />
              <span className="hidden sm:inline">+917291009145</span>
            </a>
          </div>
        </div>
      </header>

      {view === 'privacy' ? (
        <PrivacyPolicy />
      ) : submitted ? (
        <SuccessScreen onBack={() => { setSubmitted(false); window.location.hash = ''; }} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-white to-slate-50 pt-8 pb-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Shield className="h-4 w-4" />
                  Unsecured Loan Specialist
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  {headlines[pageType]}
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                  {subheadline}
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Quick Review</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Expert Guidance</span>
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <div id="lead-form" className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100 relative">
                <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Check Your Eligibility</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Loan Type</label>
                    <select 
                      className={`input-field ${errors.loanType ? 'border-red-500' : ''}`}
                      value={formData.loanType}
                      onChange={(e) => setFormData({...formData, loanType: e.target.value})}
                    >
                      <option value="">Select Loan Type</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Personal Loan">Personal Loan</option>
                    </select>
                    {errors.loanType && <p className="text-red-500 text-xs mt-1">{errors.loanType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Total Outstanding Amount (₹)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 5,00,000"
                      className={`input-field ${errors.outstandingAmount ? 'border-red-500' : ''}`}
                      value={formData.outstandingAmount}
                      onChange={(e) => setFormData({...formData, outstandingAmount: e.target.value})}
                    />
                    {errors.outstandingAmount && <p className="text-red-500 text-xs mt-1">{errors.outstandingAmount}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Is your loan overdue?</label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="flex-1 flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                          <input 
                            type="radio" 
                            name="overdue" 
                            value={opt}
                            checked={formData.isOverdue === opt}
                            onChange={(e) => setFormData({...formData, isOverdue: e.target.value})}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="font-medium">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.isOverdue && <p className="text-red-500 text-xs mt-1">{errors.isOverdue}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Monthly Income Range</label>
                    <select 
                      className={`input-field ${errors.incomeRange ? 'border-red-500' : ''}`}
                      value={formData.incomeRange}
                      onChange={(e) => setFormData({...formData, incomeRange: e.target.value})}
                    >
                      <option value="">Select Range</option>
                      <option value="Below 25k">Below ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="Above 1L">Above ₹1,00,000</option>
                    </select>
                    {errors.incomeRange && <p className="text-red-500 text-xs mt-1">{errors.incomeRange}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                      <input 
                        type="tel" 
                        placeholder="10-digit number"
                        className={`input-field pl-14 ${errors.phone ? 'border-red-500' : ''}`}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div className="pt-2">
                    {submitError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        <p>{submitError}</p>
                      </div>
                    )}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Free Eligibility Check <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Us?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: ShieldCheck, title: "No False Promises", desc: "We provide realistic assessments based on your current financial situation." },
                  { icon: UserCheck, title: "Unsecured Only", desc: "Specialized focus on credit cards and personal loans for better results." },
                  { icon: FileText, title: "Clear Process", desc: "Understand every step of the settlement process before making any payments." },
                  { icon: Clock, title: "Fast Callback", desc: "Our team will review your details and call you back as soon as possible." }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                      <Icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
                {[
                  { step: "01", title: "Fill the Form", desc: "Provide basic details about your overdue loans and income." },
                  { step: "02", title: "Speak with Team", desc: "Our experts will call you to understand your financial stress." },
                  { step: "03", title: "Find Suitability", desc: "Get a clear answer on whether your case is eligible for settlement." }
                ].map((item, i) => (
                  <div key={i} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 justify-center mb-8">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-2">
                <FAQItem 
                  question="Is this only for credit cards and personal loans?" 
                  answer="Yes, we specialize exclusively in unsecured loans like credit cards and personal loans. We do not handle home loans or any other secured loans."
                />
                <FAQItem 
                  question="Do I need to already be overdue?" 
                  answer="Yes, settlement is typically an option for loans that are already overdue or in default. If you are current on your payments, we can discuss future options."
                />
                <FAQItem 
                  question="How soon will I get a call?" 
                  answer="We pride ourselves on speed. Our team will review your details and call you back as soon as possible."
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold tracking-tight">SettleEdge</span>
              </div>
              <p className="text-sm leading-relaxed">
                Helping Indian borrowers navigate the stress of overdue unsecured loans with legal and ethical settlement solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:+917291009145" className="hover:text-white transition-colors cursor-pointer">
                    Phone: +917291009145
                  </a>
                </li>
                <li>
                  <a href="mailto:settleedge@gmail.com" className="hover:text-white transition-colors cursor-pointer">
                    Email: settleedge@gmail.com
                  </a>
                </li>
                <li>Office: Rohini, Delhi, India</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => { window.location.hash = 'privacy'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <a href="#lead-form" onClick={() => { window.location.hash = ''; }} className="hover:text-white transition-colors cursor-pointer">
                    Check Eligibility
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Disclaimer</h4>
              <p className="text-[10px] leading-relaxed">
                Loan settlement is subject to lender approval and individual eligibility. We do not guarantee a specific settlement amount or outcome. This service is for overdue unsecured loans only.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} SettleEdge. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      {view === 'home' && (
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white border-t border-slate-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
          <a 
            href="#lead-form" 
            className="block w-full btn-primary py-3 text-sm cursor-pointer"
          >
            Get Free Eligibility Check
          </a>
        </div>
      )}
    </div>
  );
}
