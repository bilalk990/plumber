import Header from "@/components/Header";
import LuxuryHero from "@/components/LuxuryHero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <LuxuryHero />
            <TrustSignals />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Footer />
        </main>
    );
}
