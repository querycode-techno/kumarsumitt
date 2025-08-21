import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Information We Collect
                </h2>
                <p>
                  We collect information you provide directly to us, such as when you contact us through our website forms, 
                  subscribe to our newsletter, or participate in our events and training sessions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, 
                  and send you updates about our events, training sessions, and artistic endeavors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through our website's contact form 
                  or at the information provided on our contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
