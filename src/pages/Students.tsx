import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Students = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sessions = [
    {
      year: "2024-25",
      students: [
        { name: "Md. Rakibul Islam", id: "ICE-2401", image: "/placeholder.svg" },
        { name: "Fatima Khatun", id: "ICE-2402", image: "/placeholder.svg" },
        { name: "Mohammad Ali Hassan", id: "ICE-2403", image: "/placeholder.svg" },
        { name: "Ayesha Siddika", id: "ICE-2404", image: "/placeholder.svg" },
        { name: "Tanvir Ahmed", id: "ICE-2405", image: "/placeholder.svg" },
        { name: "Nasir Uddin", id: "ICE-2406", image: "/placeholder.svg" },
      ]
    },
    {
      year: "2020-21", 
      students: [
        { name: "Abdullah Al Mamun", id: "ICE-2101", image: "/placeholder.svg" },
        { name: "Rashida Begum", id: "ICE-2102", image: "/placeholder.svg" },
        { name: "Karim Uddin", id: "ICE-2103", image: "/placeholder.svg" },
        { name: "Salma Akter", id: "ICE-2104", image: "/placeholder.svg" },
        { name: "Rafiqul Islam", id: "ICE-2105", image: "/placeholder.svg" },
        { name: "Hasina Khatun", id: "ICE-2106", image: "/placeholder.svg" },
      ]
    },
    {
      year: "2019-20",
      students: [
        { name: "Ibrahim Khalil", id: "ICE-1901", image: "/placeholder.svg" },
        { name: "Mariam Sultana", id: "ICE-1902", image: "/placeholder.svg" },
        { name: "Shahidul Alam", id: "ICE-1903", image: "/placeholder.svg" },
        { name: "Rahela Khatun", id: "ICE-1904", image: "/placeholder.svg" },
        { name: "Mizanur Rahman", id: "ICE-1905", image: "/placeholder.svg" },
        { name: "Taslima Begum", id: "ICE-1906", image: "/placeholder.svg" },
      ]
    }
  ];

  const getSessionColor = (year: string) => {
    switch (year) {
      case "2024-25": return "bg-blue-500";
      case "2020-21": return "bg-green-500"; 
      case "2019-20": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Students Information
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Meet our distinguished students from different sessions of the Information and Communication Engineering Department
          </p>
        </div>

        {/* Sessions */}
        {sessions.map((session) => (
          <div key={session.year} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-foreground">Session {session.year}</h2>
              <Badge className={`${getSessionColor(session.year)} text-white`}>
                {session.students.length} Students
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {session.students.map((student, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105 border-accent/20">
                      <CardContent className="p-4">
                        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="text-center space-y-1">
                          <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                            {student.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">{student.id}</p>
                          <Badge variant="outline" className="text-xs">
                            {session.year}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <div className="space-y-4">
                      <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{student.name}</h3>
                        <p className="text-muted-foreground">Student ID: {student.id}</p>
                        <Badge className={`${getSessionColor(session.year)} text-white`}>
                          Session {session.year}
                        </Badge>
                        <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                          <p>Department: Information and Communication Engineering</p>
                          <p>Institution: Rangpur Engineering College</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Students;