"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    flatNumber: "",
    contact: "",
    flowerChoice: "daily-bunch",
    deliveryOption: "one-time",
    deliveryTime: "morning",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url =
      "https://script.google.com/macros/s/AKfycbyvcQoi1k9GUPzeglE2DeYvisAENaYQPsgVrNXiyKKLzC5RKmK6taXdcxiaxtmeHv3H/exec";

    const formDataEncoded = new URLSearchParams(
      formData as Record<string, string>
    ).toString();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded,
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("✅ Your order is placed! We will contact you shortly.");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        setFormData({
          name: "",
          flatNumber: "",
          contact: "",
          flowerChoice: "daily-bunch",
          deliveryOption: "one-time",
          deliveryTime: "morning",
        });
      } else {
        toast.error("❌ There was an issue placing your order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
      toast("✅ Thank you for your order!
    We'll reach out to confirm shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Toaster position="top-right" />
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <h1 className="text-4xl font-bold mb-8 text-center">Place Your Order</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 border border-pink-300"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="flatNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Address
            </label>
            <input
              type="text"
              id="flatNumber"
              name="flatNumber"
              required
              value={formData.flatNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="flowerChoice"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Flower Choice
            </label>
            <select
              id="flowerChoice"
              name="flowerChoice"
              required
              value={formData.flowerChoice}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="Mix Pooja Flowers (79₹)">Mix Pooja Flowers (79₹)</option>
              <option value="Only Marigold Pooja Flowers">Only Marigold Pooja Flowers (49₹)</option>
              <option value="Rose Bundle 10 Pieces (299₹)">Rose Bundle 10 Pieces (299₹)</option>
              <option value="Chrysanthemum flowers 10 Pieces(120₹)">Chrysanthemum flowers 10 Pieces(120₹)</option>
              <option value="Sweet william flowers (49₹)">Sweet william flowers (49₹)</option>
              <option value="Lotus Special (₹99)">Lotus Special (₹99)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="deliveryOption"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Delivery Option
            </label>
            <select
              id="deliveryOption"
              name="deliveryOption"
              required
              value={formData.deliveryOption}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="one-time">One-time Delivery</option>
              <option value="daily">Daily Subscription</option>
              <option value="alternate">Alternate Days</option>
              <option value="weekly">Weekly (Sundays)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="deliveryTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preferred Delivery Time
            </label>
            <select
              id="deliveryTime"
              name="deliveryTime"
              required
              value={formData.deliveryTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="morning">Morning (6:00 AM - 10:00 AM)</option>
              <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  />
                </svg>
                Placing...
              </>
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Order;
