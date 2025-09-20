import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Award, GraduationCap, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Academic = () => {
  const programs = [
    {
      title: "Bachelor of Science in ICE",
      duration: "4 Years",
      credits: "160 Credits",
      intake: "120 Students",
      description: "Comprehensive undergraduate program covering all aspects of Information and Communication Engineering",
      courses: ["Programming Fundamentals", "Digital Electronics", "Computer Networks", "Signal Processing", "Database Systems"]
    },
    {
      title: "Master of Science in ICE",
      duration: "2 Years",
      credits: "32 Credits",
      intake: "30 Students",
      description: "Advanced graduate program with research focus on cutting-edge ICE technologies",
      courses: ["Advanced Networking", "Machine Learning", "VLSI Design", "Research Methodology", "Thesis Work"]
    }
  ];

  const courses = [
    { code: "ICE 101", name: "Introduction to ICE", credits: 3, semester: 1 },
    { code: "ICE 102", name: "Programming Fundamentals", credits: 4, semester: 1 },
    { code: "ICE 201", name: "Digital Electronics", credits: 3, semester: 2 },
    { code: "ICE 202", name: "Data Structures", credits: 4, semester: 2 },
    { code: "ICE 301", name: "Computer Networks", credits: 3, semester: 3 },
    { code: "ICE 302", name: "Database Systems", credits: 3, semester: 3 },
    { code: "ICE 401", name: "Software Engineering", credits: 3, semester: 4 },
    { code: "ICE 402", name: "Final Year Project", credits: 6, semester: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic Programs
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive education programs designed to prepare future technology leaders
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Programs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <GraduationCap className="mr-3 h-8 w-8" />
            Our Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
                <h3 className="text-2xl font-bold text-academic mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium text-primary">{program.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-academic/10 rounded-lg">
                    <FileText className="h-6 w-6 text-academic mx-auto mb-1" />
                    <div className="text-sm font-medium text-academic">{program.credits}</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <Users className="h-6 w-6 text-accent mx-auto mb-1" />
                    <div className="text-sm font-medium text-accent">{program.intake}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-academic mb-3">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.courses.map((course, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-muted/50">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Course Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <BookOpen className="mr-3 h-8 w-8" />
            Course Structure (Sample)
          </h2>
          
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-academic">Course Code</th>
                    <th className="text-left py-3 px-4 font-semibold text-academic">Course Name</th>
                    <th className="text-center py-3 px-4 font-semibold text-academic">Credits</th>
                    <th className="text-center py-3 px-4 font-semibold text-academic">Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-primary">{course.code}</td>
                      <td className="py-3 px-4">{course.name}</td>
                      <td className="py-3 px-4 text-center">{course.credits}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline" className="border-academic/30 text-academic">
                          Semester {course.semester}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Academic Features */}
        <section>
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <Award className="mr-3 h-8 w-8" />
            Academic Excellence
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-academic mb-2">Modern Curriculum</h3>
              <p className="text-muted-foreground text-sm">
                Industry-aligned curriculum updated regularly to meet current technology demands.
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-academic/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-academic" />
              </div>
              <h3 className="font-semibold text-academic mb-2">Expert Faculty</h3>
              <p className="text-muted-foreground text-sm">
                Highly qualified faculty with Ph.D. degrees and extensive industry experience.
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-academic mb-2">Research Focus</h3>
              <p className="text-muted-foreground text-sm">
                Strong emphasis on research and innovation with state-of-the-art laboratories.
              </p>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Academic;