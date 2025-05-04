import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const flowers = [
  {
    id: 1,
    name: 'Mix Pooja Flowers',
    description: '100gm',
    price: 79,
    image: 'https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/b20a0074-d4a3-4479-8090-ad5394866a33.jpg?ts=1732177291',
  },
  {
    id: 2,
    name: 'Pooja Flowers',
    description: 'Only Marigold 100 gm',
    price: 49,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkcJ7o72h2xgjywWXEFPoZHH2QV87E8gbAA&s',
  },
  {
    id: 3,
    name: 'Rose Bundle',
    description: 'Fresh roses 10 pices',
    price: 299,
    image: 'https://media.istockphoto.com/id/177435608/photo/a-beautiful-bouquet-of-red-roses.jpg?s=612x612&w=0&k=20&c=2bH5UJAvxelnK8l7h44ToduXgLG0P3gBxmRB9fd4M6A=',
  },

];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hare Kṛṣṇa</h1>
            <h6 className="text-2xl md:text-4xl font-bold mb-6">We Deliver Fresh Flowers</h6>
            <p className="text-xl md:text-2xl mb-8">Bringing nature's beauty to your doorstep</p>
            <Link
              to="/order"
              className="inline-flex items-center bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Get Your Flowers Delivered
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Flower Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Flowers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower) => (
            <div key={flower.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={flower.image}
                alt={flower.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
                <p className="text-gray-600 mb-4">{flower.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-500">₹{flower.price}</span>
                  <Link
                    to="/order"
                    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Day with Fresh Flowers</h2>
          <p className="text-xl text-gray-600 mb-8">Subscribe to our daily delivery service and never miss a fresh bloom.</p>
          <Link
            to="/order"
            className="inline-flex items-center bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
