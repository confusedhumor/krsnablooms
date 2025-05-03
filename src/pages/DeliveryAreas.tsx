import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const societies = [
  "All The Tulip Societies",
  "M3M Marline",
  "Bestech Park View",
"IREO Uptown",
"Marbella Villas",
"Victory Valley",
"IREO Victory Valley",
"Emaar Palm Terraces Select",
"Emaar The Palm Square",
"Emaar MGF The Palm Drive",
"Emaar The Enclave",
"The Palm Drive",
];

function DeliveryAreas() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Delivery Areas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <MapPin className="h-6 w-6 text-pink-500 mr-2" />
            All the Gurgaon Serviced Societies
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              {societies.map((society, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-pink-500 rounded-full mr-3"></span>
                  {society}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Clock className="h-6 w-6 text-pink-500 mr-2" />
            Delivery Information
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Delivery Timings</h3>
                <p className="text-gray-600">Morning: 6:00 AM - 10:00 AM</p>
                <p className="text-gray-600">Evening: 4:00 PM - 7:00 PM</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Delivery Charges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free Home delivery </li>
                  <li>• ₹7 Handling charges</li>

                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Important Notes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Please provide accurate flat numbers</li>
                  <li>• Ensure someone is available to receive the delivery</li>
                  <li>• Contact us for any special delivery requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAreas;