import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `About Us - Simple Template`;
  }, []);

  const teamMembers = [
    {
      name: `Alex Johnson`,
      role: `CEO & Founder`,
      bio: `Alex has over 15 years of experience in the tech industry and founded Simple Template with a vision to simplify complex workflows.`,
      avatar: `https://i.pravatar.cc/150?img=33`
    },
    {
      name: `Sarah Chen`,
      role: `CTO`,
      bio: `With a background in software engineering at major tech companies, Sarah leads our technical strategy and product development.`,
      avatar: `https://i.pravatar.cc/150?img=5`
    },
    {
      name: `Michael Rodriguez`,
      role: `Head of Design`,
      bio: `Michael brings his passion for user-centered design to create intuitive and beautiful experiences for our customers.`,
      avatar: `https://i.pravatar.cc/150?img=12`
    },
    {
      name: `Priya Patel`,
      role: `VP of Customer Success`,
      bio: `Priya ensures our customers get the most value from our platform through exceptional support and training.`,
      avatar: `https://i.pravatar.cc/150?img=23`
    }
  ];

  return (
    <div>
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Simple Template</h1>
            <p className="text-xl text-muted-foreground">
              {`We're on a mission to simplify complex workflows and help businesses thrive in the digital age.`}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  {`Founded in 2018, Simple Template began with a clear vision: to create a platform that simplifies complex workflows for businesses of all sizes.`}
                </p>
                <p>
                  {`Our founders recognized that many companies were struggling with overly complicated software solutions that required extensive training and resources to implement effectively.`}
                </p>
                <p>
                  {`We set out to build something different—a platform that combines powerful functionality with intuitive design, making advanced tools accessible to everyone.`}
                </p>
                <p>
                  {`Today, Simple Template serves thousands of customers worldwide, from small startups to large enterprises, all benefiting from our streamlined approach to business processes.`}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaboration" 
                className="relative rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {`These core principles guide everything we do at Simple Template.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: `Simplicity`,
                description: `We believe in making complex things simple, not the other way around.`
              },
              {
                title: `Innovation`,
                description: `We continuously explore new ideas and technologies to improve our platform.`
              },
              {
                title: `Customer Focus`,
                description: `Our customers' success is our success. We listen, learn, and adapt to their needs.`
              },
              {
                title: `Integrity`,
                description: `We're committed to transparency, honesty, and ethical business practices.`
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {`The talented people behind Simple Template who make it all possible.`}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;