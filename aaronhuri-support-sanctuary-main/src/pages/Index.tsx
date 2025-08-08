import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, Star, ArrowRight, Play, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";

const Index = () => {
  const [showContinueButton, setShowContinueButton] = useState(false);

  useEffect(() => {
    // Show the continue watching button after 10 seconds
    const timer = setTimeout(() => {
      setShowContinueButton(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Mobile: video as background with overlay content */}
      <section className="relative block md:hidden">
        <div className="relative h-[100svh] overflow-hidden">
          {/* Background video */}
          <div className="absolute inset-0">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[200%] pointer-events-none"
              src="https://www.youtube.com/embed/KTvxHapBHDk?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&start=77&loop=1&playlist=KTvxHapBHDk"
              title="Aaron and Huri Ministry Background"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Overlay content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-4 sm:px-6">
              <div className="max-w-[92%]">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 drop-shadow-md">
                Serving God by Serving
                <span className="text-cyan-300"> Others</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed drop-shadow">
                Rooted in Exodus 17:12, Aaron and Huri Ministry exists to “hold up the hands” of pastors so the work of God continues with strength.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                    Support Our Mission
                  </Button>
                </Link>
                <Link to="/mission">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-2 border-white text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Desktop/Tablet */}
      <section className="relative hidden md:block py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Serving God by Serving
                <span className="text-cyan-600"> Others</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Rooted in Exodus 17:12, Aaron and Huri Ministry exists to “hold up the hands” of pastors so the work of God continues with strength.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                    Support Our Mission
                  </Button>
                </Link>
                <Link to="/mission">
                  <Button size="lg" variant="outline" className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/KTvxHapBHDk?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&start=77"
                  title="Aaron and Huri Ministry"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Continue watching overlay (desktop/tablet only) */}
                {showContinueButton && (
                  <div className="absolute inset-0 bg-black/60 hidden md:flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Continue Watching</h3>
                      <p className="text-cyan-100 mb-6 max-w-sm">
                        Watch more inspiring content from Aaron and Huri Ministry on YouTube
                      </p>
                      <a
                        href="https://youtube.com/@ahministrytv4742?feature=shared"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Like Aaron and Hur who steadied Moses’ hands (Exodus 17:12), we steady pastors through two graces: 
              covering school fees for their children and caring for God’s house by cleaning churches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
              <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
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
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 md:w-8 md:h-8 text-white" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
             Through the Aaron and Huri Ministry, we have made significant strides in supporting children and churches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">7</div>
              <div className="text-xl text-gray-600">Children Supported</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">40+</div>
              <div className="text-xl text-gray-600">Churches we cleaned</div>
            </div>

      <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-white" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
           Your partnership helps pastors remain focused on God’s work while we shoulder practical burdens—school fees and church care—together.
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
