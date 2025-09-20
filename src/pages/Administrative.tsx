import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, GraduationCap, FileText } from "lucide-react";

const Administrative = () => {
  const sections = [
    {
      title: "Students Information",
      description: "Complete database of all enrolled students",
      icon: <Users className="h-8 w-8 text-primary" />,
      stats: "1,200+ Students",
      details: ["Academic Records", "Personal Information", "Session-wise Organization", "Performance Tracking"]
    },
    {
      title: "Teachers Information", 
      description: "Faculty and staff management system",
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      stats: "45+ Faculty Members",
      details: ["Profile Management", "Qualification Records", "Teaching Assignments", "Research Activities"]
    },
    {
      title: "Academic Management",
      description: "Course and curriculum administration",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      stats: "8 Semesters",
      details: ["Course Structure", "Syllabus Management", "Exam Schedules", "Result Processing"]
    },
    {
      title: "Administrative Records",
      description: "Department documentation and policies",
      icon: <FileText className="h-8 w-8 text-primary" />,
      stats: "Complete Records",
      details: ["Official Documents", "Policies & Procedures", "Meeting Minutes", "Correspondence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Administrative Management
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive management system for students, teachers, and academic administration 
            of the Information and Communication Engineering Department
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-accent/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{section.title}</CardTitle>
                    <div className="text-sm text-primary font-semibold">{section.stats}</div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Department Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Faculty Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Years Program</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Administrative;