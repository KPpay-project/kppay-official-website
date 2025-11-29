/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/types';
import Image from 'next/image';

const HiringSection = () => {
  // Diverse team members
  const teamMembers = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      alt: 'Black male professional',
      className: 'col-span-1 row-span-1',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
      alt: 'Asian female professional',
      className: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop&q=80',
      alt: 'Black female professional',
      className: 'col-span-1 row-span-2',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&q=80',
      alt: 'White male professional',
      className: 'col-span-1 row-span-2',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
              We're Just Getting Started
            </h2>
            <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do you best work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outlined" size="md" href="#principles">
                Read our principles
              </Button>
              <Button variant="primary" size="md" href="#careers">
                We're hiring!
              </Button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[550px]">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`relative overflow-hidden rounded-xl ${member.className}`}
                >
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
