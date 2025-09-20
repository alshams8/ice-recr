import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Calendar, Users, Award, BookOpen, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryCategories = [
    { id: "all", name: "All", icon: ImageIcon },
    { id: "events", name: "Events", icon: Calendar },
    { id: "students", name: "Students", icon: Users },
    { id: "achievements", name: "Achievements", icon: Award },
    { id: "academics", name: "Academics", icon: BookOpen },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      category: "events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Students showcasing innovative projects"
    },
    {
      id: 2,
      title: "Research Laboratory",
      category: "academics",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=600&h=400&fit=crop",
      description: "State-of-the-art ICE research facilities"
    },
    {
      id: 3,
      title: "Graduation Ceremony 2024",
      category: "achievements",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
      description: "Celebrating our graduates' success"
    },
    {
      id: 4,
      title: "Student Innovation Hub",
      category: "students",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Collaborative learning environment"
    },
    {
      id: 5,
      title: "Industry Partnership Seminar",
      category: "events",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      description: "Connecting academia with industry"
    },
    {
      id: 6,
      title: "Programming Competition Winners",
      category: "achievements",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      description: "ICE students excelling in competitive programming"
    },
    {
      id: 7,
      title: "Modern Lecture Hall",
      category: "academics",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      description: "Interactive learning spaces"
    },
    {
      id: 8,
      title: "Student Cultural Event",
      category: "students",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      description: "Celebrating diversity and creativity"
    },
    {
      id: 9,
      title: "Research Publication Awards",
      category: "achievements",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Faculty recognition for outstanding research"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Capturing moments of academic excellence, student achievements, and campus life
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-6 w-6 text-academic mr-2" />
            <h2 className="text-2xl font-bold text-academic">Browse by Category</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-primary text-white shadow-academic"
                    : "border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-academic text-lg group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    item.category === 'events' ? 'bg-primary/10 text-primary' :
                    item.category === 'students' ? 'bg-accent/10 text-accent' :
                    item.category === 'achievements' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-academic/10 text-academic'
                  }`}>
                    {galleryCategories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-3 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            Load More Images
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Photos</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <div className="text-3xl font-bold text-academic mb-2">50+</div>
            <div className="text-muted-foreground">Events</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-muted-foreground">Achievements</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card shadow-card border-0">
            <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
            <div className="text-muted-foreground">Years</div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;