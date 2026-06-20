import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import Products from '@/components/Products'
import Insights from '@/components/Insights'
import Partners from '@/components/Partners'
import FAQ from '@/components/FAQ'
import CTAStrip from '@/components/CTAStrip'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <Products />
      <Insights />
      <Partners />
      <FAQ />
      <CTAStrip />
      <Footer />
    </main>
  )
}
