/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  FileText,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function TermsAndConditions() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', part: null },
    { id: 'part-one', title: 'Part One: The Services', part: 'PART ONE' },
    {
      id: 'article-1',
      title: 'Article 1: General Provisions',
      part: 'PART ONE',
    },
    { id: 'article-2', title: 'Article 2: Account Creation', part: 'PART ONE' },
    {
      id: 'article-3',
      title: 'Article 3: Usage Restrictions',
      part: 'PART ONE',
    },
    { id: 'article-4', title: 'Article 4: Card Reader', part: 'PART ONE' },
    { id: 'article-5', title: 'Article 5: User Obligations', part: 'PART ONE' },
    { id: 'part-two', title: 'Part Two: Payment Processing', part: 'PART TWO' },
    { id: 'article-6', title: 'Article 6: Fund Management', part: 'PART TWO' },
    { id: 'article-7', title: 'Article 7: Reserve', part: 'PART TWO' },
    { id: 'article-8', title: 'Article 8: Chargebacks', part: 'PART TWO' },
    {
      id: 'article-9',
      title: 'Article 9: Refunds and Returns',
      part: 'PART TWO',
    },
    {
      id: 'article-10',
      title: 'Article 10: Tax Obligations',
      part: 'PART TWO',
    },
    {
      id: 'part-three',
      title: 'Part Three: Legal Provisions',
      part: 'PART THREE',
    },
    {
      id: 'article-11',
      title: 'Article 11: KPpay Responsibilities',
      part: 'PART THREE',
    },
    {
      id: 'article-12',
      title: 'Article 12: Indemnification',
      part: 'PART THREE',
    },
    {
      id: 'article-13',
      title: 'Article 13: Confidentiality',
      part: 'PART THREE',
    },
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
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Terms and Conditions of Use
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>Effective Date: October 2024</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1TyvNCMm5NW9ZcURzel4nAfIvHEJemod2/view?usp=drive_link"
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
              <strong className="font-semibold">Important:</strong> By using our
              Services, you agree to these Terms in their entirety, as well as
              our Privacy Policy and License Agreement.
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
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 group ${section.part
                          ? 'hover:bg-surface-secondary text-text-secondary'
                          : 'font-semibold text-brand-primary hover:bg-brand-primary/5'
                        }`}
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
                    These Terms and Conditions of Use ("Terms") constitute a
                    legal agreement between you ("User") and KPpay, a subsidiary
                    of K-POLYGONE, governing your use of our payment platform,
                    associated services, mobile application, and card readers
                    ("Services"). By using our Services, you agree to these
                    Terms in their entirety, as well as our Privacy Policy.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    This agreement is divided into three parts:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-text-secondary ml-4">
                    <li>
                      Part One: General terms governing your use of the
                      Services.
                    </li>
                    <li>
                      Part Two: Specific terms relating to payment processing.
                    </li>
                    <li>
                      Part Three: Additional legal provisions determining the
                      relationship between you and KPpay.
                    </li>
                  </ol>
                </div>
              </section>

              {/* PART ONE */}
              <section id="part-one" className="mb-12 scroll-mt-24">
                <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6 rounded-lg mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    PART ONE – THE SERVICES
                  </h2>
                </div>

                {/* Article 1 */}
                <article id="article-1" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      Article 1
                    </span>
                    General Provisions
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.1. Purpose of the Services
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay allows you to accept payment card transactions
                        ("Transactions") from your customers ("Cardholders")
                        using a compatible device, our mobile application
                        ("Program"), and, if applicable, a card reader provided
                        by KPpay ("Card Reader").
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.2. Use of Card Readers
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You can process Transactions using a Card Reader
                        provided by KPpay or by manually entering payment card
                        data. The Card Reader is used to authorize and process
                        Transactions between the Cardholder's card and our
                        secure servers.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.3. Funds Settlement
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Funds resulting from your Transactions are credited to a
                        dedicated account with KPpay. After deducting applicable
                        fees ("Fees"), we transfer the due amounts to your
                        registered bank account ("Payout"). Current Fees and
                        pricing plans ("Plans") are available on our website
                        https://kppay.co.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.4. Service Availability
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay commits to providing Services continuously, 24/7.
                        However, we may temporarily suspend Services for
                        maintenance, legal compliance, or in cases of suspected
                        fraud, money laundering, or terrorist financing.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.5. Transaction History
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        We provide you with a detailed history of your
                        Transactions, along with analytical tools to manage your
                        activity.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.6. Service Updates
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay reserves the right to modify or update the
                        Services at any time, effective immediately and without
                        prior notice.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        1.7. Subcontracting
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay may engage third parties to fulfill certain
                        obligations under these Terms.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 2 */}
                <article id="article-2" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      Article 2
                    </span>
                    Account Creation and Management
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        2.1. Registration
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        To use the Services, you must create a KPpay account
                        ("Account"). You certify that all information provided
                        during registration is accurate and complete. Only one
                        Account is allowed per User, unless KPpay explicitly
                        agrees to additional accounts or sub-accounts.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        2.2. Mandatory Information
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must choose a descriptive identifier that clearly
                        identifies you or your business. A valid phone number is
                        also required. These details may appear on the
                        Cardholder's bank statement.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        2.3. Verification and Compliance
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        After registration, KPpay may conduct credit checks and
                        request additional documents to comply with legal
                        obligations regarding anti-money laundering and
                        counter-terrorism financing. Until your identity is
                        fully verified, KPpay may suspend or terminate Services
                        at any time.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        2.4. Inactive Account
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        If your Account is inactive for two (2) consecutive
                        years, KPpay will send you a notification. Without a
                        response within thirty (30) days, the Account will be
                        closed, and funds will be handled according to
                        applicable laws.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 3 */}
                <article id="article-3" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      Article 3
                    </span>
                    Usage Restrictions
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        3.1. Technical Requirements
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Using the Services requires a compatible device and an
                        Internet connection. Costs related to the device and
                        connection are your responsibility.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        3.2. Eligibility Conditions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You declare that you are at least 18 years old if an
                        individual, or a legal entity acting within your
                        professional capacity, legally authorized to operate in
                        countries where KPpay is active ("Territories").
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        3.3. Compliance with Network Rules
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        By accepting these Terms, you also agree to the rules of
                        card networks ("Network Rules"), including those of
                        Visa, Mastercard, and American Express. Certain
                        obligations may require additional agreements with
                        acquiring banks or Card Schemes.
                      </p>
                    </div>

                    <div className="border-l-2 border-error pl-4 bg-error-light p-4 rounded">
                      <h4 className="font-semibold text-error mb-2">
                        3.4. Prohibited Activities
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        It is strictly forbidden to use the Services for
                        Transactions related to illegal, offensive, or
                        non-compliant products or services under applicable
                        laws. KPpay reserves the right to determine, at its sole
                        discretion, if an activity is prohibited.
                      </p>
                    </div>

                    <div className="border-l-2 border-warning pl-4 bg-warning/10 p-4 rounded">
                      <h4 className="font-semibold text-warning mb-2">
                        3.5. Sanctions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        In case of violation of these Terms, KPpay may refuse,
                        suspend, or cancel Transactions, close your Account, and
                        charge administrative fees up to EUR 200.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 4 */}
                <article id="article-4" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      Article 4
                    </span>
                    Card Reader and Software
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        4.1. Acquisition of the Card Reader
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You may purchase, rent, or borrow a Card Reader from
                        KPpay under conditions available on our website.
                        Specific terms may apply.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        4.2. Single Use
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Only one Card Reader is allowed per Account unless
                        specifically agreed upon by KPpay for additional
                        equipment.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        4.3. Usage Restrictions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Selling, renting, transferring, modifying, or using the
                        Card Reader for purposes other than those provided by
                        KPpay is prohibited.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        4.4. Return
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        In case of termination of the Terms or replacement
                        request, you must return the Card Reader to KPpay.
                        Return shipping costs are your responsibility.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        4.5. Updates
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must install all Program updates to continue using
                        the Services.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 5 */}
                <article id="article-5" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded text-sm">
                      Article 5
                    </span>
                    User Obligations
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.1. Compliant Use
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must use the Card Readers provided by KPpay in
                        accordance with these Terms.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.2. Card Verification
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You are responsible for verifying the validity of
                        payment cards and refusing any suspicious or
                        non-compliant cards.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.3. Sales Conditions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You cannot impose a minimum amount higher than EUR 1 per
                        Transaction. You must offer Cardholders conditions
                        equivalent to those offered to cash-paying customers and
                        not charge additional fees.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.4. Error Management
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must monitor your Account and refund any amounts
                        received in error.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.5. Information Updates
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must inform KPpay of any changes concerning your
                        business or personal information.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.6. Display
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must visibly display any promotional material
                        provided by KPpay, including Card Scheme logos.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.7. Receipts
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must provide a receipt to the Cardholder, either on
                        paper or electronically, in compliance with applicable
                        laws.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.8. Access Security
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You are responsible for the security of your login
                        credentials and must immediately inform KPpay in case of
                        unauthorized access.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.9. PCI-DSS Compliance
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must comply with PCI-DSS security standards related
                        to the storage, processing, and transmission of payment
                        card data.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        5.10. Statement Verification
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must regularly verify statements provided by KPpay
                        and report any discrepancies within twenty-five (25)
                        business days.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* PART TWO */}
              <section id="part-two" className="mb-12 scroll-mt-24">
                <div className="bg-gradient-to-r from-brand-accent to-brand-primary text-white p-6 rounded-lg mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    PART TWO – PAYMENT PROCESSING
                  </h2>
                </div>

                {/* Article 6 */}
                <article id="article-6" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded text-sm">
                      Article 6
                    </span>
                    Fund Management
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        6.1. Authorization
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You authorize KPpay and partner financial institutions
                        to hold, receive, and disburse funds on your behalf.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        6.2. No Interest
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        No interest or other income will be paid to you on funds
                        held by KPpay.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        6.3. Manually Entered Transactions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        For manually entered Transactions exceeding a certain
                        threshold over seven days, KPpay may withhold excess
                        funds for thirty (30) days before disbursement.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        6.4. Funds Disbursement
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay will not disburse funds until corresponding
                        amounts have been received from relevant financial
                        institutions.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        6.5. Access Restriction
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay may restrict access to your funds in case of
                        investigation, dispute, or legal injunction.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 7 */}
                <article id="article-7" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded text-sm">
                      Article 7
                    </span>
                    Reserve
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        7.1. Reserve Creation
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay may create a reserve to ensure the fulfillment of
                        your obligations by temporarily withholding funds.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        7.2. Use of Reserve
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        The reserve may be used by KPpay to offset any amounts
                        you owe.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        7.3. Payment Obligations
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        If you owe an amount exceeding the reserve, you must pay
                        the difference within three (3) business days. KPpay is
                        authorized to debit due amounts from your registered
                        bank accounts or cards.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 8 */}
                <article id="article-8" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded text-sm">
                      Article 8
                    </span>
                    Chargebacks
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        8.1. Definitions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        A chargeback is an amount deducted from your Account in
                        case of a disputed, rejected, unauthorized, or illegal
                        Transaction.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        8.2. Assistance
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must assist KPpay in any Transaction investigation
                        by providing required documents within ten (10) business
                        days.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        8.3. Financial Responsibility
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        If a chargeback is confirmed, you will be debited the
                        initial Transaction amount plus applicable fees.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        8.4. Corrective Measures
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        In case of excessive chargebacks, KPpay may delay
                        payouts, increase the reserve, suspend Services, or
                        close your Account.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 9 */}
                <article id="article-9" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded text-sm">
                      Article 9
                    </span>
                    Refunds and Returns
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        9.1. Refund Policy
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must process refunds in accordance with these Terms
                        and Network Rules.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        9.2. Obligations
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must communicate a clear return policy, not refund
                        in cash (unless legally required), and not accept cash
                        in exchange for a refund.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        9.3. Refund Amount
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        The refunded amount must not exceed the initial
                        Transaction amount, including taxes.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        9.4. Procedure
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        In case of an exchange or partial return, you must
                        refund the initial Transaction and initiate a new one.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        9.5. Timeframe
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Refunds via KPpay are allowed within thirty (30) days
                        from the Transaction date.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        9.6. Restrictions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay may disable your refund option in case of abuse.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 10 */}
                <article id="article-10" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded text-sm">
                      Article 10
                    </span>
                    Tax Obligations
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <p className="text-text-secondary leading-relaxed">
                        You are responsible for determining and paying
                        applicable taxes related to your use of the Services.
                        KPpay may be required to report information to tax
                        authorities as per the law.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* PART THREE */}
              <section id="part-three" className="mb-12 scroll-mt-24">
                <div className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white p-6 rounded-lg mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    PART THREE – ADDITIONAL LEGAL PROVISIONS
                  </h2>
                </div>

                {/* Article 11 */}
                <article id="article-11" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 11
                    </span>
                    KPpay's Responsibilities
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.1. Limitation of Liability
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is not liable for direct or indirect losses
                        resulting from compliance with legal obligations, force
                        majeure events, or your breach of these Terms.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.2. Indirect Damages
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is not liable for indirect losses, including loss
                        of profit or reputation.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.3. Civil Liability
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Nothing in these Terms excludes KPpay's liability in
                        case of gross negligence or willful misconduct.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.4. Third-Party Actions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is not responsible for actions or omissions of
                        third parties involved in the Services.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.5. Service Availability
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is not responsible for disruptions or degradations
                        of Services related to third parties.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.6. Financial Limitation
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay's liability is limited to the amount of Fees
                        collected during the three (3) months preceding the
                        event in question.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        11.7. Third-Party Equipment
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is not responsible for defects in third-party
                        hardware or products.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 12 */}
                <article id="article-12" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 12
                    </span>
                    Indemnification
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <p className="text-text-secondary leading-relaxed">
                        You agree to indemnify KPpay (and its employees,
                        directors, agents, and partners) against any claims or
                        losses resulting from your breach of these Terms, the
                        law, or third-party rights.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 13 */}
                <article id="article-13" className="mb-10 scroll-mt-24">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 13
                    </span>
                    Confidentiality and Data Protection
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        13.1. Confidentiality
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Both parties agree to treat all exchanged information
                        under these Terms as confidential.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        13.2. Personal Data
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must comply with applicable data protection laws
                        concerning Cardholders. Any use of data for marketing
                        purposes requires explicit consent from the Cardholder.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        13.3. Privacy Policy
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        For more information on how KPpay collects, processes,
                        and protects your data, please refer to our Privacy
                        Policy.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 14 */}
                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 14
                    </span>
                    Relationships with Third Parties
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is not a party to the relationships between you
                        and Cardholders and assumes no responsibility regarding
                        the products or services you offer.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 15 */}
                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 15
                    </span>
                    Duration, Suspension, and Termination
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        15.1. Termination
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You may terminate these Terms and close your Account at
                        any time. KPpay may suspend or terminate Services with
                        or without notice for various reasons, including breach
                        of these Terms or the law.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        15.2. Consequences of Termination
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Upon termination, you must immediately cease using the
                        Services. KPpay may delete your data and is not liable
                        to you or third parties for termination.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        15.3. Financial Obligations
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You must settle all amounts owed to KPpay. Conversely,
                        KPpay will pay you any amounts due, subject to reserve
                        provisions.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 16 */}
                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 16
                    </span>
                    Communications
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        16.1. Communication Methods
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Communications between KPpay and you will primarily
                        occur via email to the address registered in your
                        Account or through notifications on our site or
                        application.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        16.2. Valid Email Address
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        It is your responsibility to maintain a valid email
                        address and regularly check your messages.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        16.3. Durable Medium
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        When required by law, KPpay will provide information on
                        a durable medium, typically via email.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        16.4. Language of Communication
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay will communicate with you in the language chosen
                        during registration. However, for certain
                        communications, English may be used.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 17 */}
                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 17
                    </span>
                    Intellectual Property
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        17.1. KPpay's Rights
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay is the exclusive owner of all intellectual
                        property rights related to the Services.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        17.2. Limited License
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay grants you a non-exclusive, non-transferable
                        license to use the Services under these Terms.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        17.3. Restrictions
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Copying, modifying, distributing, or using protected
                        elements without prior consent from KPpay is prohibited.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        17.4. User Content
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        By submitting content to KPpay, you grant KPpay a
                        license to use it within its activities. You must have
                        the necessary rights over this content.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 18 */}
                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 18
                    </span>
                    Amendments to the Terms
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        18.1. Right to Modify
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay may modify these Terms at any time.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        18.2. Notification
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Any changes will be notified to you by email or through
                        our Program.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        18.3. Acceptance of Changes
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Changes will take effect two (2) months after
                        notification unless you object before that date.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Article 19-22 */}
                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 19
                    </span>
                    Severability
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <p className="text-text-secondary leading-relaxed">
                        If any provision of these Terms is deemed invalid, the
                        remaining provisions will remain in effect.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 20
                    </span>
                    Assignment of Rights
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        20.1. Assignment by KPpay
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        KPpay may freely assign its rights and obligations to a
                        third party.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        20.2. Assignment by User
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        You may not assign your rights and obligations without
                        KPpay's written consent.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 21
                    </span>
                    Disputes
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        21.1. Complaints
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        Any complaints must be addressed to KPpay's customer
                        service.
                      </p>
                    </div>

                    <div className="border-l-2 border-border-secondary pl-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        21.2. Jurisdiction
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        In case of disputes, the courts of the country where
                        your Account is registered will have jurisdiction unless
                        otherwise required by law.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="mb-10">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                    <span className="bg-brand-secondary/10 text-brand-secondary px-3 py-1 rounded text-sm">
                      Article 22
                    </span>
                    Governing Law
                  </h3>

                  <div className="space-y-6 ml-4">
                    <div className="border-l-2 border-border-secondary pl-4">
                      <p className="text-text-secondary leading-relaxed">
                        These Terms are governed by the laws of the country
                        where your Account is registered.
                      </p>
                    </div>
                  </div>
                </article>
              </section>

              {/* Final Statement */}
              <section className="bg-surface-secondary rounded-lg p-8 text-center">
                <p className="text-text-primary leading-relaxed">
                  By using KPpay's Services, you acknowledge that you have read,
                  understood, and agreed to these Terms and Conditions of Use.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
