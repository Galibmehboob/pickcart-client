"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircleQuestion,
  HelpCircle,
} from "lucide-react";
import { Button, Accordion, AccordionItem } from "@heroui/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30 pb-20">
      {/* 1. Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have a question, feedback, or need technical assistance? Our dedicated 
            support team is here to help you experience seamless commerce.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Phone, title: "Call Us", details: "+1 (555) 234-5678", sub: "Toll-free worldwide" },
            { icon: Mail, title: "Email Support", details: "support@pickcart.com", sub: "Response within 24 hours" },
            { icon: MapPin, title: "Our Office", details: "Silicon Valley, CA", sub: "100 Innovation Way, Suite 400" },
            { icon: Clock, title: "Support Hours", details: "24 / 7 Availability", sub: "Including public holidays" },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -8, borderColor: "rgba(99, 102, 241, 0.4)" }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-xl transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-white font-medium mb-1 text-sm">{card.details}</p>
              <p className="text-gray-500 text-xs">{card.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Contact Form & Map Section */}
      <section className="container mx-auto px-6 mb-24 grid lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white/[0.02] border border-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">Send us a Message</h2>
          <p className="text-gray-400 text-sm mb-8">Fill out the form below and we will get back to you shortly.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name Input */}
              <div className="flex flex-col justify-center gap-1 px-4 h-14 rounded-2xl border border-white/10 hover:border-white/20 focus-within:!border-indigo-500/50 bg-black/20 transition-all duration-150">
                <label className="text-gray-400 text-xs">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent text-sm text-white outline-none pb-1"
                />
              </div>

              {/* Email Address Input */}
              <div className="flex flex-col justify-center gap-1 px-4 h-14 rounded-2xl border border-white/10 hover:border-white/20 focus-within:!border-indigo-500/50 bg-black/20 transition-all duration-150">
                <label className="text-gray-400 text-xs">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent text-sm text-white outline-none pb-1"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col justify-center gap-1 px-4 h-14 rounded-2xl border border-white/10 hover:border-white/20 focus-within:!border-indigo-500/50 bg-black/20 transition-all duration-150">
              <label className="text-gray-400 text-xs">Subject</label>
              <input
                type="text"
                required
                className="w-full bg-transparent text-sm text-white outline-none pb-1"
              />
            </div>
            
            {/* Custom Premium Textarea Layer */}
            <div className="flex flex-col justify-center gap-1 p-4 min-h-[120px] rounded-2xl border border-white/10 hover:border-white/20 focus-within:!border-indigo-500/50 bg-black/20 transition-all duration-150">
              <label className="text-gray-400 text-xs">Your Message</label>
              <textarea
                required
                className="w-full bg-transparent text-sm text-white outline-none resize-none pt-1 placeholder-gray-600"
                rows={4}
                placeholder="Type your message here..."
              />
            </div>

            {/* HeroUI Button */}
            <Button
              type="submit"
              variant="outline"
             
              className="bg-indigo-600 rounded-full text-white font-semibold h-12 mt-2 shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-colors group flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </form>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 h-full min-h-[450px] lg:min-h-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl relative group"
        >
          <div className="absolute inset-0 bg-indigo-500/5 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s!2s!3s!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d3f115147fe0!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-full min-h-[450px] lg:absolute lg:inset-0 border-0 invert-[92%] sepia-[8%] saturate-[740%] hue-rotate-[191deg] brightness-[88%] contrast-[94%]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      {/* 4. FAQ Section */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-2xl bg-white/[0.03] border border-white/5 mb-4">
            <MessageCircleQuestion className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.01] border border-white/5 rounded-3xl p-4 md:p-6"
        >
          <Accordion  className="px-0 flex flex-col gap-3">
            {[
              {
                key: "1",
                label: "Shipping Support",
                heading: "How long does international shipping take?",
                content: "Standard international shipping typically takes between 7 to 14 business days, while express delivery options can reach your destination within 3 to 5 business days. Full tracking visibility is provided via email once dispatched."
              },
              {
                key: "2",
                label: "Refund Policy",
                heading: "What is your return and refund protocol?",
                content: "We offer a premium 30-day hassle-free return window. If you are not completely satisfied, you can initiate a return directly from your profile dashboard. Refunds are securely processed back to the original payment method within 5-7 business days."
              },
              {
                key: "3",
                label: "Delivery Tracking",
                heading: "Can I alter my delivery address post-order?",
                content: "Delivery addresses can be updated within 1 hour of placing your order by contacting Customer Support directly. Once the order status transits to 'Dispatched', we are unable to modify the destination parameters."
              },
              {
                key: "4",
                label: "Seller Operations",
                heading: "How do I register as an enterprise Seller?",
                content: "Enterprises and individual brands can onboard by visiting the Seller Portal link on our navbar. Complete the compliance verification, list your products, and gain instant access to our worldwide database of multi-million active customers."
              },
              {
                key: "5",
                label: "Customer Support VIP",
                heading: "Do you offer dedicated customer support infrastructure?",
                content: "Yes, PickCart provides high-priority technical and transactional live chat infrastructure natively inside the account panel for all registered members, alongside standard operational email modules."
              }
            ].map((item) => {
              // any এর বদলে Record<string, unknown> ব্যবহার করে টাইপ সেফ করা হয়েছে
              const accordionItemProps = {
                title: item.heading,
                "aria-label": item.label,
                classNames: {
                  base: "bg-white/[0.02] border border-white/5 rounded-2xl !shadow-none before:hidden data-[open=true]:border-indigo-500/30",
                  title: "text-white text-sm font-medium",
                  content: "text-gray-400 text-sm leading-relaxed pt-0 pb-4",
                  trigger: "px-6 py-4",
                }
              } as Record<string, unknown>;

              return (
                <AccordionItem key={item.key} {...accordionItemProps}>
                  {item.content}
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </section>

      {/* 5. CTA Section */}
      <section className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-16 rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 border border-indigo-500/20 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-60" />
          <div className="relative z-10 max-w-lg mx-auto">
            <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 mb-6">
              <HelpCircle className="w-5 h-5 text-indigo-300" />
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Need More Help?</h2>
            <p className="text-indigo-200/60 mb-8 text-sm leading-relaxed">
              Our enterprise documentation or dedicated customer relationship managers are available for instant query routing.
            </p>
            <Button 
              variant="outline" 
            
              className="bg-white text-black rounded-full h-14 px-10 font-bold shadow-xl hover:bg-gray-100 transition-all text-sm"
            >
              Open Live Support Chat
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}