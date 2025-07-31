import { Heart, Users, BookOpen, Star, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We serve with genuine care and empathy for every child and community we support."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "We believe education is the foundation for a brighter future and lasting change."
    },
    {
      icon: Users,
      title: "Community",
      description: "We strengthen communities by supporting both children and church environments."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from education support to church maintenance."
    }
  ];

  const team = [
    {
      name: "Aaron",
      role: "Founder & Director",
      description: "Leading our mission to support children's education and church communities."
    },
    {
      name: "Huri",
      role: "Co-Founder & Operations",
      description: "Overseeing our church cleaning initiatives and community outreach programs."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
              About Our Ministry
            </h1>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Aaron and Huri Ministry is strengthen, support and maintain the work of God in the hands of church leaders
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Aaron and Huri Ministry was founded with a simple yet powerful vision: 
                  to support pastors and their communities in two essential ways.
                </p>
                <p>
                  Through the hand of Aaron, we support children's education by paying 
                  school fees for families who cannot afford them. We believe every child 
                  deserves access to quality education, regardless of their family's 
                  financial situation.
                </p>
                <p>
                  Through the hand of Huri, we maintain clean and welcoming church 
                  environments. A clean church reflects our respect for God's house and 
                  creates a dignified space for worship and community gatherings.
                </p>
                <p>
                  Together, these two pillars of our ministry work to strengthen 
                  communities, support families, and create lasting positive change.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-cyan-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our ministry and inspire our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-lg text-cyan-600 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed text-center">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you want to learn more about our work, 
            support our mission, or get involved, we're here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700">info@aaronhuriministries.org</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700">Burundi, Africa</span>
            </div>
          </div>

          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
            Contact Us
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About; 