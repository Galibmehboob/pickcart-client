"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner";

import {
  BadgeCheck,
  Eye,
 EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Truck,
  Headphones,
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

import { authClient } from "@/lib/auth-client";

import Logo from "@/components/layout/navbar/Logo";
import registerHero from "@/assests/images/auth/login-hero.png";

const features = [
  { title: "Secure Payments", icon: ShieldCheck },
  { title: "Fast Delivery", icon: Truck },
  { title: "Quality Products", icon: BadgeCheck },
  { title: "24/7 Support", icon: Headphones },
] as const;

export default function LoginPage() {
 const router = useRouter();

const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [errors, setErrors] = useState<Record<string, string>>({});
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const newErrors: Record<string, string> = {};

  if (!email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  if (Object.keys(newErrors).length) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  try {
    setLoading(true);

    const result = await authClient.signIn.email({
      email,
      password,
    });

    if (result.error) {
      toast.error(result.error.message);
      return;
    }

    toast.success("Login successful");

    router.push("/");
    router.refresh();
  } catch {
    toast.error("Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen w-full bg-background">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Image / Hero Section */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1 hidden lg:flex min-h-[500px] items-center justify-center overflow-hidden bg-muted"
        >
          <Image
            src={registerHero}
            alt="PickCart Shopping Experience"
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
              Shop Smarter with PickCart
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-lg text-white/80"
            >
              Discover quality products, secure payments, fast delivery, and a seamless shopping experience.
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
                    className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl shadow-lg"
                  >
                    <Icon className="h-6 w-6 text-success" />
                    <span className="font-medium text-white">{feature.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Right Side: Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20 xl:px-24 order-1 lg:order-2"
        >
          <div className="mx-auto w-full max-w-md rounded-2xl border border-default-200 bg-background/60 p-8 shadow-xl backdrop-blur-xl sm:p-10">
            <div className="mb-8">
              <Logo />
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Welcome Back</h1>
              <p className="mt-2 text-sm text-default-500">
                Login to continue your shopping journey.
              </p>
            </div>

            {/* HeroUI v3 Form */}
            <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Email Field */}
              <TextField isRequired name="email" type="email">
                <Label className="text-sm font-medium text-foreground">Email Address</Label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 h-4 w-4 text-default-400 pointer-events-none" />
                  <Input
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  disabled={loading}
  className="pl-9 w-full"
/>

{errors.email ? (
  <p className="text-xs text-danger mt-1">{errors.email}</p>
) : (
  <FieldError className="text-xs text-danger mt-1" />
)}
                </div>
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>

              {/* Password Field */}
              <TextField isRequired name="password" type={showPassword ? "text" : "password"}>
                <Label className="text-sm font-medium text-foreground">Password</Label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3 h-4 w-4 text-default-400 pointer-events-none" />
                  <Input
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  disabled={loading}
  className="pl-9 pr-10 w-full"
/>

{errors.password ? (
  <p className="text-xs text-danger mt-1">{errors.password}</p>
) : (
  <FieldError className="text-xs text-danger mt-1" />
)}
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 text-default-400 transition hover:text-foreground focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <FieldError className="text-xs text-danger mt-1" />
              </TextField>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <Checkbox
  isSelected={false}
  isDisabled={loading}
>
  Remember me
</Checkbox>
                <Link
                  href="/forgot-password"
                  className="font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Primary Action Button */}
             <Button
  type="submit"
  isDisabled={loading}
  className="w-full font-medium bg-primary text-primary-foreground py-3 rounded-lg"
>
  {loading ? "Signing In..." : "Login"}
</Button>
            </Form>

            {/* Custom Semantic Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-default-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-default-400">OR</span>
              </div>
            </div>

            {/* Social Authentication Button */}
          <Button
  type="button"
  isDisabled={loading}
  onPress={async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  }}
  className="w-full border border-default-200"
>
  Continue with Google
</Button>

            {/* Redirect Footer */}
            <p className="mt-6 text-center text-sm text-default-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-primary hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </motion.div>

      </section>
    </main>
  );
}