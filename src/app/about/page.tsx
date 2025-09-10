import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Satellite, Users, Target, Award, Lightbulb, Rocket } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarath",
      role: "Circuit Design, Prototype Development and project management",
      description: "Leading the AuraSAT project with expertise in satellite hardware design and project management.",
      skills: ["Circuit Design", "Prototype Development", "Project Management"]
    },
    {
      name: "Avadhut",
      role: "Frontend, APIs, hosting",
      description: "Developing the software systems for satellite communication and data processing.",
      skills: ["Frontend Development", "APIs", "Hosting"]
    },
    {
      name: "Sumanth",
      role: "Backend, database",
      description: "Working on the ground station software and user interface development.",
      skills: ["Backend Development", "Database"]
    },
    {
      name: "Diya",
      role: "Frontend",
      description: "Specializing in frontend development and user interface design.",
      skills: ["Frontend Development", "UI Design"]
    },
    {
      name: "Hemachandran",
      role: "Hardware Engineer",
      description: "Assisting with hardware design, testing, and prototype development.",
      skills: ["Circuit Design", "Testing", "Prototype Development"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 text-primary border-primary bg-primary/10">
              <Satellite className="w-4 h-4 mr-2" />
              About AuraSAT
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing internet connectivity to remote India through innovative LEO satellite technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AuraSAT is a college project initiative aimed at developing a cost-effective LEO (Low Earth Orbit) satellite prototype 
                to bridge the digital divide in India's most remote regions. Our mission is to provide reliable internet connectivity 
                to communities that have been historically underserved by traditional infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="bg-card border-border card-glow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    Providing high-speed internet access to remote villages and communities across India.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border card-glow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Affordability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    Developing cutting-edge satellite technology with cost-effective solutions for maximum impact.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border card-glow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    Making internet connectivity accessible to everyone, regardless of location or economic status.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Passionate students working together to make a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card border-border card-glow hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary group-hover:border-primary/80 transition-colors">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium text-sm leading-relaxed">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed text-center">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the AuraSAT LEO satellite prototype
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">LEO Satellite Technology</h3>
                <p className="text-muted-foreground mb-6">
                  Our LEO (Low Earth Orbit) satellite prototype operates at an altitude of approximately 500-2000 km above Earth's surface. 
                  This proximity allows for lower latency communication and reduced power requirements compared to traditional geostationary satellites.
                </p>
                <p className="text-muted-foreground mb-6">
                  The satellite is designed to provide internet connectivity through a relay system, enabling reliable communication 
                  in remote areas. This focused approach maximizes the impact of each satellite deployment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Low latency communication (20-50ms)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Cost-effective deployment and maintenance</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  {/* Simple SVG diagram */}
                  <svg width="300" height="300" viewBox="0 0 300 300" className="w-full max-w-md">
                    {/* Earth */}
                    <circle cx="150" cy="200" r="60" fill="#1A1A2E" stroke="#28A745" strokeWidth="2"/>
                    
                    {/* Satellite orbit */}
                    <ellipse cx="150" cy="150" rx="120" ry="40" fill="none" stroke="#28A745" strokeWidth="2" strokeDasharray="5,5"/>
                    
                    {/* Satellite */}
                    <g transform="translate(270, 150)">
                      <rect x="-15" y="-8" width="30" height="16" fill="#28A745" rx="2"/>
                      <rect x="-20" y="-3" width="8" height="6" fill="#28A745"/>
                      <rect x="12" y="-3" width="8" height="6" fill="#28A745"/>
                      <circle cx="0" cy="0" r="3" fill="#FFFFFF"/>
                    </g>
                    
                    {/* Signal lines */}
                    <line x1="255" y1="150" x2="200" y2="180" stroke="#28A745" strokeWidth="2" opacity="0.7"/>
                    <line x1="255" y1="150" x2="180" y2="200" stroke="#28A745" strokeWidth="2" opacity="0.7"/>
                    
                    {/* Ground stations */}
                    <circle cx="200" cy="180" r="4" fill="#28A745"/>
                    <circle cx="180" cy="200" r="4" fill="#28A745"/>
                    
                    {/* Labels */}
                    <text x="150" y="280" textAnchor="middle" fill="#FFFFFF" fontSize="12">Earth</text>
                    <text x="270" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="10">AuraSAT</text>
                    <text x="150" y="100" textAnchor="middle" fill="#28A745" fontSize="10">LEO Orbit</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}