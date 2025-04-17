import React from 'react';
import { Header } from './components/Header';
import { DownloadForm } from './components/DownloadForm';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Download Any Social Media Content
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The fastest and safest way to download videos, stories, and photos from Facebook, Instagram, and TikTok.
          </p>
          <DownloadForm />
        </div>
      </section>

      <Features />
      <HowItWorks />

      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-gray-600 mb-8">
            Our support team is here to help you with any questions or issues.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} N Download. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;