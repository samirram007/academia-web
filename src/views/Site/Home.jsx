import useDocumentTitle from "../../CustomHooks/useDocumentTitle";
import AboutSection from "../../components/Site/AboutSection";
import ContactSection from "../../components/Site/ContactSection";
import FooterSection from "../../components/Site/FooterSection";
import HeroSection from "../../components/Site/HeroSection";
function Home() {
    useDocumentTitle('Home')
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ContactSection />
            <FooterSection />
        </>
    );
}

export default Home;
