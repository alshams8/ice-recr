import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const HallOfFame = () => {
  const achievements = [
    {
      category: "Outstanding Alumni",
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      achievers: [
        {
          name: "Dr. Mohammad Rahman",
          achievement: "Lead AI Engineer at Google",
          year: "2015 Graduate",
          description: "Pioneering work in machine learning and artificial intelligence",
          image: "/placeholder.svg"
        },
        {
          name: "Fatima Ahmed",
          achievement: "Senior Software Architect at Microsoft",
          year: "2017 Graduate", 
          description: "Leading cloud infrastructure development and innovation",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Research Excellence",
      icon: <Award className="h-8 w-8 text-blue-500" />,
      achievers: [
        {
          name: "Md. Karim Uddin",
          achievement: "Published 15+ Research Papers",
          year: "Current Faculty",
          description: "Significant contributions to wireless communication technology",
          image: "/placeholder.svg"
        },
        {
          name: "Prof. Dr. Nasir Ahmed",
          achievement: "IEEE Senior Member",
          year: "Department Head",
          description: "International recognition in signal processing research",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Industry Recognition",
      icon: <Star className="h-8 w-8 text-purple-500" />,
      achievers: [
        {
          name: "Rashida Sultana",
          achievement: "Best Innovation Award 2023",
          year: "2019 Graduate",
          description: "Revolutionary IoT solution for smart agriculture",
          image: "/placeholder.svg"
        },
        {
          name: "Abdullah Mamun",
          achievement: "Entrepreneur of the Year",
          year: "2018 Graduate",
          description: "Founded successful tech startup with 100+ employees",
          image: "/placeholder.svg"
        }
      ]
    },
    {
      category: "Academic Excellence",
      icon: <Medal className="h-8 w-8 text-green-500" />,
      achievers: [
        {
          name: "Ayesha Khatun",
          achievement: "University Gold Medalist",
          year: "2020 Graduate",
          description: "Highest CGPA in department history (3.98/4.00)",
          image: "/placeholder.svg"
        },
        {
          name: "Tanvir Hassan",
          achievement: "Dean's List (4 consecutive years)",
          year: "2021 Graduate",
          description: "Consistent academic excellence and leadership",
          image: "/placeholder.svg"
        }
      ]
    }
  ];

  const departmentStats = [
    { label: "Alumni Placed in Top Companies", value: "300+" },
    { label: "Research Publications", value: "150+" },
    { label: "Patents Filed", value: "25+" },
    { label: "Industry Awards", value: "40+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Hall of Fame
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Celebrating the outstanding achievements of our alumni, faculty, and students who have 
            brought honor to the Information and Communication Engineering Department
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {departmentStats.map((stat, index) => (
            <Card key={index} className="text-center border-accent/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Categories */}
        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-card rounded-lg border border-accent/20">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-foreground">{category.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.achievers.map((achiever, index) => (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-accent/20">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={achiever.image}
                            alt={achiever.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                            {achiever.name}
                          </CardTitle>
                          <CardDescription className="text-primary font-semibold">
                            {achiever.achievement}
                          </CardDescription>
                          <Badge variant="outline" className="mt-2">
                            {achiever.year}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{achiever.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Hall of Fame</h3>
          <p className="text-muted-foreground mb-6">
            Have an achievement to share? We would love to celebrate your success and inspire future generations.
          </p>
          <div className="text-primary font-semibold">
            Contact us at: ice@recr.edu.bd
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HallOfFame;