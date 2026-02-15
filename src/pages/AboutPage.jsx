import MissionAndVision from "@components/Sections/MissionAndVision";
import Overview from "@components/Sections/Overview";
import PressReleases from "@components/Sections/PressReleases";
import useChangeTitle from "@hooks/useChangeTitle";

function AboutPage() {
    useChangeTitle("About");
    return (
        <div className="about-page">
            <Overview />
            <MissionAndVision />
            <PressReleases />
        </div>
    )
}

export default AboutPage;