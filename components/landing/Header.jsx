import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, ShoppingCart } from "lucide-react";

import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-blue-600">BekasMart</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Beranda
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Produk
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Kategori
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Tentang
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-blue-600">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-600">
              <ShoppingCart className="w-5 h-5" />
            </Button>

            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
