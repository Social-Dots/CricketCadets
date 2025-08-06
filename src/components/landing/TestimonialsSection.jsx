import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, PlayCircle, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const coachTestimonials = [
    {
      name: "David Mitchell",
      title: "Former Australian Youth Coach",
      experience: "20+ years coaching experience",
      location: "Melbourne, Australia",
      quote: "The Cricket Cadet methodology is exactly what junior cricket development needs. Their approach to combining technical excellence with passion-first coaching is revolutionary.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      videoPlaceholder: true,
      rating: 5,
      credentials: "Level 3 Cricket Australia Coach"
    },
    {
      name: "Sarah Thompson",
      title: "Canadian Cricket Development Officer",
      experience: "15+ years in Canadian cricket",
      location: "Toronto, Canada",
      quote: "Finally, a program that understands both elite technique and how Canadian kids learn. This partnership will transform junior cricket in our country.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      videoPlaceholder: true,
      rating: 5,
      credentials: "Cricket Canada Certified"
    },
    {
      name: "James Wilson",
      title: "International Coaching Consultant",
      experience: "12+ years elite coaching",
      location: "Sydney, Australia",
      quote: "Their systematic approach to skill development while keeping the joy of cricket at the center is exactly what the sport needs. Canada is lucky to have this program.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      videoPlaceholder: true,
      rating: 5,
      credentials: "ICC Certified Coach"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mb-4 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Expert Endorsements
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Coaches Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading cricket coaching experts from Australia and Canada share their thoughts on our groundbreaking methodology and Canadian launch.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg group">
                <CardContent className="p-0">
                  {/* Video/Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-emerald-600 to-emerald-700 overflow-hidden">
                    <img 
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Video Play Overlay */}
                    {testimonial.videoPlaceholder && (
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center cursor-pointer group-hover:bg-black/35 transition-all duration-300">
                        <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <PlayCircle className="w-10 h-10 text-emerald-600" />
                        </div>
                      </div>
                    )}
                    
                    {/* Coach Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-emerald-600 font-medium">{testimonial.title}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <p className="text-xs text-gray-600">{testimonial.experience}</p>
                            <p className="text-xs text-gray-500">{testimonial.location}</p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }, (_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="p-6">
                    <Quote className="w-6 h-6 text-emerald-300 mb-3" />
                    <p className="text-gray-700 italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.credentials}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Cricket Revolution in Canada
            </h3>
            <p className="text-gray-600 mb-6">
              With endorsements from leading coaches across two countries, Cricket Cadet is ready to transform junior cricket development in Canada.
            </p>
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2">
              Expert-approved methodology • Canadian launch exclusive
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}