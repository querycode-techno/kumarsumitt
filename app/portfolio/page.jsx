"use client";

import Link from "next/link";
import { User, Video, Briefcase, BookOpen } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const portfolioCategories = [
  {
    title: "Actor",
    description: "Explore my journey and achievements in the world of acting",
    icon: <User className="h-8 w-8" />,
    link: "/portfolio/actor",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Director",
    description: "Discover my directorial works and creative vision",
    icon: <Video className="h-8 w-8" />,
    link: "/portfolio/director",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Entrepreneur",
    description: "Learn about my business ventures and entrepreneurial initiatives",
    icon: <Briefcase className="h-8 w-8" />,
    link: "/portfolio/entrepreneur",
    color: "from-green-500 to-pink-500",
  },
  {
    title: "Research",
    description: "Dive into my academic research and scholarly contributions",
    icon: <BookOpen className="h-8 w-8" />,
    link: "/portfolio/research",
    color: "from-pink-500 to-green-500",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl mt-8 font-bold mb-6 bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
            Portfolio
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover my diverse range of work across acting, directing, entrepreneurship, and research
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl border border-gray-100">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
