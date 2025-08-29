import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  index: number;
}

const PricingTier = ({ name, price, description, features, buttonText, popular, index }: PricingTierProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className={`h-full ${popular ? 'border-primary shadow-lg relative' : ''}`}>
        {popular && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            Popular
          </Badge>
        )}
        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            {price !== 'Custom' && <span className="text-muted-foreground ml-1">/month</span>}
          </div>
          <p className="text-muted-foreground mt-2">{description}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className={`w-full ${popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20'}`}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PricingSection = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for individuals and small teams getting started.',
      features: [
        'Up to 5 users',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'API access'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Ideal for growing businesses and teams.',
      features: [
        'Up to 20 users',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with specific requirements.',
      features: [
        'Unlimited users',
        'Unlimited storage',
        'Custom analytics',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'On-premise option'
      ],
      buttonText: 'Contact Sales',
      popular: false
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that works best for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              buttonText={tier.buttonText}
              popular={tier.popular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
