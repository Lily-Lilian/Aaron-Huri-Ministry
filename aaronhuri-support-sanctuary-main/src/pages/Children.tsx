import { Heart, Users, BookOpen, Star, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Children = () => {
  const children = [
    {
      name: "Aimé Carine IRAHUMURIZA",
      age: 6,
      grade: "Primary 1",
      image: "/WhatsApp Image 2025-07-23 at 21.01.49.jpeg",
      school: "Collette de Brandt",
      country: "Burundi",
      supportedSince: "2024"
    },
    {
      name: "Faraja Francine",
      age: 6,
      grade: "Top Class",
      image: "/WhatsApp Image 2025-07-23 at 21.03.02.jpeg",
      school: "Hope Academy",
      country: "Burundi",
      supportedSince: "2024"
    },
    {
      name: "Irishura Ido Asafu",
      age: 7,
      grade: "Primary 3",
      image: "/WhatsApp Image 2025-07-24 at 01.19.39.jpeg",
      school: "Children Future School Ngozi",
      country: "Burundi",
      supportedSince: "2024"
    },
    {
      name: "Byiringiro Josue",
      age: 18,
      grade: "S5 MEG",
      image: "/WhatsApp Image 2025-07-24 at 14.07.34.jpeg",
      school: "Faith Christian School",
      country: "Burundi",
      supportedSince: "2023"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
              Children We Support
            </h1>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the amazing children whose education we support. Each child has dreams, 
            talents, and a bright future ahead. Your support makes their dreams possible.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {children.map((child, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white">
                <div className="relative">
                  {/* Large Hero Image */}
                  <div className="h-96 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={child.image} 
                      alt={child.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/children-placeholder.svg";
                      }}
                    />
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating info badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-cyan-600 fill-current" />
                        <span className="text-sm font-semibold text-gray-800">Supported</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Child info overlay at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">{child.name}</h3>
                    <p className="text-xl font-medium text-gray-200">
                      {child.age} years old • {child.grade}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">School</p>
                          <p className="font-semibold text-gray-900 text-lg">{child.school}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Supported Since</p>
                          <p className="font-semibold text-gray-900 text-lg">{child.supportedSince}</p>
                        </div>
                      </div>
                      
                      {child.country && (
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                          <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">Country</p>
                            <p className="font-semibold text-gray-900 text-lg">{child.country}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="pt-6">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        Support {child.name.split(' ')[0]}'s Education
                      </Button>
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
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Monthly Sponsorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Sponsor a child's education with a monthly donation. You'll receive updates 
                  on their progress and achievements.
                </CardDescription>
                <Button className="mt-8 w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-6 shadow-lg">
                  Sponsor a Child
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">One-Time Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Make a one-time donation to support our education fund. Every dollar goes 
                  directly to paying school fees for children in need.
                </CardDescription>
                <Button className="mt-8 w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-6 shadow-lg">
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Share our mission with friends and family. Help us reach more children 
                  who need educational support.
                </CardDescription>
                <Button className="mt-8 w-full bg-cyan-600 hover:bg-cyan-700 text-white text-lg font-semibold py-6 shadow-lg">
                  Share Our Mission
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-cyan-600">
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
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-50 px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              Support Education
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-6 text-xl font-semibold transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Children; 