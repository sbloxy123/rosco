import ServiceImageLinkSwiper from "@/components/ServiceImageLinkSwiper";
import IntroSection from "@/components/IntroSection";
import Hero from "@/components/Hero";
import MailingListCta from "@/components/MailingListCta";
import LatestProjects from "@/components/LatestProjects";
import TotPromo from "@/components/TotPromo";
import Testimonials from "@/components/Testimonials";
import AwardsSection from "@/components/AwardsSection";

export default async function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      {/* <ServiceImageLinkSwiper /> */}
      <MailingListCta />
      <LatestProjects />
      <TotPromo />
      <Testimonials />
      <AwardsSection />
    </main>
  );
}
