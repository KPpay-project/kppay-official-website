import { Button, images } from '@/types';
import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="relative -mt-24 overflow-hidden">
      {/* Hero Container */}
      <div className="relative h-[680px] sm:h-[550px] md:h-[600px]">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.about.bgImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        {/* Content Layer */}
        <div className="relative z-10 container-padding pt-24 sm:pt-0 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="hero-heading">
              Financial Happiness
              <br />
              for Everyone
            </h1>
            <p className="hero-description">
              We&apos;re a dedicated team, for your wildest data dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="#get-started">
                Get started
              </Button>
              <Button variant="outlined-white" size="lg" href="#contact">
                Chat to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
