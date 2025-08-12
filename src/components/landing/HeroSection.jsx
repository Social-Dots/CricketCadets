import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Cpu, BarChart, Target, Shield, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onRegisterClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1629283742959-58a275b0a3d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Cricketer under stadium lights"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-emerald-900 via-emerald-900/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-amber-500 text-amber-900 hover:bg-amber-400 mb-3 sm:mb-4 px-3 py-1.5 text-xs sm:text-sm font-semibold shadow-lg shadow-amber-500/20">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                A CANADIAN FIRST
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug mb-2 sm:mb-4 tracking-tight"
            >
              A New Era for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {" "}Junior Cricket
              </span>
              <br />
              in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                {" "}Canada.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-emerald-100 mb-4 sm:mb-6 leading-normal"
            >
              For the first time, Canada's aspiring young cricketers have access to elite, internationally-proven coaching techniques. We're building the next generation of talent, right here at home.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span className="text-emerald-100">World-Class Techniques</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <BarChart className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span className="text-emerald-100">Made for Canadian Kids</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <Button
                onClick={onRegisterClick}
                size="md"
                className="bg-amber-500 hover:bg-amber-600 text-amber-900 font-bold px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg shadow-xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Join Waitlist
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
              </Button>
              <Button
                variant="outline"
                size="md"
                className="text-blue bg-blue border border-blue-400 hover:bg-white hover:text-emerald-900 font-semibold px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:block mt-6 lg:mt-0"
          >
            <div className="grid gap-3 sm:gap-4">
              {[
                { title: "Elite Coaching Arrives", label: "Proven Australian techniques, adapted for Canada.", icon: Cpu },
                { title: "Passion-First Philosophy", label: "Nurturing a lifelong love for the game.", icon: Users },
                { title: "Building Future Stars", label: "A dedicated pathway for Canadian talent.", icon: Shield }
              ].map((stat, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white">{stat.title}</div>
                      <div className="text-emerald-200 text-xs">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white z-30"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-0.5"
        >
          <span className="text-[10px] sm:text-xs">Scroll</span>
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}