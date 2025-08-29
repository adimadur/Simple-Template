import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Shield, Circle as BarChart, Users, Clock, Settings, Layers, Code, Globe, Database, Cloud, Lock } from 'lucide-react';

const Features = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Set page title
    document.title = 'Features - Simple Template';
  }, []);

  const featureCategories = [
  {
    id: 'productivity',
    name: 'Productivity',
    features: [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast Performance',
      description: 'Our platform is optimized for speed, ensuring your workflow is never interrupted by slow loading times or laggy interfaces.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Time-Saving Automation',
      description: 'Automate repetitive tasks with customizable workflows and triggers, saving your team valuable time and reducing human error.'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and services through our extensive API and pre-built integrations, creating a unified workflow.'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Customizable Workflows',
      description: 'Tailor the platform to your specific needs with flexible customization options, creating the perfect setup for your team.'
    }]

  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    features: [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Real-Time Collaboration',
      description: 'Work together with your team in real-time, seeing changes as they happen and avoiding version control issues.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Accessibility',
      description: 'Access your work from anywhere in the world, on any device, with our responsive and mobile-friendly platform.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Developer Tools',
      description: 'Extend functionality with our developer tools, including webhooks, custom scripts, and advanced API access.'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud Storage',
      description: 'Store and share files securely in the cloud, with version history and granular permission controls.'
    }]

  },
  {
    id: 'security',
    name: 'Security',
    features: [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Enterprise-Grade Security',
      description: 'Protect your data with end-to-end encryption, regular security audits, and compliance with industry standards.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Advanced Permissions',
      description: 'Control who can access what with role-based permissions and custom access levels for teams and individuals.'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Backup & Recovery',
      description: 'Never lose important work with automatic backups and easy recovery options for all your data.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Audit Logs & Compliance',
      description: 'Track all activity with detailed audit logs and ensure compliance with regulatory requirements.'
    }]

  }];


  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h1>
            <p className="text-xl text-muted-foreground">
              Discover all the tools and capabilities that make Simple Template the ideal solution for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="productivity" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                {featureCategories.map((category) =>
                <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                )}
              </TabsList>
            </div>
            
            {featureCategories.map((category) =>
            <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, index) =>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>

                      <Card className="h-full">
                        <CardHeader>
                          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                            {feature.icon}
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                )}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare our plans to find the perfect fit for your business needs.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center bg-primary/5 border-x border-border">Professional</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">Users</td>
                  <td className="py-4 px-6 text-center">Up to 5</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">Up to 20</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">Storage</td>
                  <td className="py-4 px-6 text-center">5GB</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">50GB</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">Analytics</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">Advanced</td>
                  <td className="py-4 px-6 text-center">Custom</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">Priority</td>
                  <td className="py-4 px-6 text-center">Dedicated</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">API Access</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-6 font-medium">Custom Integrations</td>
                  <td className="py-4 px-6 text-center">✗</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">On-premise Option</td>
                  <td className="py-4 px-6 text-center">✗</td>
                  <td className="py-4 px-6 text-center bg-primary/5 border-x border-border">✗</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>);

};

export default Features;