import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Contact Us - Simple Template`;
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to get started? Contact our team and we`ll get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="rounded-xl overflow-hidden shadow-md border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium">123 Tech Street, San Francisco, CA 94107</p>
                <p className="text-muted-foreground">Our Headquarters</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our platform and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: `How do I get started with Simple Template?`,
                  answer: `Getting started is easy! Simply sign up for a free trial on our website, and you'll have immediate access to the platform. No credit card required for the 14-day trial period.`
                },
                {
                  question: `Can I upgrade or downgrade my plan later?`,
                  answer: `Yes, you can easily upgrade or downgrade your plan at any time through your account settings. Changes to your subscription will be prorated based on your billing cycle.`
                },
                {
                  question: `Is there a limit to how many projects I can create?`,
                  answer: `There are no limits on the number of projects you can create on any of our plans. The main differences between plans are related to the number of users, storage space, and advanced features.`
                },
                {
                  question: `Do you offer discounts for non-profits or educational institutions?`,
                  answer: `Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact our sales team for more information about our discount programs.`
                },
                {
                  question: `How secure is my data on your platform?`,
                  answer: `We take security very seriously. All data is encrypted both in transit and at rest, and we perform regular security audits. We are compliant with industry standards and regulations to ensure your data remains protected.`
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border-b border-border pb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;