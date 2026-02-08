import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FlowDiagram from "@/components/FlowDiagram";
import StellarIntegration from "@/components/StellarIntegration";
import Architecture from "@/components/Architecture";
import ToolsSection from "@/components/ToolsSection";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FlowDiagram />
        <StellarIntegration />
        <Architecture />
        <ToolsSection />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
