
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersRound } from 'lucide-react';

const teamMembers = [
  "Dipanta Bhattacharyya",
  "Ritvik Kumar",
  "Navneet Agrawal",
  "Vinayak Dev Mishra",
  "Sahil Saxena"
];

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16">
      <Card className="bg-cinema-dark border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <UsersRound className="h-8 w-8 text-primary" />
            Meet Team Ambitians
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member}
                className="p-4 rounded-lg bg-card/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white/90">{member}</h3>
                <p className="text-white/60 mt-2">Core Developer</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
