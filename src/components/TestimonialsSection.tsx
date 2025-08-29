import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  index: number;
}

const Testimonial = ({ quote, name, role, company, avatar, index }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="mb-4 text-primary">
            <Quote className="h-6 w-6" />
          </div>
          <p className="mb-6 text-foreground">{quote}</p>
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-4">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{role}, {company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed.",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "We've tried many solutions before, but this one stands out for its simplicity and powerful features. It's been a game-changer for our workflow.",
      name: "Michael Chen",
      role: "CTO",
      company: "Innovate Inc",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      // @ts-ignore
      quote: `The customer support is exceptional. Any time we've had questions, the team has been responsive and helpful. Highly recommend!`,
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "GrowthLabs",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
