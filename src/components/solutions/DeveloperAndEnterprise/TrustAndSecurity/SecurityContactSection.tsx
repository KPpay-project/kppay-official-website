import React from 'react';

const SecurityContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white container-padding">
      <div className="px-16 lg:px-0 max-w-7xl mx-auto space-y-20">
        {/* Security Contact */}
        <div>
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-center text-black mb-12">
            SECURITY CONTACT
          </h2>

          <div className="bg-gray-50 rounded-lg py-12 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Email */}
              <div>
                <h3 className="text-black font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600">security@kppay.com</p>
              </div>

              {/* Emergency Hotline */}
              <div>
                <h3 className="text-black font-bold text-lg mb-2">
                  Emergency Hotline
                </h3>
                <p className="text-gray-600">+1-900-KP-SECURITY</p>
              </div>

              {/* Bug Bounty Program */}
              <div>
                <h3 className="text-black font-bold text-lg mb-2">
                  Bug Bounty Program
                </h3>
                <p className="text-gray-600">kppay.com/security/bug-bounty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Disclosure */}
        <div className="text-center">
          <h2 className="heading-bebas-light text-4xl md:text-5xl text-black mb-6">
            RESPONSIBLE DISCLOSURE
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </p>

          <button className="px-8 py-3 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Report Vulnerability
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecurityContactSection;
