import { Route, Router, Switch } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowWeMakeAIUseful from './components/HowWeMakeAIUseful';
import GoodFirstProjects from './components/GoodFirstProjects';
import WhyChooseUs from './components/WhyChooseUs';
// import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tools from './components/Tools';
import NotFound from './pages/not-found';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowWeMakeAIUseful />
      <GoodFirstProjects />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CallToAction />
      <Contact />
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-ivory">
        <Header />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/tools" component={Tools} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
