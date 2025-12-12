/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import {
  Scale,
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Menu,
  X,
} from 'lucide-react';

export default function AntiCorruptionPolicy() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarOpen(false);
    }
  };

  const sections = [
    { id: 'message', title: 'Message from Management' },
    { id: 'objective', title: 'Objective and Scope' },
    {
      id: 'definition',
      title: '1. Definition of Corruption and Influence Peddling',
    },
    { id: 'zero-tolerance', title: '2. Zero-Tolerance Principle' },
    { id: 'gifts', title: '3. Gifts and Hospitality Policy' },
    { id: 'training', title: '4. Awareness and Training' },
    { id: 'reporting', title: '5. Reporting and Alert System' },
    { id: 'conflicts', title: '6. Conflicts of Interest' },
    { id: 'sponsorships', title: '7. Sponsorships, Donations, and Lobbying' },
    { id: 'risk-mapping', title: '8. Risk Mapping and Third-Party Assessment' },
    { id: 'controls', title: '9. Internal Controls and Accounting' },
    { id: 'archiving', title: '10. Archiving and Document Management' },
    { id: 'management', title: '11. Management of the Anti-Corruption Policy' },
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
                  <Scale className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Anti-Corruption Policy
                  </h1>
                  <p className="text-text-inverse-secondary text-lg mt-2">
                    KPpay Platform
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-inverse-primary">
                <Calendar className="w-4 h-4" />
                <span>Zero-Tolerance Approach to Corruption</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/17KnAx_AGraUp_LnzJxR8n5n-T3rQpR8o/view?usp=drive_link"
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
              <strong className="font-semibold">Important:</strong> KPpay adopts
              a zero-tolerance policy towards all forms of corruption and
              expects every member of our organization to uphold this
              commitment.
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
            className={`lg:col-span-1 ${
              sidebarOpen
                ? 'fixed inset-0 z-20 bg-black/50 lg:relative lg:bg-transparent'
                : 'hidden lg:block'
            }`}
          >
            <div
              className={`${
                sidebarOpen
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
              {/* Message from Management */}
              <section id="message" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  Message from Management
                </h2>
                <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 p-6 rounded-lg border-l-4 border-brand-primary">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Dear Colleagues and Partners,
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    KPpay is firmly committed to conducting its business
                    activities with integrity and transparency in all markets
                    where we operate. As an innovative digital financial
                    services platform, KPpay aspires to be a leader in
                    transaction digitization, adhering strictly to ethical and
                    regulatory standards. We adopt a zero-tolerance policy
                    towards all forms of corruption and expect every member of
                    our organization to uphold this commitment.
                  </p>
                </div>
              </section>

              {/* Objective and Scope */}
              <section id="objective" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  Objective and Scope
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    This policy provides a framework for all employees,
                    partners, suppliers, consultants, and stakeholders of KPpay.
                    It defines the principles and expected behaviors to prevent
                    and combat corruption in all its forms, including influence
                    peddling, bribery, and facilitation payments. This policy
                    applies to all KPpay entities in every country where it
                    operates.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Our anti-corruption policy aligns with international
                    anti-corruption conventions, including those of the African
                    Union and the United Nations, as well as national laws in
                    the countries where KPpay operates.
                  </p>
                </div>
              </section>

              {/* Section 1: Definition of Corruption and Influence Peddling */}
              <section id="definition" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  1. Definition of Corruption and Influence Peddling
                </h2>
                <div className="space-y-6">
                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Corruption
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Corruption is any act of offering, promising, giving, or
                      soliciting, directly or indirectly, an undue advantage to
                      influence an act in the course of professional duties or
                      to reward such an act.
                    </p>
                  </div>
                  <div className="bg-surface-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      Influence Peddling
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Influence peddling involves soliciting or accepting,
                      directly or indirectly, an advantage to use one's real or
                      supposed influence to obtain favorable decisions from a
                      public or private authority.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Zero-Tolerance Principle */}
              <section id="zero-tolerance" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  2. Zero-Tolerance Principle
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay enforces a zero-tolerance policy on corruption and
                  influence peddling. Under no circumstances should an employee
                  or a third party acting on behalf of KPpay:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        Offer or accept payments, gifts, commissions, travel,
                        invitations, or any form of gratification in exchange
                        for an undue advantage or as a reward for such an
                        advantage.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        Make facilitation payments to a public official or
                        intermediary to expedite a routine process.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        Yield to extortion demands under pressure, unless life,
                        health, or freedom is threatened. In such cases, the
                        incident should be reported as soon as possible.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Gifts and Hospitality Policy */}
              <section id="gifts" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  3. Gifts and Hospitality Policy
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To prevent corruption risks or conflicts of interest, KPpay
                  strictly regulates gifts and hospitality:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Gifts and Invitations:
                        </strong>{' '}
                        Giving or receiving gifts and hospitality should be
                        reasonable, professional, and not intended to influence
                        a transaction or business decision. Cash gifts are
                        strictly prohibited.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Thresholds and Declaration:
                        </strong>{' '}
                        Any gift or invitation exceeding a defined threshold
                        must be reported to the Compliance Officer. A gift
                        registry will be maintained to ensure complete
                        traceability of benefits received or offered.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Awareness and Training */}
              <section id="training" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  4. Awareness and Training
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay is committed to regularly training its employees on
                  corruption risks and the procedures to follow:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Mandatory Training:
                        </strong>{' '}
                        All employees, especially those exposed to corruption
                        risks, must attend training sessions to identify,
                        prevent, and report any suspicious activities.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Partner Awareness:
                        </strong>{' '}
                        KPpay also educates its partners, subcontractors, and
                        consultants on this policy to ensure they adhere to the
                        same standards of conduct.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5: Reporting and Alert System */}
              <section id="reporting" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  5. Reporting and Alert System
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  KPpay encourages employees to report any suspicion of
                  corruption or influence peddling through a secure alert
                  system:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg mb-6">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Reporting Channel:
                        </strong>{' '}
                        Any suspicion of corruption should be reported via the
                        dedicated email{' '}
                        <span className="text-brand-primary font-semibold">
                          contact@kppay.fr
                        </span>
                        . The anonymity and confidentiality of the
                        whistleblower's identity are guaranteed.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Whistleblower Protection:
                        </strong>{' '}
                        No employee will face discrimination or punishment for
                        reporting an alert in good faith. However, any misuse of
                        the alert system will be subject to disciplinary action.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Conflicts of Interest */}
              <section id="conflicts" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  6. Conflicts of Interest
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Conflicts of interest must be avoided to maintain the
                  integrity of decisions made by KPpay:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Identification and Prevention:
                        </strong>{' '}
                        Every employee is required to declare any real or
                        potential conflicts of interest to the Compliance
                        Officer.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Conflict Management:
                        </strong>{' '}
                        A conflict-of-interest management system is in place to
                        ensure impartial decision-making and protect KPpay's
                        interests.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Sponsorships, Donations, and Lobbying */}
              <section id="sponsorships" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  7. Sponsorships, Donations, and Lobbying
                </h2>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Sponsorships and Donations:
                        </strong>{' '}
                        Sponsorship and donation initiatives adhere to ethical
                        standards and aim to contribute to community development
                        without expecting any undue reciprocation.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">Lobbying:</strong>{' '}
                        All lobbying activities are conducted transparently, in
                        compliance with regulations, and without any behavior
                        that could be perceived as corruption.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 8: Risk Mapping and Third-Party Assessment */}
              <section id="risk-mapping" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  8. Risk Mapping and Third-Party Assessment
                </h2>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Risk Mapping:
                        </strong>{' '}
                        KPpay maintains a risk map of corruption, which is
                        updated periodically to identify risk areas in its
                        operations.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Third-Party Due Diligence:
                        </strong>{' '}
                        Thorough due diligence procedures are conducted to
                        evaluate the compliance of partners and suppliers with
                        anti-corruption standards.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 9: Internal Controls and Accounting */}
              <section id="controls" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  9. Internal Controls and Accounting
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Strict internal controls are in place to detect and prevent
                  any act of corruption:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Compliance Controls:
                        </strong>{' '}
                        Enhanced control processes are implemented to ensure all
                        activities comply with anti-corruption standards.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Accounting Transparency:
                        </strong>{' '}
                        All accounts, invoices, and transaction-related
                        documents are maintained accurately and comprehensively
                        to avoid fraudulent manipulation.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 10: Archiving and Document Management */}
              <section id="archiving" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  10. Archiving and Document Management
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-secondary leading-relaxed">
                    Data and documents demonstrating the application of the
                    anti-corruption policy are archived to ensure full
                    traceability and demonstrate KPpay's compliance.
                  </p>
                </div>
              </section>

              {/* Section 11: Management of the Anti-Corruption Policy */}
              <section id="management" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-text-primary mb-6 border-b-2 border-brand-primary pb-3">
                  11. Management of the Anti-Corruption Policy
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  The Ethics and Compliance Committee of KPpay is responsible
                  for ensuring the implementation and effectiveness of this
                  policy:
                </p>
                <div className="bg-surface-secondary p-6 rounded-lg">
                  <ul className="space-y-4 text-text-secondary">
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Chief Compliance Officer's Responsibility:
                        </strong>{' '}
                        The Chief Compliance Officer, in collaboration with
                        compliance teams, oversees the deployment and monitoring
                        of the policy's effectiveness.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-primary mt-1">•</span>
                      <div>
                        <strong className="text-text-primary">
                          Continuous Improvement:
                        </strong>{' '}
                        This policy is reviewed periodically to incorporate best
                        practices and adapt to regulatory changes.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
