import { Heart, Users, BookOpen, MapPin, Calendar, Church, ChevronLeft, ChevronRight, Play, Pause, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Media assets
import Church1Img from "@/Images/Church1.jpeg";
import Church2Img from "@/Images/Church2.jpeg";
import ChurchCImg from "@/Images/churchc.jpeg";
import NewCImg from "@/Images/NewC.jpeg";
import Church3Video from "@/Images/Church3.mp4";

const Churches = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const churches = [
    {
      name: "HOREB CELEBRATION CENTER",
      location: "Uganda",
      image: Church1Img
    },
    {
      name: "Agape Baptist Church",
      location: "Uganda", 
      image: Church2Img,
    },
    {
      name: "Agape Full Gospel Church",
      location: "Burundi",
      image: ChurchCImg,
    },
    {
      name: "Bethesda Holy Church",
      location: "Rwanda",
      image: NewCImg,
    },
    {
      name: "EPR Church",
      location: "Rwanda",
      image: Church3Video,
    },
    {
      name: "zion temple Rwamagana",
      location: "Rwanda",
      image: ChurchCImg,
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % churches.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, churches.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % churches.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + churches.length) % churches.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full mb-6 shadow-lg">
              <Church className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Churches We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We strengthen God's work by maintaining clean and dignified worship spaces, 
              allowing church leaders to focus on ministry instead of cleaning concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Church Showcase - Simplified */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Church Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're honored to serve these church communities through regular cleaning and maintenance, 
              supporting their mission to advance God's Kingdom.
            </p>
          </div>

          {/* Featured Church Display */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Media */}
              <div className="h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                {typeof churches[currentSlide].image === 'string' && churches[currentSlide].image.endsWith('.mp4') ? (
                  <video className="w-full h-full object-cover" src={churches[currentSlide].image} autoPlay loop muted playsInline />
                ) : (
                  <img
                    src={churches[currentSlide].image}
                    alt={churches[currentSlide].name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                )}
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Church className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {churches[currentSlide].name}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {churches[currentSlide].location}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {churches[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {churches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-blue-400'
                  }`}
                  aria-label={`Go to church ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Church Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churches.map((church, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${
                  index === currentSlide 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-transparent hover:border-blue-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Church className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{church.name}</h3>
                    <p className="text-gray-600 text-xs">{church.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {church.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Help */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Support Church Maintenance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your support helps us maintain clean and dignified worship spaces, 
              allowing pastors to focus on ministry rather than building maintenance concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Church className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Invite Us to Your Church</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Do you need cleaning services for your church? Contact us to schedule a visit. 
                We'll come to your church and provide professional cleaning services to maintain a dignified worship environment.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Request Service
                </Button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Help Us Reach Your Church</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Know a church that could benefit from our cleaning services? Help us connect with church leaders 
                in your community who might need support maintaining their worship spaces.
              </p>
              <Link to="/contact">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  Make a Connection
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
              <Church className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving God's House
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Clean churches aren't just about appearance they're about dignity, respect, and removing 
              distractions so that worshippers can focus on God and pastors can focus on ministry. 
              Every church we serve is better equipped to fulfill its mission.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium">
                <strong>40+ churches</strong> served across Uganda, Burundi, and Rwanda
              </p>
              <p className="text-blue-700 mt-2">
                Hundreds of pastors freed to focus on ministry instead of maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Help Us Serve More Churches
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your partnership allows us to expand our church cleaning ministry, reaching more 
            communities and freeing more pastors to focus on their calling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Support Church Ministry
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

export default Churches;