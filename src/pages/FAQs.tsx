import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Phone, Mail, MapPin } from "lucide-react";

const FAQs = () => {
  const faqCategories = [
    {
      title: "Admission & Enrollment",
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      faqs: [
        {
          question: "What are the admission requirements for ICE department?",
          answer: "Admission to the ICE department requires passing the admission test conducted by Rangpur Engineering College. Candidates must have a strong background in Mathematics and Physics from HSC level. The minimum GPA requirement is 3.5 in both SSC and HSC examinations."
        },
        {
          question: "When does the admission process start?",
          answer: "The admission process typically starts in July each year. Application forms are available online at www.recr.edu.bd. The admission test is usually held in August, and classes begin in September."
        },
        {
          question: "What is the seat capacity for ICE department?",
          answer: "The ICE department has a total seat capacity of 120 students per session, divided into two sections of 60 students each."
        },
        {
          question: "Are there any quotas for admission?",
          answer: "Yes, there are quotas as per government guidelines including freedom fighter quota, tribal quota, and district quota. Details are available in the admission circular."
        }
      ]
    },
    {
      title: "Academic Programs",
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      faqs: [
        {
          question: "What is the duration of the ICE program?",
          answer: "The Bachelor of Science in Information and Communication Engineering is a 4-year program divided into 8 semesters. Each semester is approximately 6 months long."
        },
        {
          question: "What subjects are covered in the curriculum?",
          answer: "The curriculum covers fundamental subjects like Mathematics, Physics, Programming, Digital Electronics, Communication Systems, Signal Processing, Computer Networks, Microprocessors, and advanced topics like Artificial Intelligence, Machine Learning, and Wireless Communications."
        },
        {
          question: "Are there any practical labs?",
          answer: "Yes, we have well-equipped laboratories for Electronics, Programming, Communication Systems, Computer Networks, and a dedicated project lab for final year projects."
        },
        {
          question: "What is the examination system?",
          answer: "The examination system includes continuous assessment (30%) through class tests, assignments, and attendance, and final examinations (70%) held at the end of each semester."
        }
      ]
    },
    {
      title: "Faculty & Resources",
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      faqs: [
        {
          question: "How many faculty members are in the ICE department?",
          answer: "The ICE department has 45+ qualified faculty members including professors, associate professors, assistant professors, and lecturers, all with advanced degrees in relevant fields."
        },
        {
          question: "What research opportunities are available?",
          answer: "Students can participate in research projects under faculty supervision, particularly in areas like wireless communication, signal processing, artificial intelligence, and IoT. Final year students must complete a thesis project."
        },
        {
          question: "Are there any industry collaborations?",
          answer: "Yes, we have partnerships with leading tech companies and organizations for internships, industrial training, and job placement opportunities."
        },
        {
          question: "What library and online resources are available?",
          answer: "The college has a central library with extensive collection of books, journals, and digital resources. Students also have access to online databases and e-learning platforms."
        }
      ]
    },
    {
      title: "Career & Placement",
      icon: <HelpCircle className="h-6 w-6 text-primary" />,
      faqs: [
        {
          question: "What are the career prospects after graduation?",
          answer: "Graduates can work in telecommunications, software development, networking, embedded systems, research and development, and pursue higher studies. Many alumni work in leading companies like Google, Microsoft, Samsung, and Grameenphone."
        },
        {
          question: "Does the department provide placement assistance?",
          answer: "Yes, we have a dedicated placement cell that organizes campus recruitment drives, career counseling sessions, and helps students prepare for interviews and competitive examinations."
        },
        {
          question: "Can graduates pursue higher studies abroad?",
          answer: "Absolutely! Many of our graduates have been accepted to prestigious universities worldwide for Master's and PhD programs. The department provides recommendation letters and guidance for higher study applications."
        },
        {
          question: "What is the average starting salary for graduates?",
          answer: "The starting salary varies depending on the company and position, but generally ranges from BDT 35,000 to BDT 80,000 per month for fresh graduates, with significant growth potential."
        }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+880-521-65401"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email", 
      value: "ice@recr.edu.bd"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "Rangpur Engineering College, Rangpur-5404, Bangladesh"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Find answers to common questions about the Information and Communication Engineering Department. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-accent/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Still Have Questions?</CardTitle>
            <CardDescription>
              Contact us directly for more information or personalized assistance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-accent/20">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Office Hours:</strong> Sunday to Thursday, 9:00 AM - 5:00 PM<br />
                <strong>Response Time:</strong> We typically respond to emails within 24 hours during working days.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;