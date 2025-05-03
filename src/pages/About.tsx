import React from 'react';
import ourstoryimage from '../assets/images/OurStory.jpeg';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story – Kṛṣṇa Blooms</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At Kṛṣṇa Blooms, we believe that devotion begins with the smallest gestures 
            — a fresh garland, a handful of fragrant petals, a simple offering made with love. 
            What started as a humble effort to bring fresh, beautiful pooja flowers to homes in our neighborhood has blossomed into a heartfelt mission: to make daily worship easy, joyful, and beautiful for everyone.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Rooted in tradition and delivered with care, every flower we sell is hand-picked, wrapped with devotion, and brought straight to your doorstep 
            — whether it’s for your morning prayers, a festival celebration, or just to keep your home connected to the divine.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We’re more than a flower seller. We’re your neighborhood’s go-to for sacred freshness, daily rituals, and that subtle fragrance of spirituality that makes a house feel like a temple.
            <br /><br />
            From our farm to your aarti plate — with love, every day.
            <br /><br />
            <strong>Kṛṣṇa Blooms </strong>
          </p>
        </div>
        <div>
          <img
            src={ourstoryimage}
            alt="Beautiful pooja flower garden at Krishna Blooms"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Farm Fresh Daily</h3>
            <p className="text-gray-600">
              All our flowers are picked fresh from our garden every morning, ensuring you get the freshest blooms possible.
            </p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
            <p className="text-gray-600">
              By delivering directly from our farm to your home, we keep our prices reasonable and accessible.
            </p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Reliable Service</h3>
            <p className="text-gray-600">
              Count on us for timely deliveries every day, whether it's for your morning pooja or evening decoration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
