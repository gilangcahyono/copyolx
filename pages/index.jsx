import React, { useState } from "react";
import {
  Search,
  Heart,
  Star,
  Shield,
  TrendingUp,
  Truck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer.jsx";

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
    <>
      <Header />
      <div className="h-screen bg-red-500"></div>
      <Footer />
    </>
  );
}
