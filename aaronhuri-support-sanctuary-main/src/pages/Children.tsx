import { Heart, Users, BookOpen, MapPin, Calendar, GraduationCap, Baby } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

const Children = () => {
  const children = [
    {
      name: "Aimé Carine IRAHUMURIZA",
      age: 6,
      grade: "Primary 1",
      image: "/carine.jpeg",
      school: "Collette de Brandt",
      country: "Burundi",
      supportedSince: "2024",
    },
    {
      name: "Irishura Ido Asafu",
      age: 6,
      grade: "Primary 3",
      image: "/ido.jpeg",
      school: "Children Future School Ngozi",
      country: "Burundi",
      supportedSince: "2024",
    },
    {
      name: "Faraja Francine",
      age: 7,
      grade: "Top Class",
      image: "/faraja.jpeg",
      school: "Children Future School Ngozi",
      country: "Burundi",
      supportedSince: "2024",
    },
    {
      name: "Byiringiro Josue",
      age: 18,
      grade: "S5 MEG",
      image: "/Josue.jpeg",
      school: "Faith Christian School",
      country: "Burundi",
      supportedSince: "2023",
    },
    {
      name: "MUGISHA Rachel",
      age: 16,
      grade: "S2 (2ème)",
      image: "/Rachel.jpeg",
      school: "St Mary's",
      country: "Uganda",
      church: "HOREB CELEBRATION CENTER",
      supportedSince: "2024",
    },
    {
      name: "Gwiza Adonikam Rubibi",
      age: 8,
      grade: "Primary 3",
      image: "/Gwiza.jpeg",
      school: "Bint Abas Junior School",
      country: "Uganda",
      church: "Elim Lifebridge Ministries",
      supportedSince: "2024",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full mb-6 shadow-lg">
              <Baby className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pastor's Children We Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Supporting the education and development of pastors' children so their parents 
              can focus on ministry without worrying about school fees and educational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Children Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Children</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each child represents hope for the future. By supporting their education, 
              we're investing in the next generation of Kingdom workers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {children.map((child, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Image */}
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/children-placeholder.svg";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name and basic info */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{child.name}</h3>
                    <p className="text-gray-600">{child.age} years old • {child.grade}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">School</p>
                        <p className="text-sm font-medium text-gray-900">{child.school}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Country</p>
                        <p className="text-sm font-medium text-gray-900">{child.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Supported Since</p>
                        <p className="text-sm font-medium text-gray-900">{child.supportedSince}</p>
                      </div>
                    </div>

                    {child.church && (
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <Heart className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Church</p>
                          <p className="text-sm font-medium text-gray-900">{child.church}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ Currently Supported
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Help */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How You Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support helps pastors focus on ministry by removing the burden of school fees 
              and educational expenses for their children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Provide consistent monthly support for a child's education, helping cover school fees, 
                supplies, and other educational needs.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Support Monthly
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">One-Time Gift</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Make a one-time donation to help with immediate educational needs like school fees, 
                uniforms, or learning materials.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  Give Once
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share the Need</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Help us reach more people who can support pastors' children. Share our mission 
                with your church and community.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold">
                  Share Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Education Frees Ministry
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              When pastors don't have to worry about their children's school fees, they can focus 
              completely on their calling. Your support removes this distraction and strengthens 
              the work of God in local communities.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium italic">
                "Just as Aaron and Hur supported Moses by holding up his hands, 
                we support pastors by caring for their children's education."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Support a Child's Education
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your partnership helps free pastors to focus on ministry while ensuring 
            their children receive quality education. Together, we're investing in the future of the Church.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Support Education
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-300 px-8 py-4 text-lg font-semibold">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Children;