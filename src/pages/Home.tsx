import { motion } from 'framer-motion'
import HeroCarousel from '../components/HeroCarousel'
import AboutSection from '../components/AboutSection'
import FeaturedProducts from '../components/FeaturedProducts'
import ServicesSection from '../components/ServicesSection'
import BrandMarquee from '../components/BrandMarquee'
import CertificationsSection from '../components/CertificationsSection'
import WhyChooseUs from '../components/WhyChooseUs'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HeroCarousel />
      <AboutSection />
      <FeaturedProducts />
      <ServicesSection />
      <BrandMarquee />
      <CertificationsSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTABanner />
    </motion.div>
  )
}
