import Overview from "@components/Sections/Overview";
import OurValues from "@components/Sections/OurValues";
import Benefites from "@components/Sections/Benefites";
import Jobs from "@components/Sections/Jobs";
import Faqs from "@components/Sections/Faqs";
import CTA from "@components/Sections/CTA";
import useChangeTitle from "@hooks/useChangeTitle";

function CareersPage() {
    useChangeTitle("Careers");
    return (
        <div className="careers-page">
            <Overview />
            <OurValues />
            <Benefites />
            <Jobs />
            <Faqs />
            <CTA />
        </div>
    )
}

export default CareersPage;