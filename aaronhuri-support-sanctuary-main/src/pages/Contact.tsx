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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
              Contact Us
            </h1>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you want to learn more about our work, 
            support our mission, or get involved, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gray-50">
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

                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-semibold">
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
                      <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
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
                      info@aaronhuriministries.org
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
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
                      +1 (555) 123-4567
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
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
                      Burundi, Africa
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Office Hours</CardTitle>
                        <CardDescription className="text-gray-600">
                          When we're available
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Sunday:</span> Closed
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
      <section className="py-24 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-16 h-16 text-white mr-6" />
            <h2 className="text-4xl font-bold text-white">
              Support Our Mission
            </h2>
          </div>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Your support helps us continue our work of supporting children's education 
            and maintaining clean church environments. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact; 