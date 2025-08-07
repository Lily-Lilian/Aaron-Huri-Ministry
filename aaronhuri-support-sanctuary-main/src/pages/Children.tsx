import { Heart, Users, BookOpen, Star, MapPin, Calendar, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
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
      <section className="py-24 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mr-6 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Children We Support
            </h1>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Like Aaron and Hur lifted Moses’ hands (Exodus 17:12), we lift pastors by lifting their families—supporting their children’s education with dignity and hope.
          </p>
        </div>
      </section>

      {/* Children Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Children</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each child has a unique story, dreams, and potential. Through your support, 
              we're helping them build a foundation for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {children.map((child, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white hover:scale-105 relative">
                <div className="relative">
                  {/* Enhanced Hero Image */}
                  <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={child.image} 
                      alt={child.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/children-placeholder.svg";
                      }}
                    />
                    {/* Enhanced overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Enhanced Supported badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full px-3 py-1 shadow-lg border-2 border-white">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold">Supported</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced child info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-lg">{child.name}</h3>
                    <p className="text-sm font-medium text-gray-100 drop-shadow-lg">
                      {child.age} years old • {child.grade}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-cyan-700 font-semibold uppercase tracking-wide">School</p>
                          <p className="font-bold text-gray-900 text-sm">{child.school}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-cyan-700 font-semibold uppercase tracking-wide">Supported Since</p>
                          <p className="font-bold text-gray-900 text-sm">{child.supportedSince}</p>
                        </div>
                      </div>
                      
                      {child.country && (
                        <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-cyan-700 font-semibold uppercase tracking-wide">Country</p>
                            <p className="font-bold text-gray-900 text-sm">{child.country}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="pt-4">
                      <Link to="/contact">
                        <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-sm font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          Support {child.name.split(' ')[0]}'s Education
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Help */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">How You Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your support makes a real difference in these children's lives. 
              Here are ways you can contribute to their education and future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Monthly Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Sponsor a child's education with a monthly donation. You'll receive updates 
                  on their progress and achievements.
                </CardDescription>
                <Link to="/contact">
                  <Button className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-6 shadow-lg">
                    Sponsor a Child
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">One-Time Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Make a one-time donation to support our education fund. Every dollar goes 
                  directly to paying school fees for children in need.
                </CardDescription>
                <Link to="/contact">
                  <Button className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-6 shadow-lg">
                    Donate Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Share our mission with friends and family. Help us reach more children 
                  who need educational support.
                </CardDescription>
                <Link to="/contact">
                  <Button className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg font-semibold py-6 shadow-lg">
                    Share Our Mission
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-16 h-16 text-white mr-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Change a Child's Life
            </h2>
          </div>
          <p className="text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your support provides education, hope, and opportunity to children who need it most. 
            Join us in building brighter futures, one child at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-50 px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Support Education
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-6 text-xl font-semibold transition-all duration-300">
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