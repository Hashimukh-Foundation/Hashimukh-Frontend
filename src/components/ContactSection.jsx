// ContactSection.jsx
import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-[#4AB050] text-white py-16 px-4 w-full md:w-[60%] md:ml-[20%] md:rounded-t-2xl">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Top - Info */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-200">
            Have a question, suggestion, or just want to say hello? Fill out the
            form, and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Bottom - Form */}
        <form className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-black">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border border-gray-400 focus:ring-2 focus:ring-[#4AB050] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border border-gray-400 focus:ring-2 focus:ring-[#4AB050] outline-none"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2 text-black"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-gray-200 text-black border border-gray-400 focus:ring-2 focus:ring-[#4AB050] outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4AB050] hover:bg-green-600 text-white py-3 px-6 rounded-md font-semibold transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
