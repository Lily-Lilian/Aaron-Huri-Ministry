import { Mail, Phone, MapPin, Clock, Send, Heart } from "lucide-react";
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
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Contact Us
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We’d love to connect. If God is leading you to help “hold up the hands” of pastors through giving, prayer, or service reach out below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
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
                      className="mt-2 border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
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
                      className="mt-2 border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
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
                    className="mt-2 border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
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
                    className="mt-2 border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="mt-2 border-gray-300 focus:border-cyan-600 focus:ring-cyan-600"
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-base md:text-lg font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Email Us</CardTitle>
                        <CardDescription className="text-gray-600">
                          We'll respond within 24 hours
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-cyan-600 font-semibold">
                      Aaronhur1@gmail.com
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Call Us</CardTitle>
                        <CardDescription className="text-gray-600">
                          Available Monday - Friday
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-cyan-600 font-semibold">
                      +(250) 785-715-059
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Visit Us</CardTitle>
                        <CardDescription className="text-gray-600">
                          Our ministry location
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-cyan-600 font-semibold">
                      Rwanda, Africa
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Ways you can support us</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold">MTN Momo: 0781434943(Jackline)</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: "#e2e3da" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 md:w-16 md:h-16 text-cyan-600 mr-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Support Our Mission
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Your support helps us continue our work of supporting children's education 
            and maintaining clean church environments. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact; 