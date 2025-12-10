import Image from 'next/image';
import { images } from '@/types';

/* eslint-disable react/no-unescaped-entities */

const DiscoverSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface-secondary">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Image */}
        {/* <div className="mb-12 relative w-full aspect-video">
          <Image
            src={images.about.aboutUsImg}
            alt="Team meeting collaboration"
            fill
            className="object-contain rounded-2xl"
          />
        </div> */}

        {/* Content */}
        <div className="max-w-4xl mx-auto p-8 lg:p-0">
          <h2 className="heading-bebas text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-8 text-center">
            Discover K-Polygone
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mb-6 leading-relaxed">
            We've already helped over 4,000 companies achieve remarkable
            results.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-text-secondary text-base leading-relaxed">
                KPPay, a K-POLYGONE product, is designed to connect millions of
                businesses and professionals in over twenty (20) countries,
                offering a seamless, secure and cost-effective platform for
                cross-border payments.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                With KPPay, global transactions should be as easy as local ones.
                Our mission is to help businesses cross borders, overcome
                limitations and do more business. Whether you're a small
                business, a marketplace or a large corporation, KPPay's robust
                technology, compliance and banking infrastructure guarantee the
                speed, flexibility and complete security of your transactions.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <p className="text-text-secondary text-base leading-relaxed">
                K-POLYGONE, the company behind KPPay, is a leader in digital
                transformation and public service reform. With a solid
                foundation in innovation and technology, it is committed to
                helping governments and businesses harness the power of digital
                solutions to optimize revenue mobilization and improve
                governance.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Thanks to KPPay, K-POLYGONE brings its expertise to the global
                stage, enabling companies all over the world to thrive in
                today's digital economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
