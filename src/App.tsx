import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
