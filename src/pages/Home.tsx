import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, MapPin, Bell, Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import principalImg from "@/assets/principal.jpg";
import departmentHeadImg from "@/assets/department-head.jpg";
import campusHeroImg from "@/assets/campus-hero.jpg";

const Home = () => {
  const quickAccessCards = [
    {
      title: "Admission 2024",
      description: "Apply for undergraduate and graduate programs",
      icon: GraduationCap,
      link: "/admission",
      color: "bg-gradient-to-br from-accent to-accent/80"
    },
    {
      title: "Student Portal",
      description: "Access your academic records and resources",
      icon: Users,
      link: "/students",
      color: "bg-gradient-to-br from-primary to-primary-dark"
    },
    {
      title: "Academic Programs",
      description: "Explore our undergraduate and graduate offerings",
      icon: BookOpen,
      link: "/academic",
      color: "bg-gradient-to-br from-academic to-academic-light"
    },
    {
      title: "Campus Location",
      description: "Find us on the map",
      icon: MapPin,
      link: "#map",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    }
  ];

  const notices = [
    {
      title: "Spring Semester Registration Open",
      date: "Dec 20, 2024",
      type: "Academic"
    },
    {
      title: "Final Examination Schedule Published",
      date: "Dec 18, 2024",
      type: "Exam"
    },
    {
      title: "Industry Collaboration Seminar",
      date: "Dec 15, 2024",
      type: "Event"
    },
    {
      title: "Faculty Research Publication",
      date: "Dec 12, 2024",
      type: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-hero flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${campusHeroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-academic/80 via-primary/60 to-transparent" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Department of <span className="text-accent">Information</span> and
            <br />
            <span className="text-accent">Communication Engineering</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Rangpur Engineering College - Shaping Future Technology Leaders
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-academic px-8 py-6 text-lg font-semibold rounded-lg shadow-hover">
            Explore Our Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Message Cards Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Principal's Message */}
            <Card className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-academic">
                  <img 
                    src={principalImg} 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-academic mb-2">Principal's Message</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "Welcome to Rangpur Engineering College. Our commitment to excellence in 
                    engineering education continues to shape the next generation of innovators."
                  </p>
                  <p className="font-semibold text-primary">Dr. Mohammad Rahman</p>
                  <p className="text-sm text-muted-foreground">Principal, REC</p>
                </div>
              </div>
            </Card>

            {/* Department Head's Message */}
            <Card className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-academic">
                  <img 
                    src={departmentHeadImg} 
                    alt="Department Head" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-academic mb-2">Head of Department</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "The ICE Department is dedicated to advancing technology education through 
                    innovative curriculum and cutting-edge research opportunities."
                  </p>
                  <p className="font-semibold text-primary">Prof. Dr. Fatima Khan</p>
                  <p className="text-sm text-muted-foreground">Head, ICE Department</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick Access & Notice Board */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Access */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
                <GraduationCap className="mr-3 h-8 w-8" />
                Quick Access
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {quickAccessCards.map((card, index) => (
                  <Card key={index} className="p-6 hover:shadow-hover transition-all duration-300 border-0 overflow-hidden group cursor-pointer">
                    <a href={card.link} className="block">
                      <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-academic mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.description}</p>
                      <ArrowRight className="h-5 w-5 text-primary mt-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Notice Board */}
            <div>
              <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
                <Bell className="mr-3 h-8 w-8" />
                Notice Board
              </h2>
              <Card className="p-6 bg-gradient-card shadow-card border-0">
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <div key={index} className="border-b border-border/50 last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          notice.type === 'Academic' ? 'bg-primary/10 text-primary' :
                          notice.type === 'Exam' ? 'bg-destructive/10 text-destructive' :
                          notice.type === 'Event' ? 'bg-accent/10 text-accent' :
                          'bg-academic/10 text-academic'
                        }`}>
                          {notice.type}
                        </span>
                      </div>
                      <h4 className="font-semibold text-academic mb-1">{notice.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {notice.date}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  View All Notices
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Campus Map Section */}
        <section id="map" className="mb-16">
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <MapPin className="mr-3 h-8 w-8" />
            Find Us on Campus
          </h2>
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-academic mb-2">Interactive Campus Map</h3>
                <p className="text-muted-foreground mb-4">
                  Rangpur Engineering College, Rangpur, Bangladesh
                </p>
                <Button className="bg-primary hover:bg-primary-dark">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;