/* eslint-disable react/no-unescaped-entities */
import { MapPin, Clock, Briefcase, Mail } from 'lucide-react';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const positions: JobPosition[] = [
  {
    title: 'Product Manager - Payments',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Drive product strategy for our payment solutions. Work closely with engineering, design, and business teams to deliver customer-centric features.',
    requirements: [
      '4+ years product management experience',
      'Deep understanding of payment systems',
      'Strong analytical and communication skills',
      'Experience with agile methodologies',
    ],
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Cotonou, Benin Republic',
    type: 'Full-time',
    description:
      'Help our business customers succeed with KPPAY solutions. Provide strategic guidance, technical support, and drive product adoption.',
    requirements: [
      '3+ years customer success experience',
      'Experience in B2B SaaS or fintech',
      'Excellent communication skills (English & French)',
      'Technical aptitude and problem-solving skills',
    ],
  },
  {
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Cotonou, Benin Republic',
    type: 'Full-time',
    description:
      'Drive business growth by identifying new opportunities, building partnerships, and expanding our presence across African markets.',
    requirements: [
      '5+ years business development experience',
      'Strong network in African fintech ecosystem',
      'Proven track record in B2B sales',
      'Excellent negotiation and presentation skills',
    ],
  },
];

const JobPositions = () => {
  return (
    <section id="open-positions" className="py-16 md:py-24 lg:py-32 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 sm:px-0">
          <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Open Positions
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Explore our current openings and find the perfect role to advance
            your career. Can't find what you're looking for? Send us your CV at{' '}
            <a
              href="mailto:careers@kppay.fr"
              className="text-brand-primary hover:text-brand-secondary font-medium underline"
            >
              careers@kppay.fr
            </a>
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid gap-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-surface-secondary border border-border-secondary rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left Content */}
                <div className="flex-1">
                  {/* Department Badge */}
                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full mb-4">
                    {position.department}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                    {position.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{position.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-4 text-sm sm:text-base">
                    {position.description}
                  </p>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span>Key Requirements:</span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 ml-6">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-text-secondary list-disc"
                        >
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right CTA - Email Display */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-6 rounded-xl text-center lg:min-w-[200px]">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-3">
                      <Mail className="w-6 h-6 text-text-main-white" />
                    </div>
                    <p className="text-text-main-white text-sm font-medium mb-2">
                      Apply via Email
                    </p>
                    <a
                      href="mailto:careers@kppay.fr"
                      className="text-text-main-white font-bold text-sm hover:underline break-all"
                    >
                      careers@kppay.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center px-4 sm:px-0">
          <div className="bg-surface-secondary border-2 border-dashed border-border-dark-border rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-text-secondary text-sm sm:text-base mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Send us your CV and tell us how you can contribute to KPPAY's
              mission.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-br from-brand-primary to-brand-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl">
              <Mail className="w-5 h-5 text-text-main-white flex-shrink-0" />
              <a
                href="mailto:careers@kppay.fr"
                className="text-text-main-white font-bold text-base sm:text-lg hover:underline break-all"
              >
                careers@kppay.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPositions;
