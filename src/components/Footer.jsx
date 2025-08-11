import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h3 className="text-xl font-bold">Hashimukh Foundation</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Hashimukh Foundation is a humanitarian organization working
              actively to improve the quality of underprivileged lives.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong className="text-white">Founded:</strong> May 01, 2019
              </p>
              <p>
                <strong className="text-white">Mission:</strong> Working for
                sustainable growth.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">
              Get in touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400" />
                <div>
                  <span className="text-sm text-gray-300">Phone:</span>
                  <a
                    href="tel:+8801813182049"
                    className="text-white hover:text-green-400 transition-colors ml-2"
                  >
                    +880 1813-182049
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400" />
                <div>
                  <span className="text-sm text-gray-300">Email:</span>
                  <a
                    href="mailto:hello@hashimukh.org"
                    className="text-white hover:text-green-400 transition-colors ml-2"
                  >
                    hello@hashimukh.org
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <div>
                  <span className="text-sm text-gray-300">Messenger:</span>
                  <a
                    href="https://m.me/hashimukhfdn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors ml-2"
                  >
                    @hashimukhfdn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Donate Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">Donate</h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">bKash:</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                    Personal
                  </span>
                </div>
                <p className="text-white font-mono">01755037197</p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Nagad:</span>
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                    Personal
                  </span>
                </div>
                <p className="text-white font-mono">01755037197</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Website Link */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-400" />
              <a
                href="https://hashimukh.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors"
              >
                hashimukh.org
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Find us on</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2024 Hashimukh Foundation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
