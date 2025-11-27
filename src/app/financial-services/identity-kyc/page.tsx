import React from 'react';
import { IdentityKYCHeroSection, VerificationFeaturesGrid } from '@/types';

export default function IdentityKYCPage() {
  return (
    <main className="page-transition">
      {/* Hero section */}
      <IdentityKYCHeroSection />

      {/* Advanced Verification Features */}
      <VerificationFeaturesGrid />
    </main>
  );
}
