/* eslint-disable react/no-unescaped-entities */
import { Button, images } from '@/types';
import Image from 'next/image';

const HiringSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface-primary">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-0">
          {/* Left Content */}
          <div className="order-1">
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
          <div className="order-2">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={images.about.hiring}
                alt="Diverse team members"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
