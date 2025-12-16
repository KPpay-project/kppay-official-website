'use client';

import React, { useState } from 'react';
import { Button, ROUTES } from '@/types';
import { ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  isUppercase: boolean;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How does the verification work with KP Pay?',
      answer:
        "When you open a bank account, you usually need to take some ID into the bank branch. KP Pay is no different. We are a financial institution, so we need to know who is using our service. It helps us combat money laundering and keep everyone's money safe. So, depending on where you are sending money from, and how much you send, we'll ask you to verify your identity. This helps us keep your money safe. If you have a KP Pay for Business account, we also need to verify information about your business.",
      isUppercase: false,
    },
    {
      question: 'Is Mobile Pay safe?',
      answer:
        "MOBILE PAY: THE QUICK DOWNLOAD - With a wide array of overlapping security measures like tokenization to protect your funds, it's one of the safest ways to transfer money ever.",
      isUppercase: false,
    },
    {
      question: 'Can I cancel my transaction after payment?',
      answer:
        "No. Once the transaction has been authorized, your bank is obligated to pay it. If you did the transaction, your best bet is to contact the merchant for a refund. If you didn't do the transaction, contact your bank and they will charge it back as fraud.",
      isUppercase: false,
    },
    {
      question: 'How do I stop a payment transaction?',
      answer:
        'To stop payment, you need to notify your bank at least three business days before the transaction is scheduled to be made and your bank may charge a fee. The notice to stop the transaction may be made orally or in writing. A bank can require written confirmation of an oral stop payment request.',
      isUppercase: false,
    },
    {
      question: 'What types of documents does KP Pay accept?',
      answer:
        "Everything on the document you share should match the information on your KP Pay account. Make sure the photo isn't blurry or covered, so we can see all the info. If there's information on the back of your document, we'll need to see that, too. Make sure the document isn't in Arabic, Aramaic, Azerbaijani, Hebrew or Urdu text — we don't have the resources to support these. A valid ID document can be: Passport (photo page only), National ID card (we only accept the most recent version of the Nigerian national ID card). A valid proof of address document can be: Utility bills (gas, electric, or landline phone - no mobile phone bills), A bank or credit card statement (photo/scan of a physical letter or PDF of statement), A council tax bill, Any other government or financial institution-issued document.",
      isUppercase: false,
    },
    {
      question: 'How long does the verification take?',
      answer:
        'If we ask to verify you while setting up a transfer, we will start reviewing your documents once we have received the money for the transfer. From there we will work to get it done within 2–3 working days. When successfully verified, we will automatically resume your transfer, and let you know by email.',
      isUppercase: false,
    },
    {
      question: 'How do I complete onboarding and account setup?',
      answer:
        'Simple registration with user details and quick verification. Most accounts are approved within minutes for immediate access.',
      isUppercase: true,
    },
    {
      question: 'How does safety and tokenization work?',
      answer:
        'We use advanced tokenization and bank-level security protocols to protect your financial data and transactions at all times.',
      isUppercase: true,
    },
    {
      question: 'Can I cancel or stop payments?',
      answer:
        'Yes, you can cancel pending payments before processing. Once completed, you can request assistance through our support team.',
      isUppercase: true,
    },
    {
      question: 'How long does document verification take?',
      answer:
        "Document verification typically takes 2-3 business days. You'll receive updates on the status throughout the process.",
      isUppercase: true,
    },
    {
      question: 'How do I change my password?',
      answer:
        "After you have logged in, you can change your password using the 'Change password' option in the top part of the screen. You must type your current password and the new password you have chosen in their respective boxes.",
      isUppercase: false,
    },
    {
      question: 'How do I manage my password securely?',
      answer:
        'Use strong, unique passwords and enable two-factor authentication. You can update your password anytime in account settings.',
      isUppercase: true,
    },
    {
      question: 'What is another name for mobile money?',
      answer:
        'Other terms that are often used in association with, or interchangeably with, e-money, mobile financial services include: Electronic Wallet (eWallet). Refers to the cash value that is stored on a card, phone, or other electronic device. Pre-paid cards are one form of electronic wallet.',
      isUppercase: false,
    },
    {
      question: "What's the difference between mobile and online banking?",
      answer:
        'Both offer full functionality. Mobile app provides convenience on-the-go, while web platform offers comprehensive dashboard views.',
      isUppercase: false,
    },
    {
      question:
        'What is the difference between mobile banking and mobile money?',
      answer:
        'Mobile Money lets you send and receive money with the help of a mobile phone and the internet, while Mobile Banking allows you to carry out banking related transactions or transfers through a bank app.',
      isUppercase: false,
    },
    {
      question: 'How does Mobile Pay work?',
      answer:
        "Money transfers are performed by entering a mobile phone number which is registered in the system. The funds are then transferred to this account, while the amount is deducted from the sender's credit card. There are no fees for private Mobile Pay accounts.",
      isUppercase: false,
    },
    {
      question: 'Is mobile banking better than online banking?',
      answer:
        'In general, online banking offers a broader range of services than mobile banking. Mobile banking apps enable users to conduct essential transactions such as checking balances, viewing transaction history, transferring funds, and chatting with support.',
      isUppercase: false,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-surface-secondary">
      <div className="container-padding max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="heading-bebas text-3xl sm:text-4xl text-text-main-dark mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-text-secondary italic">
            Everything you need to know about KP Pay
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* Glowing gradient border when open */}
              {openIndex === index && (
                <div
                  className="absolute -inset-1 rounded-xl blur-lg"
                  style={{
                    background:
                      'linear-gradient(to right, #93C5FD, #C4B5FD, #F9A8D4, #FDBA74, #FDE047)',
                  }}
                ></div>
              )}

              {/* SOLID WHITE Card */}
              <div className="relative bg-white border border-border-secondary rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left rounded-lg"
                >
                  <span
                    className={`text-sm sm:text-md md:text-lg text-text-main-dark ${
                      faq.isUppercase
                        ? 'heading-inter-light'
                        : 'italic font-normal'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 ml-4 w-6 h-6 rounded-full border-2 border-text-main-dark flex items-center justify-center text-text-main-dark font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 bg-white rounded-b-lg animate-fadeIn">
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-surface-secondary rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="heading-bebas-light text-lg sm:text-xl text-text-main-dark mb-1">
              Send money and receive money super fast
            </h3>
            <p className="text-sm text-text-secondary">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outlined" size="sm" href={ROUTES.ABOUT}>
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="primary" size="sm" href={ROUTES.SIGNUP}>
              Sign Up
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
