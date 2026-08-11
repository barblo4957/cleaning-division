import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCta from './components/MobileCta'

function App() {
  return (
    <div className="pb-16 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </div>
  )
}

export default App
