import { motion } from 'framer-motion';
import { Zap, Shield, Circle as BarChart, Users, Clock, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}>

      <Card className="h-full hover:shadow-md transition-shadow border-border">
        <CardHeader>
          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>);

};

const FeaturesSection = () => {
  const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning Fast',
    description: 'Our platform is optimized for speed, ensuring your workflow is never interrupted.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure by Design',
    description: 'Enterprise-grade security with end-to-end encryption and regular security audits.'
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our comprehensive analytics and reporting tools.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Team Collaboration',
    description: 'Seamlessly work together with your team in real-time with collaborative features.'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Time-Saving Automation',
    description: 'Automate repetitive tasks and focus on what matters most to your business.'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Customizable Workflow',
    description: 'Tailor the platform to your specific needs with our flexible customization options.'
  }];


  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is packed with features designed to enhance your productivity and streamline your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index} />

          )}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;