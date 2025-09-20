import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users,
  MapPin,
  ExternalLink
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Teachers = () => {
  const faculty = [
    {
      id: 1,
      name: "Prof. Dr. Fatima Khan",
      designation: "Professor & Head of Department",
      education: "Ph.D. in Computer Engineering, MIT",
      specialization: ["Computer Networks", "IoT Systems", "Machine Learning"],
      experience: "15 years",
      email: "fatima.khan@rec.edu.bd",
      phone: "+880-1711-123456",
      image: "https://images.unsplash.com/photo-1559829398-4f2b7e1d93f0?w=300&h=300&fit=crop&crop=face",
      researchInterests: ["Wireless Communications", "Network Security", "AI in Networking"],
      publications: 45,
      office: "ICE-201"
    },
    {
      id: 2,
      name: "Dr. Mohammad Hasan",
      designation: "Associate Professor",
      education: "Ph.D. in Electronics Engineering, BUET",
      specialization: ["Digital Signal Processing", "VLSI Design", "Embedded Systems"],
      experience: "12 years",
      email: "mohammad.hasan@rec.edu.bd",
      phone: "+880-1711-123457",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      researchInterests: ["Signal Processing", "Circuit Design", "Microprocessors"],
      publications: 32,
      office: "ICE-203"
    },
    {
      id: 3,
      name: "Dr. Rashida Sultana",
      designation: "Assistant Professor",
      education: "Ph.D. in Software Engineering, NSU",
      specialization: ["Software Engineering", "Database Systems", "Web Technologies"],
      experience: "8 years",
      email: "rashida.sultana@rec.edu.bd",
      phone: "+880-1711-123458",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face",
      researchInterests: ["Software Architecture", "Agile Development", "Data Analytics"],
      publications: 18,
      office: "ICE-205"
    },
    {
      id: 4,
      name: "Engr. Aminul Islam",
      designation: "Lecturer",
      education: "M.Sc. in Computer Science, DU",
      specialization: ["Programming Languages", "Data Structures", "Algorithms"],
      experience: "5 years",
      email: "aminul.islam@rec.edu.bd",
      phone: "+880-1711-123459",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face",
      researchInterests: ["Competitive Programming", "Algorithm Design", "Data Mining"],
      publications: 8,
      office: "ICE-207"
    },
    {
      id: 5,
      name: "Dr. Nasreen Akter",
      designation: "Assistant Professor",
      education: "Ph.D. in Telecommunications, SUST",
      specialization: ["Telecommunications", "Optical Networks", "5G Technology"],
      experience: "7 years",
      email: "nasreen.akter@rec.edu.bd",
      phone: "+880-1711-123460",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      researchInterests: ["5G Networks", "Optical Communications", "Network Optimization"],
      publications: 22,
      office: "ICE-209"
    },
    {
      id: 6,
      name: "Engr. Karim Rahman",
      designation: "Lecturer",
      education: "M.Sc. in ICE, CUET",
      specialization: ["Digital Electronics", "Microcontrollers", "Robotics"],
      experience: "4 years",
      email: "karim.rahman@rec.edu.bd",
      phone: "+880-1711-123461",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      researchInterests: ["Robotics", "Automation", "IoT Applications"],
      publications: 5,
      office: "ICE-211"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Faculty
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet our dedicated team of educators and researchers committed to excellence in ICE education
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Department Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">{faculty.length}</div>
            <div className="text-muted-foreground">Faculty Members</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <GraduationCap className="h-8 w-8 text-academic mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">4</div>
            <div className="text-muted-foreground">Ph.D. Holders</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">130+</div>
            <div className="text-muted-foreground">Publications</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">50+</div>
            <div className="text-muted-foreground">Years Combined Experience</div>
          </Card>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((teacher) => (
            <Card 
              key={teacher.id} 
              className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{teacher.name}</h3>
                  <p className="text-white/90 text-sm">{teacher.designation}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Education */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Education
                  </div>
                  <p className="text-sm font-medium text-academic">{teacher.education}</p>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Specialization</div>
                  <div className="flex flex-wrap gap-1">
                    {teacher.specialization.map((spec, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Research Interests */}
                <div className="mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Research Interests</div>
                  <div className="flex flex-wrap gap-1">
                    {teacher.researchInterests.map((interest, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-academic/30 text-academic"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 py-3 bg-muted/30 rounded-lg px-3">
                  <div className="text-center">
                    <div className="font-bold text-primary">{teacher.publications}</div>
                    <div className="text-xs text-muted-foreground">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-academic">{teacher.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${teacher.email}`} className="hover:text-primary transition-colors">
                      {teacher.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${teacher.phone}`} className="hover:text-primary transition-colors">
                      {teacher.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    Office: {teacher.office}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs border-primary/30 hover:bg-primary/5"
                  >
                    <Mail className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs border-academic/30 hover:bg-academic/5"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Research Areas Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-academic mb-8 text-center">
            Our Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-academic mb-2">Computer Networks & IoT</h3>
              <p className="text-muted-foreground text-sm">
                Advanced research in wireless communications, network security, and Internet of Things applications.
              </p>
            </Card>
            <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-academic/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-academic" />
              </div>
              <h3 className="font-semibold text-academic mb-2">Signal Processing & VLSI</h3>
              <p className="text-muted-foreground text-sm">
                Digital signal processing, VLSI design, and embedded systems development for modern applications.
              </p>
            </Card>
            <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-academic mb-2">Software Engineering & AI</h3>
              <p className="text-muted-foreground text-sm">
                Software architecture, machine learning, and artificial intelligence applications in engineering.
              </p>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Teachers;