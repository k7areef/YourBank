import Faqs from "@components/Sections/Faqs";
import HowWeProtectYou from "@components/Sections/HowWeProtectYou";
import Overview from "@components/Sections/Overview";
import useChangeTitle from "@hooks/useChangeTitle";

function SecurityPage() {
    useChangeTitle("Security");
    return (
        <div className="security-page">
            <Overview />
            <HowWeProtectYou />
            <Faqs />
        </div>
    )
}

export default SecurityPage;