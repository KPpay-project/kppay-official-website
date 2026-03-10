/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  Shield,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function PrivacyPolicy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-controller', title: '1. Data Controller' },
    { id: 'contact-dpo', title: '2. Contact Information of the DPO' },
    { id: 'personal-data', title: '3. Personal Data We Collect' },
    { id: 'purpose', title: '4. Purpose of Data Processing' },
    { id: 'legal-basis', title: '5. Legal Basis for Processing' },
    { id: 'sharing', title: '6. Sharing and Disclosure of Data' },
    { id: 'retention', title: '7. Data Retention Period' },
    { id: 'security', title: '8. Data Security' },
    { id: 'rights', title: '9. Your Rights' },
    { id: 'cookies', title: '10. Cookies and Similar Technologies' },
    { id: 'children', title: "11. Children's Privacy" },
    { id: 'changes', title: '12. Changes to the Privacy Policy' },
    { id: 'contact', title: '13. Contact' },
    { id: 'complaint', title: '14. Right to Lodge a Complaint' },
  ];

  return (
    <div className="min-h-screen bg-surface-secondary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Privacy Policy
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>English Version</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1BdD8q2od5fbVqvvtx4y_kv_7BDdNffVn/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-surface-secondary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all self-start"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-info/10 border-l-4 border-info sticky top-0 z-20 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto container-padding py-4">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
            <div className="text-sm text-text-primary">
              <strong className="font-semibold">Important:</strong> By using
              KPpay services, you agree to the practices described in this
              Privacy Policy.
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto container-padding py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-6 left-6 bg-brand-primary text-white p-4 rounded-full shadow-xl z-30 hover:bg-brand-secondary transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Sidebar Navigation */}
          <aside
            className={`lg:col-span-1 ${sidebarOpen
                ? 'fixed inset-0 z-20 bg-black/50 lg:relative lg:bg-transparent'
                : 'hidden lg:block'
              }`}
          >
            <div
              className={`${sidebarOpen
                  ? 'absolute right-0 top-0 bottom-0 w-80 overflow-y-auto'
                  : ''
                } lg:sticky lg:top-24`}
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full lg:h-auto">
                <h3 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 group hover:bg-surface-secondary text-text-secondary"
                    >
                      <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-text-primary">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  Introduction
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    This Privacy Policy describes the information we process to
                    provide the products and services available through KPpay
                    and the measures we have in place to protect them. It aims
                    to inform you about how we collect, use, and protect your
                    personal data, and about your rights under applicable data
                    protection laws.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    By using KPpay services, you agree to the practices
                    described in this Privacy Policy. Please read it carefully
                    and contact us if you have any questions.
                  </p>
                </div>
              </section>

              {/* Section 1: Data Controller */}
              <section id="data-controller" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  1. Data Controller
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    The data controller responsible for your personal data is
                    KPpay, a subsidiary of K-POLYGONE, located at 72 Rue
                    Faubourg Saint Honoré, 75008 Paris - France, registered
                    under number 26002277. You can contact us at:{' '}
                    <span className="font-semibold text-brand-primary">
                      contact@kppay.fr
                    </span>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: Contact Information of the DPO */}
              <section id="contact-dpo" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  2. Contact Information of the Data Protection Officer
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    You can contact our Data Protection Officer (DPO) at the
                    following email address:{' '}
                    <span className="font-semibold text-brand-primary">
                      kppay@k-Polygone.com
                    </span>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: Personal Data We Collect */}
              <section id="personal-data" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  3. Personal Data We Collect
                </h2>

                <h3 className="text-2xl font-semibold text-text-primary mb-4 mt-6">
                  3.1 Data Collected Directly
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We collect the following information when you create your
                  account and use our services:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Personal Details:
                        </strong>{' '}
                        Full name, date of birth, nationality, marital status,
                        professional situation, income, and assets.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Contact Information:
                        </strong>{' '}
                        Postal address, email address, phone number.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Contractual Information:
                        </strong>{' '}
                        Details about the products and services we have provided
                        to you.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Identification Documents:
                        </strong>{' '}
                        Copies of identification documents (national ID card,
                        passport), proof of address.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Financial Data:
                        </strong>{' '}
                        Details of your transactions, account movements, bank
                        account numbers, credit/debit card information.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Communications:
                        </strong>{' '}
                        Correspondence, emails, and recordings of telephone
                        conversations with our customer service.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-text-primary mb-4 mt-6">
                  3.2 Data Collected Indirectly
                </h3>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Location Data:
                        </strong>{' '}
                        IP address, location data from your mobile device.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Technical Data:
                        </strong>{' '}
                        Information about the device used (model, operating
                        system), unique device identifiers.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Usage Data:
                        </strong>{' '}
                        Information about how you use our services, including
                        interactions with our website and mobile application.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Purpose of Data Processing */}
              <section id="purpose" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  4. Purpose of Data Processing
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Your personal data is collected and processed for the
                  following purposes:
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  4.1 Contract Execution
                </h3>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Account Management:
                        </strong>{' '}
                        Creating and managing your KPpay account.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Transaction Processing:
                        </strong>{' '}
                        Executing payments, money transfers, and other financial
                        operations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Customer Service:
                        </strong>{' '}
                        Providing assistance, handling requests, and resolving
                        issues.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  4.2 Legal and Regulatory Compliance
                </h3>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Fraud Prevention:
                        </strong>{' '}
                        Preventing, detecting, and managing fraud.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Anti-Money Laundering and Counter-Terrorism Financing:
                        </strong>{' '}
                        Complying with legal obligations for monitoring and
                        reporting.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Compliance:
                        </strong>{' '}
                        Adhering to applicable laws, including tax and
                        regulatory requirements.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  4.3 Legitimate Interests
                </h3>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Service Improvement:
                        </strong>{' '}
                        Analyzing data to improve and personalize our products
                        and services.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">Security:</strong>{' '}
                        Protecting your information and our systems from
                        unauthorized access and cyberattacks.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Marketing:
                        </strong>{' '}
                        With your consent, informing you about offers,
                        promotions, and new services that may interest you.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Legal Basis for Processing */}
              <section id="legal-basis" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  5. Legal Basis for Processing
                </h2>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Contract Execution:
                        </strong>{' '}
                        Processing is necessary for the performance of the
                        contract you have with KPpay.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Legal Obligations:
                        </strong>{' '}
                        Processing is necessary to comply with legal obligations
                        to which KPpay is subject.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Legitimate Interests:
                        </strong>{' '}
                        Processing is necessary for the purposes of legitimate
                        interests pursued by KPpay, such as fraud prevention and
                        service improvement.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">Consent:</strong>{' '}
                        For specific purposes, we may request your prior
                        consent.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Sharing and Disclosure of Data */}
              <section id="sharing" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  6. Sharing and Disclosure of Data
                </h2>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  6.1 Internal Recipients
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  <strong className="text-text-primary">Internal Teams:</strong>{' '}
                  Only authorized employees have access to your data, limited to
                  their respective roles.
                </p>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  6.2 Partners and Service Providers
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may share your data with third parties for the following
                  reasons:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Service Providers:
                        </strong>{' '}
                        For hosting, payment processing, identity verification,
                        customer support, etc.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Financial Partners:
                        </strong>{' '}
                        Financial institutions involved in transaction
                        execution.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Public Authorities:
                        </strong>{' '}
                        To comply with legal and regulatory obligations.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  6.3 International Data Transfers
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your data may be transferred outside your country of
                  residence. In such cases, we ensure that:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        The recipient country provides an adequate level of data
                        protection recognized by relevant authorities.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        Appropriate safeguards are in place, such as standard
                        contractual clauses approved by data protection
                        authorities.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Data Retention Period */}
              <section id="retention" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  7. Data Retention Period
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your data is retained for the duration necessary for the
                  purposes for which it was collected:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Contractual Data:
                        </strong>{' '}
                        For the duration of our contractual relationship, then
                        archived for 7 years to comply with legal obligations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Marketing Data:
                        </strong>{' '}
                        Until you withdraw your consent or after a period of
                        inactivity.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Connection Logs:
                        </strong>{' '}
                        Retained for 1 year in compliance with legal
                        obligations.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Data Security */}
              <section id="security" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  8. Data Security
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your data against destruction, loss, alteration,
                  unauthorized disclosure, or access:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Encryption:
                        </strong>{' '}
                        Of sensitive data during transmission.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Access Controls:
                        </strong>{' '}
                        Restricted access to authorized personnel only.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Regular Testing:
                        </strong>{' '}
                        Security audits and penetration tests to detect
                        vulnerabilities.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 9: Your Rights */}
              <section id="rights" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  9. Your Rights
                </h2>
                <div className="space-y-6">
                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.1 Right of Access
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      You have the right to request access to the personal data
                      we hold about you.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.2 Right to Rectification
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      You can request the correction of inaccurate or incomplete
                      data.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.3 Right to Erasure
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      You have the right to request the deletion of your
                      personal data, subject to KPpay's legal obligations.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.4 Right to Restrict Processing
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      You can request the restriction of processing of your data
                      under certain circumstances.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.5 Right to Object
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      You have the right to object to the processing of your
                      data for legitimate reasons, including for direct
                      marketing purposes.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.6 Right to Data Portability
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      You can request to receive your data in a structured,
                      commonly used, and machine-readable format or have it
                      transmitted directly to another data controller.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.7 Withdrawal of Consent
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      For processing based on your consent, you may withdraw it
                      at any time.
                    </p>
                  </div>

                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      9.8 Exercising Your Rights
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      To exercise your rights, please contact us at:{' '}
                      <span className="font-semibold text-brand-primary">
                        kppay@k-Polygone.com
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10: Cookies and Similar Technologies */}
              <section id="cookies" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  10. Cookies and Similar Technologies
                </h2>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  10.1 Use of Cookies
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use cookies to:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>Ensure the functioning of the site.</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>Analyze site usage to improve our services.</div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        Personalize content and advertising, with your consent.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  10.2 Managing Cookies
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You can configure your browser to accept or refuse cookies.
                  Refusing certain cookies may affect your user experience.
                </p>
              </section>

              {/* Section 11: Children's Privacy */}
              <section id="children" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  11. Children's Privacy
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    Our services are not intended for individuals under the age
                    of 18. We do not knowingly collect personal data from
                    children.
                  </p>
                </div>
              </section>

              {/* Section 12: Changes to the Privacy Policy */}
              <section id="changes" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  12. Changes to the Privacy Policy
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    We may update this Privacy Policy. Any significant changes
                    will be notified to you via email or a notice on our
                    website.
                  </p>
                </div>
              </section>

              {/* Section 13: Contact */}
              <section id="contact" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  13. Contact
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have any questions or concerns regarding this Privacy
                  Policy, please contact us:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">Address:</strong>{' '}
                        [KPpay Address]
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">Email:</strong>{' '}
                        <span className="text-brand-primary font-semibold">
                          kppay@k-Polygone.com
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">Phone:</strong>{' '}
                        [Customer Service Phone Number]
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 14: Right to Lodge a Complaint */}
              <section id="complaint" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  14. Right to Lodge a Complaint
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    If you believe your rights have not been respected, you have
                    the right to lodge a complaint with the relevant supervisory
                    authority in your country.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
