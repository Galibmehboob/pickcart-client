"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {  Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { uploadImage } from "@/lib/imageUpload";
import { toast } from "sonner";
import {
  BadgeCheck,
  Eye,
  Camera,
  EyeOff,
  Gift,
  Lock,
  Mail,
  ShieldCheck,
  Truck,
  User,
  Trash2,
} from "lucide-react";
import {
  
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
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer");
 
  const [preview, setPreview] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  useEffect(() => {
  return () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
  };
}, [preview]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

   const previewUrl = URL.createObjectURL(file);

setPreview(previewUrl);

    try {
      setIsUploading(true);

      const url = await uploadImage(file);

      setImageUrl(url);

      toast.success("Profile image uploaded successfully.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Image upload failed."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview("");
    setImageUrl("");
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: role === "seller" ? "/seller" : "/",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Google authentication failed."
      );
      setLoading(false);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const clientErrors: Record<string, string> = {};

    if (!name.trim()) {
      clientErrors.name = "Full Name is required";
    }

    if (!email.trim()) {
      clientErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      clientErrors.email = "Invalid email";
    }

    if (password.length < 6) {
      clientErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      clientErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      toast.error("Please accept Terms & Conditions.");
      return;
    }

    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      return;
    }

    try {
      setLoading(true);

    const { error } = await authClient.signUp.email({
  name,
  email,
  password,
  image: imageUrl || undefined,
  role,
});

      if (error) {
        toast.error(error.message || "Registration failed.");
        return;
      }

      toast.success("Registration Successful.");

      router.push(role === "seller" ? "/seller" : "/");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

   return (
    <main className="min-h-screen w-full bg-background">
      <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* Premium Left Hero Section */}
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

              {/* Profile Image Upload */}
              <div className="mb-2 flex flex-col items-center justify-center gap-3">
                <Label className="self-start text-sm font-medium text-foreground">
                  Profile Image
                </Label>

                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-default-200 bg-default-100 shadow-inner group/avatar">
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Avatar Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="h-10 w-10 text-default-400" />
                  )}

                  <label
                    htmlFor="avatar-upload"
                    className={`absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover/avatar:opacity-100 ${
                      loading || isUploading
                        ? "pointer-events-none opacity-0"
                        : ""
                    }`}
                  >
                    <Camera className="h-5 w-5 text-white" />
                  </label>

                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    disabled={loading || isUploading}
                  />
                </div>

                <div className="flex gap-2">
                <label htmlFor="avatar-upload">
  <Button
    size="sm"
    variant="secondary"
    className="cursor-pointer text-xs font-medium"
    isDisabled={loading || isUploading}
  >
    {isUploading ? "Uploading..." : "Upload Image"}
  </Button>
</label>

                  {preview && (
                    <Button
                      size="sm"
                      variant="danger"
                      
                      className="min-w-0 px-2.5 text-xs font-medium"
                      onPress={handleRemoveImage}
                      isDisabled={loading || isUploading}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>

                           {/* Full Name Field */}
              <TextField
                isRequired
                name="name"
                type="text"
                className="w-full"
                validationBehavior="aria"
                isInvalid={!!errors.name}
              >
                <Label className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name
                </Label>

                <div className="group relative flex items-center">
                  <User className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary" />

                  <Input
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    className="h-11 w-full rounded-xl border border-default-200 bg-default-50/50 pl-10 text-sm transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {errors.name ? (
                  <p className="mt-1 text-xs text-danger">{errors.name}</p>
                ) : (
                  <FieldError className="mt-1 text-xs text-danger" />
                )}
              </TextField>

              {/* Email Field */}
              <TextField
                isRequired
                name="email"
                type="email"
                className="w-full"
                validationBehavior="aria"
                isInvalid={!!errors.email}
              >
                <Label className="mb-1.5 block text-sm font-medium text-foreground">
                  Email Address
                </Label>

                <div className="group relative flex items-center">
                  <Mail className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary" />

                  <Input
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="h-11 w-full rounded-xl border border-default-200 bg-default-50/50 pl-10 text-sm transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {errors.email ? (
                  <p className="mt-1 text-xs text-danger">{errors.email}</p>
                ) : (
                  <FieldError className="mt-1 text-xs text-danger" />
                )}
              </TextField>

              
             

              {/* Password */}
              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full"
                validationBehavior="aria"
                isInvalid={!!errors.password}
              >
                <Label className="mb-1.5 block text-sm font-medium text-foreground">
                  Password
                </Label>

                <div className="group relative flex items-center">
                  <Lock className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary" />

                  <Input
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    className="h-11 w-full rounded-xl border border-default-200 bg-default-50/50 pl-10 pr-10 text-sm transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 z-10 text-default-400 hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.password ? (
                  <p className="mt-1 text-xs text-danger">
                    {errors.password}
                  </p>
                ) : (
                  <FieldError className="mt-1 text-xs text-danger" />
                )}
              </TextField>

              {/* Confirm Password */}
              <TextField
                isRequired
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full"
                validationBehavior="aria"
                isInvalid={!!errors.confirmPassword}
              >
                <Label className="mb-1.5 block text-sm font-medium text-foreground">
                  Confirm Password
                </Label>

 
                <div className="group relative flex items-center">
                  <Lock className="pointer-events-none absolute left-3.5 z-10 h-4 w-4 text-default-400 transition-colors group-focus-within:text-primary" />

                  <Input
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    className="h-11 w-full rounded-xl border border-default-200 bg-default-50/50 pl-10 pr-10 text-sm transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3.5 z-10 text-default-400 hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.confirmPassword ? (
                  <p className="mt-1 text-xs text-danger">
                    {errors.confirmPassword}
                  </p>
                ) : (
                  <FieldError className="mt-1 text-xs text-danger" />
                )}
              </TextField>

{/* Role */}
 <div className="grid grid-cols-2 gap-4">
  <button
    type="button"
    onClick={() => setRole("customer")}
    className={`rounded-xl border-2 p-4 transition-all ${
      role === "customer"
        ? "border-blue-900 bg-gray-300"
        : "border-gray-300"
    }`}
  >
    <p className="font-semibold">Customer</p>
    <p className="text-xs">Buy products.</p>
  </button>

  <button
    type="button"
    onClick={() => setRole("seller")}
    className={`rounded-xl border-2 p-4 transition-all ${
      role === "seller"
        ? "border-blue-900 bg-gray-700 "
        : "border-gray-300"
    }`}
  >
    <p className="font-semibold">Seller</p>
    <p className="text-xs">Sell products.</p>
  </button>
</div>

                           {/* Terms */}
             <label className="flex items-start gap-3 text-sm">

  <input
    type="checkbox"
    checked={agreeTerms}
    onChange={(e) => setAgreeTerms(e.target.checked)}
    className="mt-1 h-4 w-4"
  />

  <span>
    I agree to the{" "}
    <Link
      href="/terms"
      className="text-primary font-medium hover:underline"
    >
      Terms & Conditions
    </Link>
  </span>

</label>

              {/* Submit Button */}
              <Button
                type="submit"
                isDisabled={loading || isUploading}
                className="h-11 w-full rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-[0.98]"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </Form>

            {/* Divider */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-default-200/60" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-background/80 px-3 text-xs font-medium uppercase tracking-wider text-default-400 backdrop-blur-md">
                  Or
                </span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              type="button"
              onPress={handleGoogleSignIn}
              isDisabled={loading || isUploading}
              className="h-11 w-full rounded-xl border border-default-200 bg-background/50 font-medium text-foreground shadow-sm transition-all hover:bg-default-100/80 active:scale-[0.98]"
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h246.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>

              Continue with Google
            </Button>

            <p className="mt-8 text-center text-sm text-default-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary transition-all hover:underline underline-offset-4"
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