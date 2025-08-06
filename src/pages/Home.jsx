
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Target,
  Users,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Calendar,
  Clock,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

import HeroSection from '../components/landing/HeroSection';
import BootcampIntroSection from '../components/landing/BootcampIntroSection';
import PlansSection from '../components/landing/PlansSection';
import AIPerformanceSection from '../components/landing/AIPerformanceSection';
import CoachesSection from '../components/landing/CoachesSection';
import LocationsSection from '../components/landing/LocationsSection';
import RegistrationForm from '../components/landing/RegistrationForm';
import Footer from '../components/landing/Footer';

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false);

  React.useEffect(() => {
    const handleShowRegistration = () => {
      setShowRegistration(true);
    };

    window.addEventListener('showRegistration', handleShowRegistration);

    return () => {
      window.removeEventListener('showRegistration', handleShowRegistration);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <HeroSection onRegisterClick={() => setShowRegistration(true)} />
      <BootcampIntroSection />
      <PlansSection onRegisterClick={() => setShowRegistration(true)} />
      <AIPerformanceSection />
      <CoachesSection />
      <LocationsSection />
      <RegistrationForm
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
      />
      <Footer />
    </div>
  );
}
