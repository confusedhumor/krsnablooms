import React from 'react';
import { Link } from 'react-router-dom';

const flowers = [
  {
    id: 1,
    name: 'Sunflower',
    description: ' 1 Piece ',
    price: 79,
    image: 'data:image/jpeg;base64,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'
  },
  {
    id: 2,
    name: 'Pooja Flowers Mix',
    description: 'Traditional flowers for daily pooja (100gm)',
    price: 79,
    image: 'https://imgs.search.brave.com/nPaPiPQ2JBhtMAsOt9Pnv7dz0ny__KeKxzdPGpTxsEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z3JvZmVycy5jb20v/Y2RuLWNnaS9pbWFn/ZS9mPWF1dG8sZml0/PXNjYWxlLWRvd24s/cT04NSxtZXRhZGF0/YT1ub25lLHc9NDgw/LGg9NDgwL2RhL2Nt/cy1hc3NldHMvY21z/L3Byb2R1Y3QvZWE5/ZmQyNzEtNDkzYS00/NzY2LTg3MmMtODE5/NGUyYTg1NGVkLmpw/Zz90cz0xNzQwMjkw/NTMz'
  },
  {
    id: 3,
    name: 'Rose Bundle',
    description: 'Fresh roses 10 pices',
    price: 299,
    image: 'https://media.istockphoto.com/id/174812956/photo/dozen-roses.jpg?s=612x612&w=0&k=20&c=G30YG1YC3uAyNVVEPHM6YWVMuZJZ5vcjZ5iVrpi5jgk='
  },
  {
    id: 4,
    name: 'Chrysanthemum flowers',
    description: '10 stick of one bunch',
    price: 120,
    image: 'https://www.kisanshop.in/s/65f83b39d13b931b1c1f1a9b/660696206cb6729449f798c6/golden-hills-chrysanthemum-white-flower-seeds.jpg'
  },
  {
    id: 5,
    name: 'Sweet william flowers',
    description: 'One bunch',
    price: 79,
    image: 'https://www.rhs.org.uk/getmedia/84e66a48-0d52-464d-a1db-edad7642207d/Dianthus-barbatus-Electron-Auricula-940x627.jpg?width=940&height=627&ext=.jpg'
  },
  {
    id: 6,
    name: 'Lotus Special',
    description: 'Fresh lotus flowers for pooja',
    price: 95,
    image: 'https://www.bigbasket.com/media/uploads/p/xxl/40196772-3_1-hoovu-fresh-lotus.jpg'
  }
  
];

function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
     <h1 className="text-4xl font-bold mb-8 text-center">Our Flowers</h1>

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
  );
}

export default Shop;
