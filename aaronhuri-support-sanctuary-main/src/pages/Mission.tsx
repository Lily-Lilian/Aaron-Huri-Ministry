import { Heart, Users, BookOpen, Star, ArrowRight, CheckCircle, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Mission = () => {
  const approaches = [
    {
      icon: BookOpen,
      title: "Education Support",
      description: "We pay school fees for children who cannot afford them, ensuring they have access to quality education and a brighter future.",
      benefits: [
        "Removes financial barriers to education",
        "Ensures regular school attendance",
        "Reduces stress on families",
        "Creates opportunities for success"
      ]
    },
    {
      icon: Heart,
      title: "Church Cleaning",
      description: "We maintain clean and welcoming church environments, creating dignified spaces for worship and community gatherings.",
      benefits: [
        "Creates welcoming worship spaces",
        "Shows respect for God's house",
        "Strengthens community bonds",
        "Enhances the worship experience"
      ]
    }
  ];

  const impactStories = [
    {
      name: "Aimé Carine",
      age: 6,
      story: "Thanks to your support, Aimé Carine can attend school regularly without worrying about fees. She's now in Primary 1 and loves learning.",
      school: "Collette de Brandt"
    },
    {
      name: "Faraja Francine",
      age: 6,
      story: "Faraja Francine's family was struggling with school fees. Now she can focus on her studies and dreams of becoming a teacher.",
      school: "Hope Academy"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Our Mission
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As in Exodus 17:12, when Aaron and Hur steadied Moses’ hands, we steady pastors through two graces: covering their children’s school fees and caring for God’s house.
          </p>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Dual Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mandate lifts two burdens: education access for pastors’ children and clean, dignified worship spaces—so the shepherds can shepherd.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {approaches.map((approach, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <approach.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{approach.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                    {approach.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    {approach.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our process is simple, transparent, and focused on making the greatest impact 
              in children's lives and church communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-xl md:text-2xl font-bold text-white">1</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Identify Need</h3>
              <p className="text-gray-600 leading-relaxed">
                We listen to local pastors to discern needs—children requiring school fees and churches needing care.
              </p>
            </div>

              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-xl md:text-2xl font-bold text-white">2</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Provide Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We pay school fees directly to schools and serve churches through cleaning, with transparency and accountability.
              </p>
            </div>

              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-xl md:text-2xl font-bold text-white">3</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitor Progress</h3>
              <p className="text-gray-600 leading-relaxed">
                We follow up—tracking children’s schooling and upholding clean sanctuaries—so the impact endures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Impact Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from children whose lives have been changed through your support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{story.name}</CardTitle>
                      <CardDescription className="text-cyan-600 font-semibold">
                        {story.age} years old • {story.school}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {story.story}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Your support helps us continue our work of supporting children's education 
            and maintaining clean church environments. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
              Support Our Mission
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission; 