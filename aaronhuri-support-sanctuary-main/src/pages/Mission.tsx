import { Heart, Users, BookOpen, Target, ArrowRight, CheckCircle, HandHeart, Church, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Mission = () => {
  const coreAreas = [
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "We provide training and support for pastors and their children, ensuring they are equipped for effective ministry and personal growth.",
      benefits: [
        "Practical ministry training for pastors",
        "Educational support for pastors' children",
        "Spiritual development programs",
        "Leadership skills development"
      ]
    },
    {
      icon: HandHeart,
      title: "Resource Mobilization",
      description: "We connect unused resources with Kingdom needs, ensuring that every available resource serves God's purposes effectively.",
      benefits: [
        "Strategic resource allocation",
        "Community partnership building",
        "Sustainable ministry support",
        "Maximum Kingdom impact"
      ]
    }
  ];

  const objectives = [
    {
      icon: Church,
      title: "Support Ongoing Ministry",
      description: "Assist existing church work through practical means that promote and strengthen ministry effectiveness."
    },
    {
      icon: GraduationCap,
      title: "Train Leaders & Families",
      description: "Equip pastors and their children with the skills and support needed for effective service."
    },
    {
      icon: Target,
      title: "Channel Resources",
      description: "Connect underutilized resources with Kingdom work to maximize impact for God's purposes."
    },
    {
      icon: Users,
      title: "Build Networks",
      description: "Create connections between servants of God and their families for mutual support and encouragement."
    },
    {
      icon: Heart,
      title: "Mobilize Members",
      description: "Recruit and activate ministry members, providing platforms for them to express their God-given gifts."
    }
  ];

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
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              To strengthen God's work by supporting church leaders and meeting the practical needs 
              that can distract from their calling to advance the Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Foundation */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-8">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-6 ring-1 ring-gray-300 bg-gray-900"
                style={{
                  backgroundImage: 'url(/logo.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                <span className="sr-only">Aaron & Hur Ministry Logo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Biblical Foundation
              </h2>
              <p className="text-lg text-gray-600">
                Just as Aaron and Hur supported Moses during battle, we support church leaders in their ministry.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 lg:p-8 border-l-4 border-blue-600">
              <p className="text-blue-800 text-lg md:text-xl font-medium italic mb-4">
                "When Moses' hands grew weary, Aaron and Hur held up his hands, 
                one on one side and the other on the other side. So his hands were steady until sunset."
              </p>
              <p className="text-blue-600 font-semibold">Exodus 17:12</p>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our mission is simple: meet the practical needs that distract church leaders 
                from their calling, so they can focus on what matters most building God's Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on two primary areas that make the biggest impact on church leaders' 
              ability to fulfill their calling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {coreAreas.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What This Includes:</h4>
                  {area.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These specific objectives guide our daily work and long-term strategy 
              for supporting church leaders.
            </p>
          </div>

          <div className="space-y-8">
            {/* Top row - 3 objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {objectives.slice(0, 3).map((objective, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <objective.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Bottom row - 2 objectives taking full width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {objectives.slice(3, 5).map((objective, index) => (
                <div key={index + 3} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <objective.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow biblical principles and practical strategies to ensure 
              effective ministry support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Biblical Strategy */}
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Biblical Foundation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Servant Leadership</h4>
                  <p className="text-blue-800 italic mb-3">
                    "Do not think only about the things that you want to do for yourself. 
                    Each of you should think also about how you can help other people."
                  </p>
                  <p className="text-sm text-blue-600 mb-3">— Philippians 2:4</p>
                  <p className="text-gray-700">
                    We prioritize others' needs above our own, offering care and practical support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Preventing Loss</h4>
                  <p className="text-blue-800 italic mb-3">
                    "The satraps were made accountable to them so that the king might not suffer loss."
                  </p>
                  <p className="text-sm text-blue-600 mb-3">— Daniel 6:3</p>
                  <p className="text-gray-700">
                    We ensure God's work doesn't suffer loss by maintaining excellence and accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Strategy */}
            <div className="bg-green-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Practical Methods</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Direct Service</h4>
                    <p className="text-gray-700">We serve with our own hands through cleaning and maintenance work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Mobilization</h4>
                    <p className="text-gray-700">We recruit like-minded believers to join this important work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Partnership Building</h4>
                    <p className="text-gray-700">We connect partners willing to invest in Kingdom advancement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Structure */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Ministry Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've organized our ministry into focused departments to ensure 
              effective service and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Coordination Office",
              "Administration", 
              "Mobilization & Outreach",
              "Training & Development",
              "Finance & Resources",
              "Prayer & Intercession",
              "Member Care & Support"
            ].map((department, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-lg">{index + 1}</div>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{department}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your support enables church leaders to focus on their calling while we handle 
            the practical needs. Together, we can strengthen God's work in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Support Our Mission
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-300 px-8 py-4 text-lg font-semibold">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;