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
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              About Our Ministry
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Rooted in Exodus 17:12, we stand beside pastors like Aaron and Hur stood with Moses—strengthening weary hands so God’s work advances.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Our calling flows from Exodus 17:12—when Moses’ hands grew weary, Aaron and Hur stood beside him and held them up.
                  In that same spirit, we come alongside pastors so the banner of the Lord remains lifted high.
                </p>
                <p>
                  One hand lifts through education: we cover school fees for pastors’ children so shepherds can lead without the weight of worry.
                </p>
                <p>
                  The other hand lifts through church care: we clean and prepare God’s house so worship is dignified and welcoming.
                </p>
                <p>
                  Together, these two hands uphold weary arms—strengthening leaders, blessing families, and honoring the Lord.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                  <Heart className="w-24 h-24 md:w-32 md:h-32 text-cyan-600" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
                <CardHeader>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our ministry and inspire our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
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
              <span className="text-gray-700">aaronhur1@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700">+(250) 785-715-059</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700">Rwanda, Africa</span>
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