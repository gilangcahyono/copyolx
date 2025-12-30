import React from "react";
import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 -mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">BekasMart</span>
            </div>
            <p className="text-gray-400">
              Platform jual beli barang bekas terpercaya di Indonesia
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Cara Belanja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition"
              >
                <div className="w-6 h-6"></div>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition"
              >
                <div className="w-6 h-6"></div>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition"
              >
                <div className="w-6 h-6"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BekasMart. Semua hak dilindungi.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
