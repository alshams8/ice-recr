import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  Users, 
  GraduationCap,
  DollarSign,
  AlertCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Admission = () => {
  const requirements = [
    {
      program: "Bachelor of Science in ICE",
      ssc: "GPA 3.5+ in Science",
      hsc: "GPA 3.5+ in Science",
      subjects: "Physics, Chemistry, Mathematics",
      additionalReq: "English proficiency test"
    },
    {
      program: "Master of Science in ICE",
      ssc: "Bachelor's degree in ICE/CSE/EEE",
      hsc: "CGPA 3.0+ out of 4.0",
      subjects: "Relevant undergraduate background",
      additionalReq: "GRE (optional), Research proposal"
    }
  ];

  const timeline = [
    { date: "January 15", event: "Application Opens", status: "completed" },
    { date: "March 30", event: "Application Deadline", status: "active" },
    { date: "April 15", event: "Admission Test", status: "upcoming" },
    { date: "May 1", event: "Results Published", status: "upcoming" },
    { date: "May 15", event: "Final Admission", status: "upcoming" },
    { date: "July 1", event: "Session Starts", status: "upcoming" }
  ];

  const procedures = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the online application form with required documents",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit original documents for verification",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Admission Test",
      description: "Appear for the written examination and viva",
      icon: Users
    },
    {
      step: 4,
      title: "Merit List",
      description: "Check results and merit list publication",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Admission 2024
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the Department of ICE at Rangpur Engineering College - Your Gateway to Technology Excellence
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice */}
        <div className="mb-12">
          <Card className="p-6 bg-accent/10 border-accent/20 border-2">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-accent mb-2">Application Deadline Extended!</h3>
                <p className="text-accent/80">
                  Due to high demand, the application deadline has been extended to March 30, 2024. 
                  Don't miss this opportunity to join our prestigious ICE program.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">150</div>
            <div className="text-muted-foreground">Total Seats</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <Calendar className="h-8 w-8 text-academic mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">March 30</div>
            <div className="text-muted-foreground">Application Deadline</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">April 15</div>
            <div className="text-muted-foreground">Admission Test</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-academic">৳50,000</div>
            <div className="text-muted-foreground">Annual Fee</div>
          </Card>
        </div>

        {/* Admission Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <FileText className="mr-3 h-8 w-8" />
            Admission Requirements
          </h2>
          
          <div className="space-y-6">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card border-0">
                <h3 className="text-xl font-bold text-academic mb-4">{req.program}</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">SSC/O-Level</div>
                    <div className="font-medium">{req.ssc}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">HSC/A-Level</div>
                    <div className="font-medium">{req.hsc}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Required Subjects</div>
                    <div className="font-medium">{req.subjects}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Additional</div>
                    <div className="font-medium">{req.additionalReq}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Admission Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <Calendar className="mr-3 h-8 w-8" />
            Admission Timeline
          </h2>
          
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className={`w-4 h-4 rounded-full ${
                    item.status === 'completed' ? 'bg-emerald-500' :
                    item.status === 'active' ? 'bg-accent' :
                    'bg-muted'
                  }`} />
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-academic">{item.event}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <Badge variant={
                      item.status === 'completed' ? 'default' :
                      item.status === 'active' ? 'secondary' :
                      'outline'
                    }>
                      {item.status === 'completed' ? 'Completed' :
                       item.status === 'active' ? 'Active' : 'Upcoming'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Application Procedure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-academic mb-8 flex items-center">
            <CheckCircle className="mr-3 h-8 w-8" />
            Application Procedure
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((procedure) => (
              <Card key={procedure.step} className="p-6 text-center bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <procedure.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-academic mb-2">Step {procedure.step}</div>
                <h3 className="font-semibold text-academic mb-2">{procedure.title}</h3>
                <p className="text-muted-foreground text-sm">{procedure.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-primary text-white border-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards your engineering career. Apply now for admission to the 
              Department of Information and Communication Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-academic px-8 py-6 text-lg font-semibold"
              >
                Apply Online Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Download Prospectus
              </Button>
            </div>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mt-16">
          <Card className="p-8 bg-gradient-card shadow-card border-0">
            <h3 className="text-2xl font-bold text-academic mb-6 text-center">
              Need Help with Your Application?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-academic mb-2">Admission Office</h4>
                <p className="text-muted-foreground">Phone: +880-521-12345</p>
                <p className="text-muted-foreground">Email: admission@rec.edu.bd</p>
              </div>
              <div>
                <h4 className="font-semibold text-academic mb-2">ICE Department</h4>
                <p className="text-muted-foreground">Phone: +880-521-12346</p>
                <p className="text-muted-foreground">Email: ice@rec.edu.bd</p>
              </div>
              <div>
                <h4 className="font-semibold text-academic mb-2">Office Hours</h4>
                <p className="text-muted-foreground">Sunday - Thursday</p>
                <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Admission;