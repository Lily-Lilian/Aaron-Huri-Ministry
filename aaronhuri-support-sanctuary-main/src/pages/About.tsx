import { Heart, Users, BookOpen, HandHeart, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import samuelImg from "@/Images/President.jpeg";
import storyImg from "@/Images/AHM.jpeg";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Supporting Leaders",
      description: "We support church leaders by meeting practical needs that can distract from their ministry calling."
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "We provide training and development opportunities for pastors and their families to strengthen their ministry."
    },
    {
      icon: HandHeart,
      title: "Practical Care",
      description: "We offer hands-on support through children's education funding and church maintenance services."
    },
    {
      icon: Users,
      title: "Building Community",
      description: "We connect church leaders and their families for mutual support, encouragement, and partnership."
    }
  ];

  const founder = {
    name: "Samuel Ishimwe",
    role: "Founder & Vision Carrier",
    description:
      "Samuel carries the God-given vision to strengthen the work of God by supporting church leaders. His heart is to ensure that practical needs don't distract servants of God from their calling to advance the Kingdom.",
    image: samuelImg,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-6 shadow-lg ring-1 ring-gray-300 bg-gray-900"
              style={{
                backgroundImage: 'url(/logo.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <span className="sr-only">Aaron & Hur Ministry Logo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Our Ministry
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Supporting church leaders so they can focus on what matters most — 
              advancing God's Kingdom in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our mission began with a simple observation: many faithful church leaders 
                  struggle with practical needs that pull them away from their calling. 
                  Just as Aaron and Hur held up Moses' hands during battle, we come alongside 
                  pastors to provide the support they need.
                </p>
                <p>
                  We've seen how covering a child's school fees can free a pastor to focus 
                  on ministry. We've witnessed how maintaining God's house through church 
                  cleaning allows leaders to concentrate on shepherding their flock.
                </p>
                <p>
                  Through training, practical support, and building networks of mutual care, 
                  we ensure that the Lord's work flourishes in local communities. 
                  We believe that when we support the ministry, we support our own calling.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={storyImg}
                  alt="Aaron and Hur Ministry team working together"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our approach to supporting church leaders 
              and strengthening God's work in local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl aspect-[3/4] lg:aspect-[4/5]">
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 text-white">
              <p className="text-blue-400 font-medium mb-4">Our Leadership</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {founder.name}
              </h2>
              <p className="text-blue-400 text-xl font-semibold mb-6">{founder.role}</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                {founder.description}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-6 ring-1 ring-gray-300 bg-gray-900"
              style={{
                backgroundImage: 'url(/logo.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <span className="sr-only">Aaron & Hur Ministry Logo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              To strengthen the work of God by supporting church leaders and meeting 
              the practical needs that can distract from their calling to advance the Kingdom.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium text-lg italic">
                "When Moses' hands grew weary, Aaron and Hur held up his hands..."
              </p>
              <p className="text-blue-600 font-semibold mt-2">Exodus 17:12</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you want to learn more about our work, support our mission, 
            or explore partnership opportunities, we'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <Mail className="w-8 h-8 text-blue-600 mb-3" />
              <p className="text-gray-600 text-sm mb-2">Email us</p>
              <a href="mailto:aaronhur1@gmail.com" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                aaronhur1@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <Phone className="w-8 h-8 text-blue-600 mb-3" />
              <p className="text-gray-600 text-sm mb-2">Call us</p>
              <a href="tel:+250785715059" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                +(250) 785-715-059
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <p className="text-gray-600 text-sm mb-2">Visit us</p>
              <p className="text-gray-900 font-semibold">Rwanda, East Africa</p>
            </div>
          </div>

          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;