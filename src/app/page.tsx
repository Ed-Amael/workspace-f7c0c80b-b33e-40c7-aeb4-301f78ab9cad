import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Satellite, Wifi, Cloud, Users, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient starry-bg min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-primary border-primary bg-primary/10">
              <Satellite className="w-4 h-4 mr-2" />
              College Project Initiative
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-glow">
              AuraSAT: Connecting India's Remotest Areas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              with Internet Connectivity
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              A revolutionary LEO satellite prototype designed to bridge the digital divide and provide reliable internet connectivity to India's most remote communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/coverage">
                  View Coverage
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative satellite icon */}
        <div className="absolute top-20 right-20 text-primary/20 animate-pulse">
          <Satellite className="w-32 h-32" />
        </div>
        <div className="absolute bottom-20 left-20 text-primary/20 animate-pulse">
          <Satellite className="w-24 h-24" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bridging the Digital Divide
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AuraSAT represents a groundbreaking college project aimed at developing a cost-effective LEO (Low Earth Orbit) satellite prototype. 
              Our mission is to provide reliable internet connectivity to India's most remote and underserved regions. 
              By leveraging innovative satellite technology, we're working to create solutions that can transform lives and empower communities 
              that have long been left behind by traditional infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how AuraSAT is making a difference
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Internet for Remote India */}
            <Card className="bg-card border-border card-glow hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Internet for Remote India</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Bringing high-speed internet connectivity to India's most remote villages and communities, 
                  enabling access to education, healthcare, and economic opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Cost Effective */}
            <Card className="bg-card border-border card-glow hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Cost Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Developing affordable satellite solutions that make internet connectivity accessible 
                  to remote communities without the high costs of traditional infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Rapid Deployment */}
            <Card className="bg-card border-border card-glow hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Rapid Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  A collaborative effort by passionate engineering students dedicated to creating 
                  sustainable technological solutions with rapid deployment capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how AuraSAT is revolutionizing connectivity in remote India. 
              Explore our coverage areas and test our simulated satellite connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/coverage">
                  <MapPin className="mr-2 h-4 w-4" />
                  Explore Coverage Map
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/speedtest">
                  <Wifi className="mr-2 h-4 w-4" />
                  Test Connection Speed
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}