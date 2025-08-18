import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional icon

const PoliciesPage = () => {
  useEffect(() => {
    document.title = "Policy | Hashimukh";
  }, []);
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "member-policies", label: "Member Policies" },
    { id: "additional-policies", label: "Additional Policies" },
    { id: "about-us", label: "About Us" },
    { id: "contact", label: "Get in Touch" },
    { id: "donate", label: "Donate" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      {/* Go Back link */}
      <Link
        to="/"
        className="absolute top-1 left-4 flex items-center text-white hover:text-green-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {/* icon */}
        Go Back
      </Link>
      <header className=" bg-green-900 text-white text-center py-6 sm:py-8 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Hashimukh Foundation Policies
        </h1>
        <p className="text-xs sm:text-sm mt-1 sm:mt-2">
          Revision Date: July 25, 2022
        </p>
      </header>

      {/* Sticky Table of Contents */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 overflow-x-auto">
        <ul className="flex space-x-4 px-4 py-2 text-sm sm:text-base whitespace-nowrap">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-green-900 hover:underline"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-8">
        {/* Introduction */}
        <section id="introduction" className="border-b border-gray-200 pb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">
            Introduction
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            The Hashimukh Member Agreement comprises these Member Policies and
            all other official Foundation policies. By becoming a registered
            member, you agree to follow the rules and guidelines set forth
            below.
          </p>
        </section>

        {/* Member Policies */}
        <section
          id="member-policies"
          className="border-b border-gray-200 pb-6 space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">
            Member Policies
          </h2>

          {/* Code of Conduct */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Code of Conduct
            </h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>
                Conduct all volunteer activities with goodwill, high standards,
                and professionalism.
              </li>
              <li>Show mutual respect and collaborate with co-workers.</li>
              <li>
                Avoid any actions that could harm the reputation or goodwill of
                the Foundation.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Contact</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>
                Receive calls, messages, and emails related to Foundation
                activities.
              </li>
              <li>
                Allow your Facebook account to be added to official Foundation
                Messenger groups.
              </li>
              <li>Receive physical mail at your provided address.</li>
            </ul>
          </div>

          {/* Contributions */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Contributions</h3>
            <p className="mt-2 text-sm sm:text-base">
              Minimum monthly contributions must be paid by the{" "}
              <strong>8th day</strong> of each month:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>Director: 200 BDT/month</li>
              <li>Executive Officer: 200 BDT/month</li>
              <li>Advisory Council Member: 200 BDT/month</li>
              <li>Foreman: 150 BDT/month</li>
              <li>Mentor: 125 BDT/month</li>
              <li>Core Member: 100 BDT/month</li>
            </ul>
          </div>

          {/* Prohibited Activities */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Prohibited Activities
            </h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>Promote violence, hate, or discrimination.</li>
              <li>
                Support individuals or groups involved in such activities.
              </li>
              <li>Promote political candidates.</li>
              <li>Engage in sexual harassment.</li>
              <li>
                Join solely for purposes unrelated to the Foundation’s mission.
              </li>
              <li>Abuse authority granted by the Foundation.</li>
            </ul>
            <p className="mt-2 font-medium text-sm sm:text-base">
              Extra rule for executive officers: You must not be part of any
              other similar organization during your tenure.
            </p>
          </div>

          {/* Leaves */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Leaves</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>
                Up to 3 months leave per calendar year for reasonable causes.
              </li>
              <li>Additional leave during public exams or admission tests.</li>
              <li>
                Monthly fees still apply during leave; duties are suspended.
              </li>
            </ul>
          </div>

          {/* Termination */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Termination of Membership
            </h3>
            <p className="mt-2 text-sm sm:text-base">
              Membership may end if you resign or if:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm sm:text-base">
              <li>You breach the Member Agreement.</li>
              <li>You engage in misconduct or underperformance.</li>
              <li>
                You fail to meet contribution requirements for 3 months within
                12 months.
              </li>
            </ul>
            <p className="mt-2 text-sm sm:text-base">
              Termination resets your position and relieves unpaid dues.
              Dismissal may prevent re-registration.
            </p>
          </div>
        </section>

        {/* Additional Policies */}
        <section
          id="additional-policies"
          className="border-b border-gray-200 pb-6 space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">
            Additional Policies
          </h2>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Contact Policies
            </h3>
            <p className="mt-1 text-sm sm:text-base">
              Your contact information is used only to improve services and
              communication. It will not be shared with third parties.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Newsletter Policies
            </h3>
            <p className="mt-1 text-sm sm:text-base">
              Newsletter subscription information is only used for updates. No
              spam, no third-party sharing.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Cookies Policy</h3>
            <p className="mt-1 text-sm sm:text-base">
              We use cookies to enhance your experience and improve our website.
              By browsing, you consent to cookie usage.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about-us" className="border-b border-gray-200 pb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">
            About Us
          </h2>
          <p className="mt-1 text-sm sm:text-base">
            <strong>Founded:</strong> May 1, 2019
          </p>
          <p className="text-sm sm:text-base">
            Working for sustainable growth and improving the quality of life for
            the underprivileged.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="border-b border-gray-200 pb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">
            Get in Touch
          </h2>
          <p className="mt-1 text-sm sm:text-base">
            📞{" "}
            <a
              href="tel:+8801813182049"
              className="text-green-900 hover:underline"
            >
              +880 1813-182049
            </a>
          </p>
          <p className="text-sm sm:text-base">
            ✉️{" "}
            <a
              href="mailto:hello@hashimukh.org"
              className="text-green-900 hover:underline"
            >
              hello@hashimukh.org
            </a>
          </p>
          <p className="text-sm sm:text-base">
            💬{" "}
            <a
              href="https://m.me/hashimukhfdn"
              className="text-green-900 hover:underline"
            >
              Messenger
            </a>
          </p>
        </section>

        {/* Donate */}
        <section id="donate">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-900">
            Donate
          </h2>
          <p className="mt-1 text-sm sm:text-base">
            bKash: 01755037197 (Personal)
          </p>
          <p className="text-sm sm:text-base">Nagad: 01755037197 (Personal)</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-4 text-xs sm:text-sm">
        &copy; 2019 - 2025 Hashimukh Foundation. All Rights Reserved.
      </footer>
    </div>
  );
};

export default PoliciesPage;
