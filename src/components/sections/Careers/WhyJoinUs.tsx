import { Zap, Users, TrendingUp, Heart, Globe, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description:
      'Work with modern tech stack including React, Next.js, Node.js, and cloud infrastructure. Push the boundaries of fintech innovation.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description:
      'Join a diverse team of talented individuals who value collaboration, creativity, and mutual growth. Your voice matters here.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description:
      'Accelerate your career with continuous learning opportunities, mentorship programs, and clear paths for advancement.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Flexible working hours, remote work options, and generous time off to ensure you maintain a healthy work-life balance.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description:
      'Make a real difference by building payment solutions that empower businesses and individuals across Africa and beyond.',
  },
  {
    icon: Shield,
    title: 'Competitive Benefits',
    description:
      'Enjoy competitive salaries, health insurance, retirement plans, and performance bonuses that recognize your contributions.',
  },
];

const WhyJoinUs = () => {
  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-surface-secondary">
      <div className="container-padding max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 sm:px-0">
          <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Why Join KPPAY?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            We offer more than just a job. Join a company that invests in your
            growth, values your contributions, and empowers you to make a
            meaningful impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-surface-primary p-6 md:p-8 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-text-main-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
