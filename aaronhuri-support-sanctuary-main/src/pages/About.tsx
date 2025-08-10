import { Heart, Users, BookOpen, Star, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import samuelImg from "@/Images/WhatsApp Image 2025-08-09 at 12.28.22.jpeg";
import storyImg from "@/Images/WhatsApp Image 2025-08-10 at 16.22.45.jpeg";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";

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

  // Leadership profile (single featured leader)
  const founder = {
    name: "Samuel Ishimwe",
    role: "Founder",
    description:
      "Samuel carries the God-given vision to uphold pastors and their families paying school fees for their children and caring for God’s house so shepherds can lead without the weight of worry.",
    image: samuelImg,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-[hsl(var(--foreground))]">
              About Our Ministry
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Rooted in Exodus 17:12, we stand beside pastors like Aaron and Hur stood with Moses strengthening weary hands so God’s work advances.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal className="order-2 lg:order-1">
              <h2 className="text-xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
                We are: For God. For pastors.
                <br className="hidden md:block" /> For the church. For the world.
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Our calling flows from Exodus 17:12 when Moses’ hands grew weary, Aaron and Hur stood beside him and held them up.
                  In that same spirit, we come alongside pastors so the banner of the Lord remains lifted high.
                </p>
                <p>
                  One hand lifts through education: we cover school fees for pastors’ children so shepherds can lead without the weight of worry.
                </p>
                <p>
                  The other hand lifts through church care: we clean and prepare God’s house so worship is dignified and welcoming.
                </p>
                <p>
                  Together, these two hands uphold weary arms strengthening leaders, blessing families, and honoring the Lord.
                </p>
              </div>
            </Reveal>
            <Reveal className="relative order-1 lg:order-2" delayMs={100}>
              <div className="mb-6">
                <h3 className="text-5xl md:text-5xl font-extrabold text-[hsl(var(--foreground))] tracking-tight">Our Story</h3>
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={storyImg}
                  alt="Our Story"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--foreground))] mb-6">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              These core values guide everything we do and shape how we serve our community.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Reveal key={index} delayMs={index * 80}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leadership (single featured leader) */}
      <section className="py-24 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image block: show second on mobile */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            {/* Text right styled like the reference */}
            <Reveal className="order-1 lg:order-2">
              <p className="text-sm md:text-base font-medium tracking-wide text-gray-600 mb-4">Our Leadership</p>
              <h2 className="text-[40px] leading-tight md:text-6xl md:leading-[1.05] font-extrabold text-[hsl(var(--foreground))] mb-6">
                {founder.name}
              </h2>
              <p className="text-cyan-700 font-semibold mb-5">{founder.role}</p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                {founder.description}
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 font-semibold">
                  Support the Vision
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold text-[hsl(var(--foreground))] mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
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