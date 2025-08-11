import React from "react";
import Footer from "./Footer.jsx";
import Image from "../assets/aboutbg.webp";
import {
  Users,
  Heart,
  BookOpen,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional icon
import FloatyNavbar from "./FloatyNavbar.jsx";

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* <img src={Image} alt="" /> */}
      {/* Page Header */}
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
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Working for sustainable growth and empowering communities through
            education, compassion, and hope since 2019
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In mid-2019, Hashimukh was founded by a group of passionate
                  students from{" "}
                  <strong className="text-green-600">
                    Bindu Basini Govt. Boys' High School
                  </strong>{" "}
                  with a noble mission to help people recover from disasters and
                  improve the quality of their lives.
                </p>
                <p>
                  Initially, our dedicated members were exclusively from Bindu
                  Basini Govt. Boys' High School, but our vision soon expanded
                  beyond boundaries. We extended our reach to include students
                  from{" "}
                  <strong className="text-green-600">
                    Police Lines Adarsha High School
                  </strong>
                  .
                </p>
                <p>
                  Today, we are proud to have{" "}
                  <strong className="text-green-600">
                    more than a hundred dedicated members
                  </strong>{" "}
                  from both high schools and colleges across Bangladesh, all
                  united in our mission and successfully working towards our
                  shared goal of creating positive change in our communities.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="border-r border-gray-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    2019
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="border-r border-gray-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    2
                  </div>
                  <div className="text-sm text-gray-600">Partner Schools</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ∞
                  </div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-green-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Hashimukh Foundation is a humanitarian organization working actively
            to improve the quality of underprivileged lives regardless of their
            religious status or political views. We believe in creating
            sustainable change through education, social welfare, and disaster
            recovery efforts.
          </p>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on three core areas to create meaningful and lasting
              impact in our communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Objective 1 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Educational Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create educational opportunities for the underprivileged
                children, ensuring access to quality learning and brighter
                futures.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                <span className="text-sm text-gray-500">Active Program</span>
              </div>
            </div>

            {/* Objective 2 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Social Welfare
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize and participate in social welfare events to strengthen
                communities and spread compassion throughout society.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                <span className="text-sm text-gray-500">Active Program</span>
              </div>
            </div>

            {/* Objective 3 */}
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Help people who confront difficulties to recover from disasters
                and rebuild their lives with dignity and hope.
              </p>
              <div className="mt-4 flex items-center justify-center">
                <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                <span className="text-sm text-gray-500">Active Program</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inclusivity</h4>
              <p className="text-sm text-gray-600">
                Serving all regardless of background
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Compassion</h4>
              <p className="text-sm text-gray-600">
                Leading with empathy and care
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                Transparent and ethical practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-green-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">
                Committed to quality impact
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
