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
  "Dipanta Bhattacharyya",
  "Ritvik Kumar",
  "Navneet Agrawal",
  "Vinayak Dev Mishra",
  "Sahil Saxena"
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
            About CineVerse
          </CardTitle>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            We're a passionate team dedicated to creating the ultimate streaming experience. 
            Our mission is to bring quality entertainment to viewers worldwide through innovative technology.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-end gap-2 text-xs text-white/50">
            {teamMembers.map((name) => (
              <span key={name} className="after:content-['•'] after:ml-2 last:after:content-none">
                {name}
              </span>
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
