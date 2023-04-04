import Home from 'components/Home';
import Services from 'components/Services';
import Portfolio from 'components/Portfolio';
import Milestones from 'components/Milestones';
import Blog from 'components/Blog';
import Video from 'components/Video';
import Pricing from 'components/Pricing';
import Testimonials from 'components/Testimonials';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App