"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Eye,
  EyeOff,
  Gift,
  Lock,
  Mail,
  ShieldCheck,
  Truck,
  User,
} from "lucide-react";
import {
  Button,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Logo from "@/components/layout/navbar/Logo";
import registerHero from "@/assests/images/auth/register-hero.png"; 

const features = [
  { title: "Secure Checkout", icon: ShieldCheck },
  { title: "Fast Delivery", icon: Truck },
  { title: "Exclusive Discounts", icon: Gift },
  { title: "Trusted Products", icon: BadgeCheck },
] as const;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //todo: handle form submission logic here
  };

  return (
    <main className="min-h-screen w-full bg-background">
     
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        
       
        <motion.section
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:flex min-h-[500px] items-center justify-center overflow-hidden bg-muted"
        >
          <Image
            src={registerHero}
            alt="Shopping illustration"
          fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-xl px-8 text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold leading-tight"
            >
              Join the Future of Smart Shopping
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-lg text-white/80"
            >
              Create your PickCart account and enjoy secure shopping,
              exclusive deals, lightning-fast delivery, and premium
              customer experience.
            </motion.p>

            <div className="mt-10 grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -25 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl"
                  >
                    <Icon className="h-6 w-6 text-success" />
                    <span className="font-medium">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

     {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 xl:px-24"
        >
        
          <div className="mx-auto w-full max-w-md rounded-2xl border border-default-100 bg-background/60 p-6 shadow-2xl shadow-default-100/50 backdrop-blur-xl sm:p-10">
            <div className="mb-8">
              <Logo />
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text">
                Create an account
              </h1>
              <p className="mt-2 text-sm text-default-500">
                Get started with your smart shopping journey today.
              </p>
            </div>

          
            <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Full Name Field */}
              <TextField isRequired name="name" type="text" className="w-full">
                <Label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</Label>
                <div className="relative flex items-center group">
                  <User className="absolute left-3.5 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary pointer-events-none z-10" />
                  <Input 
                    placeholder="John Doe" 
                    className="pl-10 w-full h-11 rounded-xl border border-default-200 bg-default-50/50 transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 text-sm" 
                  />
                </div>
                <FieldError className="text-xs text-danger mt-1 animate-appearance-in" />
              </TextField>

              {/* Email Field */}
              <TextField isRequired name="email" type="email" className="w-full">
                <Label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</Label>
                <div className="relative flex items-center group">
                  <Mail className="absolute left-3.5 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary pointer-events-none z-10" />
                  <Input 
                    placeholder="you@example.com" 
                    className="pl-10 w-full h-11 rounded-xl border border-default-200 bg-default-50/50 transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 text-sm" 
                  />
                </div>
                <FieldError className="text-xs text-danger mt-1 animate-appearance-in" />
              </TextField>

              {/* Password Field */}
              <TextField isRequired name="password" type={showPassword ? "text" : "password"} className="w-full">
                <Label className="text-sm font-medium text-foreground mb-1.5 block">Password</Label>
                <div className="relative flex items-center group">
                  <Lock className="absolute left-3.5 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary pointer-events-none z-10" />
                  <Input 
                    placeholder="Create a password" 
                    className="pl-10 pr-10 w-full h-11 rounded-xl border border-default-200 bg-default-50/50 transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 text-sm" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3.5 text-default-400 transition-colors hover:text-foreground focus:outline-none z-10"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <FieldError className="text-xs text-danger mt-1 animate-appearance-in" />
              </TextField>

              {/* Confirm Password Field */}
              <TextField isRequired name="confirmPassword" type={showConfirmPassword ? "text" : "password"} className="w-full">
                <Label className="text-sm font-medium text-foreground mb-1.5 block">Confirm Password</Label>
                <div className="relative flex items-center group">
                  <Lock className="absolute left-3.5 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary pointer-events-none z-10" />
                  <Input 
                    placeholder="Confirm your password" 
                    className="pl-10 pr-10 w-full h-11 rounded-xl border border-default-200 bg-default-50/50 transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 text-sm" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3.5 text-default-400 transition-colors hover:text-foreground focus:outline-none z-10"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <FieldError className="text-xs text-danger mt-1 animate-appearance-in" />
              </TextField>

              {/* Checkbox Styled */}
              <Checkbox isRequired className="text-sm text-default-600 transition-colors hover:text-foreground">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium text-primary hover:underline transition-all underline-offset-4"
                >
                  Terms &amp; Conditions
                </Link>
              </Checkbox>

              {/* Premium Primary Button */}
              <Button 
                type="submit" 
                className="w-full font-semibold bg-primary text-primary-foreground h-11 rounded-xl shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Create Account
              </Button>
            </Form>

            {/* Custom Modern Divider Line */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-default-200/60"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="bg-background/80 backdrop-blur-md px-3 text-default-400 font-medium">Or</span>
              </div>
            </div>

            {/* Premium Styled Google Button */}
            <Button
              type="button"
              className="w-full font-medium h-11 border border-default-200 bg-background/50 text-foreground hover:bg-default-100/80 active:scale-[0.98] transition-all rounded-xl shadow-sm"
            >
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h246.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Continue with Google
            </Button>

            <p className="mt-8 text-center text-sm text-default-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary hover:underline underline-offset-4 transition-all"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>

      </section>
    </main>
  );
}