// JoinUs.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import Image from "../assets/aboutbg.webp";
import FloatyNavbar from "./FloatyNavbar.jsx";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <span className="text-green-500 text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 pb-4">{answer}</p>
      </div>
    </div>
  );
}

export default function JoinUs() {
  useEffect(() => {
    document.title = "Join Us | Hashimukh";
  }, []);

  const [otpSent, setOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    facebookId: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (!formData.email) {
      alert("Please enter your email first.");
      return;
    }
    console.log("Send OTP to:", formData.email);
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Later: verify OTP and send data to backend
  };

  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "How can I join Hashimukh?",
      a: "Simply fill out the form above with your details, verify your email with OTP, and submit. We'll reach out to you shortly.",
    },
    {
      q: "Do I need to pay any membership fee?",
      a: "No, joining Hashimukh is free. We believe in voluntary contribution and participation.",
    },
    {
      q: "What kind of work will I be involved in?",
      a: "Depending on your skills and interests, you might participate in educational programs, community outreach, or fundraising events.",
    },
    {
      q: "Can I volunteer remotely?",
      a: "Yes! Many of our initiatives have remote opportunities, especially in content creation, coordination, and fundraising.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <FloatyNavbar />
      <div
        className="relative py-16  bg-cover bg-[center_top_30%]"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Go Back link */}
        <Link
          to="/"
          className="absolute top-4 left-4 flex items-center text-white hover:text-green-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> {/* icon */}
          Go Back
        </Link>
        {/* dark overlay */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Working for sustainable growth and empowering communities through
            education, compassion, and hope since 2019
          </p>
        </div>
      </div>
      <section className="flex-1 bg-gray-100 px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Become a part of Hashimukh
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Join us in making a difference. We’ve been working since 2019 to
              empower communities through education, compassion, and hope. By
              joining, you’re becoming part of a movement that believes in
              sustainable growth and human dignity.
            </p>
            <img
              src={Image}
              alt="Community Work"
              className="mt-6 rounded-lg shadow-md hidden md:block"
            />
          </div>

          {/* Right Column - Form */}
          <div className="bg-white shadow-lg rounded-xl w-full p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Join Us
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10,15}"
                  title="Enter a valid phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              {/* Email + OTP Button */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
                  />
                  {!otpSent ? (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Send OTP
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    >
                      Resend
                    </button>
                  )}
                </div>
              </div>

              {/* OTP Field */}
              {otpSent && (
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
                  />
                </div>
              )}

              {/* Occupation */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              {/* Facebook User ID */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Facebook User ID
                </label>
                <input
                  type="text"
                  name="facebookId"
                  value={formData.facebookId}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F3F4F6] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      {/* Footer outside form container */}
      <Footer />
    </div>
  );
}
