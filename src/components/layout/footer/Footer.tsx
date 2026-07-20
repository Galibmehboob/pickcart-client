"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  
} from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { GrLinkDown } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const customerLinks = [
  { label: "My Account", href: "/login" },
  { label: "Cart", href: "/cart" },
  // { label: "Orders", href: "/orders" },
  { label: "Dashboard", href: "/dashboard" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LiaLinkedin,
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="border-t border-default-200 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              aria-label="PickCart Home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShoppingBag className="size-5" />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                PickCart
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-foreground/70">
              PickCart delivers a premium shopping experience with quality
              products, seamless browsing, and secure checkout for every
              customer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Customer</h3>

            <ul className="mt-5 space-y-3">
              {customerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <ul className="mt-5 space-y-4 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-primary" />
                <span>support@pickcart.com</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-primary" />
                <span>+880 1700-000000</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-default-200 transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-default-200 pt-6">
          <p className="text-center text-sm text-foreground/60">
            © {year} PickCart. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}