import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  TrendingUp,
  Shield,
  Truck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SecondhandMarketplace() {
  const [activeCategory, setActiveCategory] = useState("semua");

  const categories = [
    { id: "semua", name: "Semua" },
    { id: "elektronik", name: "Elektronik" },
    { id: "furniture", name: "Furniture" },
    { id: "fashion", name: "Fashion" },
    { id: "olahraga", name: "Olahraga" },
  ];

  const products = [
    {
      id: 1,
      name: "iPhone 12 Pro Max",
      price: "Rp 8.500.000",
      originalPrice: "Rp 15.000.000",
      condition: "Seperti Baru",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop",
      category: "elektronik",
    },
    {
      id: 2,
      name: "Sofa Minimalis 3 Seater",
      price: "Rp 2.750.000",
      originalPrice: "Rp 5.000.000",
      condition: "Sangat Baik",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      category: "furniture",
    },
    {
      id: 3,
      name: "Sepeda Gunung MTB",
      price: "Rp 3.200.000",
      originalPrice: "Rp 6.500.000",
      condition: "Baik",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop",
      category: "olahraga",
    },
    {
      id: 4,
      name: "Tas Kulit Premium",
      price: "Rp 850.000",
      originalPrice: "Rp 2.000.000",
      condition: "Seperti Baru",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=300&fit=crop",
      category: "fashion",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Terjamin Aman",
      desc: "Barang dijamin kualitasnya",
    },
    { icon: Truck, title: "Gratis Ongkir", desc: "Untuk pembelian tertentu" },
    { icon: Clock, title: "Proses Cepat", desc: "Pengiriman dalam 24 jam" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-blue-600">
                BekasMart
              </span>
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
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Masuk
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMTEgMCAyLS44OSAyLTJzLS44OS0yLTItMi0yIC44OS0yIDIgLjg5IDIgMiAyeiIvPjwvZz48L2c+PC9zdmc+')] animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-blue-600 hover:bg-blue-50">
              🔥 Hemat hingga 70%
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Barang Bekas
              <br />
              <span className="text-blue-200">Kualitas Premium</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Temukan barang berkualitas dengan harga terjangkau. Ramah
              lingkungan, hemat kantong!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari barang yang kamu inginkan..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
              >
                Cari Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kategori Populer
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Produk Pilihan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-blue-100 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    {product.condition}
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 left-3 bg-white hover:bg-blue-50"
                  >
                    <Heart className="w-4 h-4 text-blue-600" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Beli Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Mulai Berbelanja Hemat Hari Ini
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Bergabung dengan ribuan pembeli pintar yang sudah berhemat hingga
            jutaan rupiah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Daftar Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Jelajahi Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
      </footer>
    </div>
  );
}
