
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BootcampIntroSection() {
  const features = [
    {
      icon: Zap,
      title: "5-Day Starter Bootcamp",
      description: "An intensive, high-impact introduction to our methodology, perfect for attracting early participants and showcasing what we offer.",
      color: "text-amber-600"
    },
    {
      icon: Calendar,
      title: "8-Week Full Program",
      description: "Our comprehensive program launches in Spring 2026, designed to transform players' skills over a full season.",
      color: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "Flexible & Focused Sessions",
      description: "Two 2-hour sessions per week, held on weekday evenings (6-8 PM) or weekends to fit busy family schedules.",
      color: "text-blue-600"
    },
    {
      icon: Target,
      title: "Skills & Practice Driven",
      description: "Each session is packed with practical drills and skill-building exercises to maximize player development.",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="bootcamps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mb-4 px-4 py-2">
            Program Structure
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started with Our Bootcamps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a clear pathway for development, starting with an intensive bootcamp and leading into our full-scale program designed for serious players.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
