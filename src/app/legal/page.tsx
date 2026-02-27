/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import {
    Shield,
    FileText,
    Lock,
    Cookie,
    Scale,
    AlertTriangle,
    Brain,
    Gift,
    ExternalLink,
    Download,
    Award,
} from 'lucide-react';
import Link from 'next/link';
import { ROUTES } from '@/config/constants';

const complianceDocuments = [
    {
        title: 'Attestation d\'Inscription',
        description:
            'Official registration certificate — Inscrit au Registre unique des intermédiaires en assurance, banque et finance.',
        href: '/documents/legal/attestation-inscription.pdf',
        icon: Award,
        type: 'pdf' as const,
    },
    {
        title: 'Terms and Conditions',
        description:
            'Legal agreement governing the use of the KPpay platform, services, payment processing, and user obligations.',
        href: ROUTES.LEGAL_TERMS,
        icon: FileText,
        type: 'page' as const,
    },
    {
        title: 'Privacy Policy',
        description:
            'How KPpay collects, uses, transfers, and protects your personal information in connection with our services.',
        href: ROUTES.LEGAL_PRIVACY,
        icon: Lock,
        type: 'page' as const,
    },
    {
        title: 'Cookie Policy',
        description:
            'How KPpay uses cookies and similar tracking technologies to enhance your browsing experience.',
        href: ROUTES.LEGAL_COOKIE_POLICY,
        icon: Cookie,
        type: 'page' as const,
    },
    {
        title: 'Anti-Money Laundering Policy',
        description:
            'KPpay\'s commitment to AML compliance, Know Your Customer (KYC) procedures, and financial crime prevention.',
        href: ROUTES.LEGAL_AML,
        icon: AlertTriangle,
        type: 'page' as const,
    },
    {
        title: 'Anti-Corruption Policy',
        description:
            'Standards for ethical business conduct, anti-bribery measures, and compliance with international anti-corruption laws.',
        href: ROUTES.LEGAL_ANTI_CORRUPTION,
        icon: Scale,
        type: 'page' as const,
    },
    {
        title: 'Intellectual Property Policy',
        description:
            'Protection, ownership, and permissible use of KPpay\'s intellectual property, trademarks, and proprietary content.',
        href: ROUTES.LEGAL_INTELLECTUAL_PROPERTY,
        icon: Brain,
        type: 'page' as const,
    },
    {
        title: 'Gift Policy',
        description:
            'Guidelines on the giving and receiving of gifts, hospitality, and entertainment in the context of business relationships.',
        href: ROUTES.LEGAL_GIFT_POLICY,
        icon: Gift,
        type: 'page' as const,
    },
];

export default function ComplianceAndLegal() {
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
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                            <Shield className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold">
                                Compliance and Legal
                            </h1>
                            <p className="text-text-inverse-secondary text-lg mt-2">
                                KPpay Platform
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Statement */}
            <div className="max-w-6xl mx-auto container-padding py-10">
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                    <div className="flex items-start gap-4">
                        <div className="bg-brand-primary/10 p-3 rounded-lg flex-shrink-0">
                            <Award className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-text-primary mb-2">
                                Registration
                            </h2>
                            <p className="text-text-secondary leading-relaxed">
                                KPpay est inscrit au Registre unique des intermédiaires en
                                assurance, banque et finance sous le numéro d'immatriculation{' '}
                                <strong className="text-text-primary">26002277</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Document Listings */}
            <div className="max-w-6xl mx-auto container-padding pb-16">
                <h2 className="text-2xl font-bold text-text-primary mb-8">
                    Legal Documents
                </h2>
                <div className="space-y-4">
                    {complianceDocuments.map((doc) => {
                        const Icon = doc.icon;
                        const isExternal = doc.type === 'pdf';

                        return isExternal ? (
                            <a
                                key={doc.title}
                                href={doc.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all duration-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                                        <Icon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                                                {doc.title}
                                            </h3>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700">
                                                PDF
                                            </span>
                                        </div>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {doc.description}
                                        </p>
                                    </div>
                                    <Download className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary flex-shrink-0 mt-1 transition-colors" />
                                </div>
                            </a>
                        ) : (
                            <Link
                                key={doc.title}
                                href={doc.href}
                                className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all duration-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                                        <Icon className="w-5 h-5 text-brand-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-primary transition-colors mb-1">
                                            {doc.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {doc.description}
                                        </p>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-brand-primary flex-shrink-0 mt-1 transition-colors" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
