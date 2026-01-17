import Hero from "@/components/Home/Hero";
import MaskScroll from "@/components/Home/MaskScroll";
import Connections from "@/components/Home/Connections";
import CoreValues from "@/components/Home/CoreValues";
import TransformationServices from "@/components/Home/TransformationServices";
import LeafScrollText from "@/components/Home/LeafScrollText";
import BodyMindSpirit from "@/components/Home/BodyMindSpirit";
import FadeInText from "@/components/Home/FadeInText";
import CorporateProgram from "@/components/Home/CorporateProgram";
import HeroTestimonials from "@/components/Home/HeroTestimonials";
import Vision from "@/components/Home/Vision";
import BlogSection from "@/components/Home/BlogSection";
import ConsultationSection from "@/components/Home/ConsultationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MaskScroll />
      <Connections />
      <CoreValues />
      <TransformationServices />
      <LeafScrollText />
      <BodyMindSpirit />
      <FadeInText />
      <CorporateProgram />
      <HeroTestimonials />
      <Vision />
      <BlogSection />
      <ConsultationSection />
    </>
  );
}
