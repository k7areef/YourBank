import CTA from "@components/Sections/CTA";
import Faqs from "@components/Sections/Faqs";
import Features from "@components/Sections/Features";
import HeroSection from "@components/Sections/HeroSection";
import Products from "@components/Sections/Products";
import Testimonials from "@components/Sections/Testimonials";
import UseCases from "@components/Sections/UseCases";
import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            <HeroSection />
            <Products />
            <UseCases />
            <Features />
            <Faqs />
            <Testimonials />
            <CTA />
        </div>
    )
}

export default HomePage;