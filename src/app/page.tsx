import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Features />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTA />
    </main>
  );
}