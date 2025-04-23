
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const teamMembers = [
  {
    name: "Dipanta Bhattacharyya",
    role: "Lead Developer",
    about: "Full-stack developer with expertise in React and Node.js"
  },
  {
    name: "Ritvik Kumar",
    role: "Frontend Specialist",
    about: "UI/UX enthusiast focused on creating seamless user experiences"
  },
  {
    name: "Navneet Agrawal",
    role: "Backend Developer",
    about: "Database expert specializing in system architecture"
  },
  {
    name: "Vinayak Dev Mishra",
    role: "DevOps Engineer",
    about: "Infrastructure and deployment specialist"
  },
  {
    name: "Sahil Saxena",
    role: "Product Manager",
    about: "Overseeing product development and team coordination"
  }
];

const faqs = [
  {
    question: "What is CineVerse?",
    answer: "CineVerse is your ultimate streaming destination, offering a vast collection of movies and TV shows across multiple genres. Our platform is designed to provide an immersive viewing experience with HD quality content."
  },
  {
    question: "How much does CineVerse cost?",
    answer: "CineVerse offers flexible subscription plans starting from $9.99/month. We also offer a 30-day free trial for new users to explore our platform."
  },
  {
    question: "Can I watch CineVerse on multiple devices?",
    answer: "Yes! You can stream CineVerse content on up to 3 devices simultaneously with our standard plan, and up to 5 devices with our premium plan."
  },
  {
    question: "Is there a mobile app available?",
    answer: "CineVerse mobile apps are available for both iOS and Android devices, allowing you to enjoy your favorite content on the go."
  }
];

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16 space-y-16">
      <Card className="bg-cinema-dark border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <UsersRound className="h-8 w-8 text-primary" />
            Meet Team Ambitians
          </CardTitle>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            We're a passionate team of developers dedicated to creating the ultimate streaming experience. 
            Our mission is to bring quality entertainment to viewers worldwide through innovative technology.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="p-4 rounded-lg bg-card/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white/80">{member.name}</h3>
                <p className="text-primary/80 mt-1 text-sm">{member.role}</p>
                <p className="text-white/50 mt-2 text-sm">{member.about}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AboutUs;
