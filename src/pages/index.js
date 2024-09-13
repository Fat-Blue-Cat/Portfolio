import React from 'react';
import Layout from '../components/Layout';
function HomePage() {
  return (
    <Layout>
      <div className="font-sans bg-slate-500">
      {/* Header Section */}
      

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <h2 className="text-5xl font-bold text-black">Welcome to Trung Vu Van</h2>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center text-gray-600">We are a creative agency specializing in web design.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example portfolio items */}
            <div className="bg-gray-200 h-64">Project 1</div>
            <div className="bg-gray-200 h-64">Project 2</div>
            <div className="bg-gray-200 h-64">Project 3</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
          <div className="flex justify-around">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Design</h3>
              <p>We provide custom web designs for your business needs.</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Branding</h3>
              <p>Build a brand that stands out in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded"/>
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded"/>
            <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2024 Addo. All rights reserved.</p>
      </footer>
    </div>
    </Layout>
  );
}

export default HomePage;
