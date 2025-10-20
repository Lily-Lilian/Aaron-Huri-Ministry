import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, BookOpen, HandHeart, ArrowRight, ExternalLink, Church, Baby, Volume2, VolumeX } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [mobileVideoFallback, setMobileVideoFallback] = useState(true);
  const [desktopVideoFallback, setDesktopVideoFallback] = useState(true);
  const [mobileVideoLoading, setMobileVideoLoading] = useState(true);
  const [desktopVideoLoading, setDesktopVideoLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [viewport, setViewport] = useState<"mobile" | "desktop" | null>(null);

  const mobilePlayerRef = useRef<HTMLIFrameElement | null>(null);
  const desktopPlayerRef = useRef<HTMLIFrameElement | null>(null);

  const videoId = "6r5H7E2G3Ys";

  const buildYouTubeSrc = (id: string) =>
    `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${id}&iv_load_policy=3&disablekb=1&fs=0&showinfo=0&autohide=1&cc_load_policy=0&enablejsapi=1`;

  const postYouTubeCommand = (iframe: HTMLIFrameElement | null, func: string) => {
    if (!iframe || !iframe.contentWindow) return;
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      // Best-effort control without reloading iframes
      if (next) {
        postYouTubeCommand(mobilePlayerRef.current, "mute");
        postYouTubeCommand(desktopPlayerRef.current, "mute");
      } else {
        postYouTubeCommand(mobilePlayerRef.current, "unMute");
        postYouTubeCommand(mobilePlayerRef.current, "playVideo");
        postYouTubeCommand(desktopPlayerRef.current, "unMute");
        postYouTubeCommand(desktopPlayerRef.current, "playVideo");
      }
      return next;
    });
  };

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const onChange = () => setViewport(media.matches ? 'desktop' : 'mobile');
    onChange();
    if (media.addEventListener) {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    } else {
      // Fallback for older browsers
      // @ts-ignore
      media.addListener(onChange);
      return () => {
        // @ts-ignore
        media.removeListener(onChange);
      };
    }
  }, []);

  useEffect(() => {
    // Show the continue watching button after 30 seconds
    const timer = setTimeout(() => {
      setShowContinueButton(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Mobile: video as background with overlay content */}
      {viewport === 'mobile' && (
      <section className="relative block md:hidden">
        <div className="relative h-screen overflow-hidden">
          {/* Background video */}
          <div className="absolute inset-0">
            {mobileVideoFallback ? (
              <iframe
                className="absolute top-1/2 left-1/2 h-[160%] w-[220%] pointer-events-none"
                style={{ transform: 'translate(-40%, -60%)' }}
                src={buildYouTubeSrc(videoId)}
                ref={mobilePlayerRef}
                title="Aaron and Hur Ministry Background"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            ) : (
              !mobileVideoFallback ? (
                <video
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[130%] w-[220%] object-cover pointer-events-none"
                  src="/AHM.mp4"
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="auto"
                  poster="/placeholder.svg"
                  onError={(e) => {
                    console.error('Mobile video error:', e);
                    setMobileVideoFallback(true);
                  }}
                  onLoadStart={() => {
                    console.log('Mobile video loading started');
                    setMobileVideoLoading(true);
                  }}
                  onCanPlay={() => {
                    console.log('Mobile video can play');
                    setMobileVideoLoading(false);
                  }}
                />
              ) : (
                <video
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[130%] w-[220%] object-cover pointer-events-none"
                  src="/ministry-video.mp4"
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="metadata"
                  poster="/placeholder.svg"
                />
              )
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/60" />
            <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
              <Button
                size="sm"
                variant="outline"
                className="bg-black/60 hover:bg-black/80 text-white w-10 h-10 p-0 rounded-full border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Mobile loading indicator */}
            {mobileVideoLoading && !mobileVideoFallback && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="font-medium">Loading video...</p>
                </div>
              </div>
            )}
          </div>

          {/* Overlay content */}
          <div className="relative z-10 h-full flex items-end justify-start px-4 pb-6">
            <div className="w-full max-w-sm mr-auto text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Serving God by Serving
                <span className="block text-yellow-400 text-2xl sm:text-3xl"> Others</span>
              </h1>
              <p className="text-base text-white/90 mb-8 leading-relaxed">
                Supporting church leaders and their families through practical care and partnership in ministry.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="w-full">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold">
                    Support Our Work
                  </Button>
                </Link>
                <Link to="/mission" className="w-full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-base backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Hero Section - Desktop/Tablet (video background with left overlay) */}
      {viewport === 'desktop' && (
      <section className="hidden md:block relative h-[80vh] lg:h-[85vh] overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          {desktopVideoFallback ? (
            <>
              <iframe
                className="absolute top-[-80px] left-0 w-full h-[140%] pointer-events-none"
                src={buildYouTubeSrc(videoId)}
                ref={desktopPlayerRef}
                title="Aaron and Hur Ministry"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-black/60 hover:bg-black/80 text-white w-10 h-10 p-0 rounded-full border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </Button>
              </div>
            </>
          ) : (
            !desktopVideoFallback ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/AHM.mp4"
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
                poster="/placeholder.svg"
                onError={(e) => {
                  console.error('Desktop video error:', e);
                  setDesktopVideoFallback(true);
                }}
                onLoadStart={() => {
                  setDesktopVideoLoading(true);
                }}
                onCanPlay={() => {
                  setDesktopVideoLoading(false);
                }}
              />
            ) : (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/ministry-video.mp4"
                autoPlay
                loop
                playsInline
                muted
                preload="metadata"
                poster="/placeholder.svg"
              />
            )
          )}
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        {/* Overlay content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full flex justify-end">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Serving God by Serving
                <span className="text-blue-400"> Others</span>
              </h1>
              <p className="text-2xl text-white/90 mt-6 leading-relaxed">
                Supporting church leaders and their families through practical care, training, and partnership in ministry.
              </p>
              <div className="flex gap-4 pt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                    Support Our Work
                  </Button>
                </Link>
                <Link to="/mission">
                  <Button size="lg" variant="outline" className="border-2 border-blue-200 hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                    Our Mission
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* What We Do Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is simple: meet the needs that distract church leaders from their calling, 
              so they can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Development</h3>
              <p className="text-gray-600">
                We train pastors and their children, equipping them for effective ministry and leadership.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <HandHeart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Support</h3>
              <p className="text-gray-600">
                We provide resources and support that help church leaders focus on their ministry calling.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Building</h3>
              <p className="text-gray-600">
                We connect church leaders and their families for mutual support and encouragement.
              </p>
            </div>
          </div>

          {/* Secondary info cards */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Just as Aaron and Hur supported Moses by holding up his hands during battle, 
                we come alongside church leaders to provide the practical support they need. 
                When leaders are freed from distractions, they can focus on what God has called them to do.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Many church leaders struggle with needs that pull them away from ministry. 
                By addressing these practical concerns, we help ensure that God's work continues 
                to flourish in local communities around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Through partnership and practical support, we're making a difference in the lives of church leaders and their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-900 mb-3">Children Supported</div>
              <p className="text-gray-600 text-sm mb-4">Providing care and education for pastors' children</p>
              <Link to="/children">
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Meet Our Children
                </Button>
              </Link>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Church className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">40+</div>
              <div className="text-lg font-semibold text-gray-900 mb-3">Churches Served</div>
              <p className="text-gray-600 text-sm mb-4">Practical cleaning and maintenance support</p>
              <Link to="/churches">
                <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  See Our Work
                </Button>
              </Link>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-3">Volunteer Driven</div>
              <p className="text-gray-600 text-sm">Every contribution goes directly to those we serve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Partner With Us
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Your support helps church leaders focus on their calling while we handle the practical needs. 
            Together, we can strengthen God's work around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Support Our Mission
              </Button>
            </Link>
            <Link to="/children">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold">
                Meet Our Children
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;