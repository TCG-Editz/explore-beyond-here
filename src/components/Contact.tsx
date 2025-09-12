import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 xxxxxxxxxx",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@soulsikkim.com",
      description: "We'll try respond within as soon as possible"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Sikkim",
      description: "Anytime"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "Weekend: 10AM-4PM"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next adventure? Contact our travel experts today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-card animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send us a message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="border-border focus:ring-primary"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="border-border focus:ring-primary"
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="border-border focus:ring-primary"
                />
                
                <Input 
                  placeholder="Subject" 
                  className="border-border focus:ring-primary"
                />
                
                <Textarea 
                  placeholder="Tell us about your dream destination..." 
                  rows={5}
                  className="border-border focus:ring-primary resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-hero text-white border-0 hover:scale-105 transition-all duration-300 py-6 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-hero">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-card-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
