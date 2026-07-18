"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    AlertTriangle,
    ArrowLeft,
    BadgeCheck,
    CreditCard,
    Lock,
    Package,
    RefreshCcw,
    Scale,
    ShieldCheck,
    ShoppingBag,
    Truck,
} from "lucide-react";
import { Button, Card, Chip } from "@heroui/react";

const sections = [
    {
        icon: Scale,
        title: "Acceptance of Terms",
        content:
            "By accessing or using PickCart, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our services.",
    },
    {
        icon: ShoppingBag,
        title: "Account Responsibilities",
        content:
            "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
    {
        icon: Package,
        title: "Orders & Product Availability",
        content:
            "All orders are subject to product availability and confirmation. We reserve the right to cancel or limit orders when necessary.",
    },
    {
        icon: CreditCard,
        title: "Payments",
        content:
            "Payments must be completed using supported payment methods. Prices, discounts, and promotions may change without prior notice.",
    },
    {
        icon: Truck,
        title: "Shipping & Delivery",
        content:
            "Estimated delivery times are provided for convenience and may vary due to logistics, weather conditions, or other unforeseen circumstances.",
    },
    {
        icon: RefreshCcw,
        title: "Returns & Refunds",
        content:
            "Eligible products may be returned within the applicable return window. Refunds are processed after successful inspection of returned items.",
    },
    {
        icon: ShieldCheck,
        title: "Privacy & Security",
        content:
            "We take reasonable measures to protect your information. Your use of PickCart is also governed by our Privacy Policy.",
    },
    {
        icon: Lock,
        title: "Prohibited Activities",
        content:
            "Users must not engage in fraudulent activities, misuse the platform, attempt unauthorized access, or violate applicable laws.",
    },
    {
        icon: BadgeCheck,
        title: "Intellectual Property",
        content:
            "All trademarks, logos, content, graphics, and software used on PickCart remain the property of their respective owners.",
    },
    {
        icon: AlertTriangle,
        title: "Limitation of Liability",
        content:
            "PickCart shall not be liable for indirect, incidental, or consequential damages arising from the use of the platform to the fullest extent permitted by law.",
    },
];

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background">
            <section className="relative overflow-hidden border-b">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

                <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Chip color="primary" variant="flat">
                            Terms & Conditions
                        </Chip>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                            PickCart Terms & Conditions
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-default-600">
                            Please read these Terms & Conditions carefully before using
                            PickCart. They explain your rights, responsibilities, and the
                            rules that govern your use of our platform.
                        </p>

                        <p className="mt-4 text-sm text-default-500">
                            Last Updated: July 2026
                        </p>

                        <div className="mt-8">
                            <Link href="/register">
                                <Button


                                    variant="outline"
                                    startContent={<ArrowLeft className="h-4 w-4" />}
                                >
                                    <ArrowLeft /> Back to Registration
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-6">
                    {sections.map((section, index) => {
                        const Icon = section.icon;

                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                }}
                            >
                                <Card
                                    shadow="sm"
                                    className="rounded-2xl border border-default-200/60"
                                >
                                    <Card className="flex flex-row gap-5 p-6">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold">
                                                {section.title}
                                            </h2>

                                            <p className="mt-3 leading-7 text-default-600">
                                                {section.content}
                                            </p>
                                        </div>
                                    </Card>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>        <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12"
                >
                    <Card className="rounded-2xl border border-primary/20 bg-primary/5">
                        <Card className="space-y-4 p-8 text-center">
                            <h2 className="text-2xl font-semibold">
                                Questions About These Terms?
                            </h2>

                            <p className="mx-auto max-w-2xl text-default-600">
                                If you have any questions regarding these Terms & Conditions,
                                please contact the PickCart support team before using our
                                platform. By continuing to use PickCart, you acknowledge that
                                you have read, understood, and agreed to these Terms &
                                Conditions.
                            </p>

                            <div className="flex justify-center">
                                <Button
                                    as={Link}
                                    href="/register"
                                    color="primary"
                                >
                                    I Understand
                                </Button>
                            </div>
                        </Card>
                    </Card>
                </motion.div>
            </section>
        </main>
    );
}