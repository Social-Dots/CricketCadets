import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlansSection({ onRegisterClick }) {
  const plans = [
    {
      title: "5-Day Starter Bootcamp",
      description: "A perfect introduction to our elite training methods. Get a taste of pro-level coaching and see the difference.",
      duration: "10 hours over 5 days",
      benefits: [
        "High-intensity skill drills",
        "Introduction to tactical play",
        "Meet our expert coaches",
        "Perfect for skill assessment"
      ],
      cta: "Join the Starter Waitlist",
      isFeatured: false,
    },
    {
      title: "8-Week Match Prep Bootcamp",
      description: "Our flagship program to develop game-ready players. Comprehensive skill-building and tactical mastery.",
      duration: "32 hours over 8 weeks",
      benefits: [
        "In-depth technical coaching",
        "Advanced match simulation",
        "Personalized feedback",
        "Builds confidence and resilience"
      ],
      cta: "Join the Full Program Waitlist",
      isFeatured: true,
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-4 px-4 py-2">
            Choose Your Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a quick skills boost or a complete transformation, we have a program designed for you.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full flex flex-col ${plan.isFeatured ? 'border-2 border-emerald-500 shadow-2xl' : 'shadow-lg'}`}>
                {plan.isFeatured && (
                  <div className="bg-emerald-500 text-white text-center py-2 font-bold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-gray-800">{plan.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-6">
                      <Badge variant="outline">{plan.duration}</Badge>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={onRegisterClick}
                    size="lg"
                    className={`w-full font-bold text-lg ${plan.isFeatured ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-amber-500 hover:bg-amber-600 text-amber-900'}`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}