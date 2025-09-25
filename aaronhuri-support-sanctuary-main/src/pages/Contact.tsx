import { Mail, Phone, MapPin, Send, Heart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full mb-6 shadow-lg">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Whether you want to support our mission, learn more about our work, 
              or explore partnership opportunities, we'd love to connect with you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="mt-2 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="mt-2 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    className="mt-2 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry or how you'd like to get involved..."
                    rows={6}
                    className="mt-2 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base md:text-lg font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to answer your questions 
                and help you get involved in supporting God's work.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-3">We'll respond within 24 hours</p>
                      <a href="mailto:aaronhur1@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        aaronhur1@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-3">Available Monday - Friday</p>
                      <a href="tel:+250785715059" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                        +(250) 785-715-059
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600 mb-3">Our ministry location</p>
                      <p className="text-purple-600 font-semibold">
                        Rwanda, East Africa
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support Methods */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Support Our Mission</h3>
                      <p className="text-gray-600 mb-4">You can support our work through mobile money:</p>
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <p className="text-blue-800 font-semibold">
                          MTN Mobile Money: 0781434943
                        </p>
                        <p className="text-blue-700 text-sm mt-1">(Jackline)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Just as Aaron and Hur supported Moses by holding up his hands, we support church leaders 
              by handling practical needs so they can focus on ministry. Your partnership makes this possible.
            </p>
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-600 mb-8">
              <p className="text-blue-800 font-medium italic text-lg">
                "When Moses' hands grew weary, Aaron and Hur held up his hands..."
              </p>
              <p className="text-blue-600 font-semibold mt-2">Exodus 17:12</p>
            </div>
            <p className="text-gray-600 mb-8">
              Whether you're interested in supporting children's education, church maintenance, 
              or training programs, there are many ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Support Our Work
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your support helps free church leaders to focus on ministry while we handle 
            practical needs. Together, we can strengthen God's work in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:aaronhur1@gmail.com">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Email Us Today
              </Button>
            </a>
            <a href="tel:+250785715059">
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-300 px-8 py-4 text-lg font-semibold">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;