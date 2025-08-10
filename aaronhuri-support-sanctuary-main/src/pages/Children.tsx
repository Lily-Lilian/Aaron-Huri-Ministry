import { Heart, Users, BookOpen, Star, MapPin, Calendar, Award, GraduationCap } from "lucide-react";
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
      image: "/WhatsApp Image 2025-07-23 at 21.01.49.jpeg",
      school: "Collette de Brandt",
      country: "Burundi",
      supportedSince: "2024",
    },
    {
      name: "Irishura Ido Asafu",
      age: 6,
      grade: "Primary 3",
      image: "/WhatsApp Image 2025-07-23 at 21.03.02.jpeg",
      school: "Children Future School Ngozi",
      country: "Burundi",
      supportedSince: "2024",
    },
    {
      name: "Faraja Francine",
      age: 7,
      grade: "Top Class",
      image: "/WhatsApp Image 2025-07-24 at 01.19.39.jpeg",
      school: "Children Future School Ngozi",
      country: "Burundi",
      supportedSince: "2024",
    },
    {
      name: "Byiringiro Josue",
      age: 18,
      grade: "S5 MEG",
      image: "/WhatsApp Image 2025-07-24 at 14.07.34.jpeg",
      school: "Faith Christian School",
      country: "Burundi",
      supportedSince: "2023",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-xl">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-[hsl(var(--foreground))]">
              Children We Support
            </h1>
          </Reveal>
          <Reveal className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" delayMs={80}>
            Like Aaron and Hur lifted Moses’ hands (Exodus 17:12), we lift pastors by lifting their families supporting their children’s education with dignity and hope.
          </Reveal>
        </div>
      </section>

      {/* Children Grid */}
      <section className="py-24 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Children</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each child has a unique story, dreams, and potential. Through your support, 
              we're helping them build a foundation for success.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {children.map((child, index) => (
              <Reveal key={index} delayMs={index * 60}>
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group bg-white relative">
                <div className="relative">
                  {/* Image */}
                  <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/children-placeholder.svg";
                      }}
                    />
                  </div>
                </div>

                <CardContent className="p-5">
                  {/* Name + meta */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 tracking-tight">{child.name}</h3>
                      <p className="text-sm text-gray-600">{child.age} years • {child.grade}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-700">
                      <Star className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      Supported
                    </span>
                  </div>

                  {/* Info rows */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">School</p>
                        <p className="text-sm font-medium text-gray-900">{child.school}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Supported Since</p>
                        <p className="text-sm font-medium text-gray-900">{child.supportedSince}</p>
                      </div>
                    </div>

                    {child.country && (
                      <div className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                        <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] text-gray-500 uppercase tracking-wide">Country</p>
                          <p className="text-sm font-medium text-gray-900">{child.country}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50 text-sm font-semibold py-3"
                      >
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Support Education
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Help */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How You Can Help</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your support makes a real difference in these children's lives. 
              Here are ways you can contribute to their education and future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Monthly Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Sponsor a child's education with a monthly donation. You'll receive updates 
                  on their progress and achievements.
                </CardDescription>
                <Link to="/contact">
                  <Button className="mt-8 w-full bg-cyan-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-6 shadow-lg">
                    Sponsor a Child
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">One-Time Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Make a one-time donation to support our education fund. Every dollar goes 
                  directly to paying school fees for children in need.
                </CardDescription>
                <Link to="/contact">
                  <Button className="mt-8 w-full bg-cyan-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-6 shadow-lg">
                    Donate Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Share our mission with friends and family. Help us reach more children 
                  who need educational support.
                </CardDescription>
                <Link to="/contact">
                  <Button className="mt-8 w-full bg-cyan-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-6 shadow-lg">
                    Share Our Mission
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24" style={{ backgroundColor: "#e2e3da" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-cyan-600 mr-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Change a Child's Life
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your support provides education, hope, and opportunity to children who need it most. 
            Join us in building brighter futures, one child at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 px-8 py-5 text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Support Education
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white px-8 py-5 text-lg md:text-xl font-semibold transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Children; 