import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Use License
                </h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Kumar Sumitt's 
                  website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Disclaimer
                </h2>
                <p>
                  The materials on Kumar Sumitt's website are provided on an 'as is' basis. Kumar Sumitt makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                  intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Limitations
                </h2>
                <p>
                  In no event shall Kumar Sumitt or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on Kumar Sumitt's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Revisions and Errata
                </h2>
                <p>
                  The materials appearing on Kumar Sumitt's website could include technical, typographical, or photographic errors. 
                  Kumar Sumitt does not warrant that any of the materials on its website are accurate, complete or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Links
                </h2>
                <p>
                  Kumar Sumitt has not reviewed all of the sites linked to its website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by Kumar Sumitt of the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-blue-300 mb-4">
                  Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us through our website's contact form 
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
