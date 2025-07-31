import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Star, ArrowRight, Play } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
               Serving God by Serving 
                <span className="text-cyan-600"> Others</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Aaron and Huri Ministry is dedicated to strengthening, supporting, and maintaining the work of God in the hands of church leaders.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                  Support Our Mission
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  poster="/ministry-video.mp4"
                >
                  <source src="/ministry-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-cyan-600 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We support pastors in two key ways: paying children's school fees and 
              cleaning churches to create better environments for worship and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  We pay school fees for the pastor's children who needs it most.
                  This ensures they can attend school regularly and the pastor can focus on their ministry work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Church Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  We clean churches to create welcoming, safe environments for worship 
                  and community gatherings. A clean church reflects our respect for 
                  God's house and the community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through your support, we've been able to make a real difference in 
              children's lives and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-xl text-gray-600">Children Supported</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-xl text-gray-600">Schools Partnered</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-xl text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Your support helps us continue our mission of supporting children's education 
            and maintaining clean, welcoming church environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
              Support Our Mission
            </Button>
            <Link to="/children">
              <Button size="lg" variant="outline" className="border-2 border-white text-cyan-600 hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg">
                Meet Our Children
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
