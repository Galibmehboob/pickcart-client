"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Zap,
  Leaf,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@heroui/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      {/* 1. Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
          >
            Redefining <br /> Commerce
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            PickCart is more than a store; it,s a curated shopping experience
            designed for the modern lifestyle. Quality meets convenience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button className="bg-white text-black font-semibold rounded-full h-12 px-8 shadow-lg hover:bg-gray-200 transition-colors">
              Shop Now
            </Button>
            <Button variant="outline" className="border-gray-800 text-gray-300 rounded-full h-12 px-8 hover:bg-white/5 transition-colors">
              Our Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeIn}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white">Built for the Future</h2>
            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <p>
                Founded in 2026, PickCart emerged from a simple desire: to make high-quality 
                products accessible to everyone, anywhere. We bridge the gap between premium 
                brands and everyday consumers through seamless technology.
              </p>
              <p>
                Our mission is to empower sellers and delight buyers, creating a sustainable 
                ecosystem where every transaction adds value.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ShoppingBag className="w-24 h-24 text-indigo-500/40 group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose PickCart */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center tracking-tight mb-16">Why Choose PickCart</h2>
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: ShieldCheck, title: "Verified Products", desc: "Every seller and item is thoroughly vetted for authenticity." },
            { icon: Zap, title: "Fast Delivery", desc: "Lightning-fast logistics that get your orders to you in no time." },
            { icon: Globe, title: "Global Reach", desc: "Bringing the best global brands straight to your doorstep." },
            { icon: Award, title: "Premium Quality", desc: "Handpicked collections tailored for those who appreciate quality." },
            { icon: TrendingUp, title: "Best Prices", desc: "Unbeatable deals and transparent pricing models." },
            { icon: Leaf, title: "Sustainability", desc: "Eco-friendly packaging options and optimized carbon footprint." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <item.icon className="w-10 h-10 text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Company Statistics */}
      <section className="py-24 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Happy Customers", val: "1M+" },
            { label: "Products Listed", val: "50K+" },
            { label: "Active Sellers", val: "2K+" },
            { label: "Orders Delivered", val: "5M+" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-white/[0.01] border border-white/[0.03] rounded-2xl backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {stat.val}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {["Integrity", "Innovation", "Customer First", "Quality", "Sustainability", "Fast Delivery"].map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium hover:bg-white/[0.06] hover:border-indigo-500/40 transition-colors cursor-default shadow-md"
            >
              {val}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Team Section */}
      <section className="py-24 bg-[#0d0d0d] border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alex Rivera", role: "CEO & Founder" },
              { name: "Sophia Chen", role: "Chief Technology Officer" },
              { name: "Marcus Johnson", role: "Head of Logistics" },
              { name: "Emily Davis", role: "Lead Product Designer" },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 mb-6 shadow-inner" />
                <h4 className="font-semibold text-lg text-white">{member.name}</h4>
                <p className="text-indigo-400 text-xs mt-1 font-medium tracking-wide uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="py-28 container mx-auto px-6 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-16 rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 border border-indigo-500/20 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to join PickCart?</h2>
            <p className="text-indigo-200/70 mb-10 text-sm md:text-base leading-relaxed">
              Step into the future of digital commerce. Create your account today or start browsing our premium catalog.
            </p>
            <Button className="bg-white text-black h-14 px-10 rounded-full font-semibold group shadow-xl hover:bg-gray-100 transition-all">
              Shop Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}