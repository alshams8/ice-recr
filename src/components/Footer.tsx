import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-academic to-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">ICE Department</h3>
                <p className="text-sm text-white/80">Excellence in Technology</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Department of Information and Communication Engineering at Rangpur Engineering College, 
              committed to advancing technology education and research.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/academic" className="text-white/90 hover:text-white transition-colors">Academic Programs</a></li>
              <li><a href="/admission" className="text-white/90 hover:text-white transition-colors">Admission</a></li>
              <li><a href="/students" className="text-white/90 hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="/teachers" className="text-white/90 hover:text-white transition-colors">Faculty</a></li>
              <li><a href="/gallery" className="text-white/90 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white/80" />
                <span className="text-white/90">Rangpur Engineering College, Rangpur, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-white/90">+880-521-12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-white/90">ice@rec.edu.bd</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/90 text-sm">
              Stay connected with our latest updates and announcements.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2024 Department of Information and Communication Engineering, Rangpur Engineering College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;