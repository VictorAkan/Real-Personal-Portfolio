import { Navbar } from "../../components/LandingPage/Navbar/Navbar";
import { Hero } from "../../components/LandingPage/Hero/Hero";
import { MidPage } from "../../components/LandingPage/MidPage/MidPage";
import { ProjectSection } from "../../components/LandingPage/Project/ProjectSection";
import { AboutProfile } from "../../components/LandingPage/aboutProfile/AboutProfile";
import { WhyMe } from "../../components/LandingPage/Whyme/whyMe";
import { KeepInTouch } from "../../components/LandingPage/contact/KeepInTouch";
import { Footer } from "../../components/LandingPage/Footer/Footer";

export const Home = () => {
    return (
        <main className="font-solway">
            <Navbar />
            <Hero />
            <MidPage />
            <ProjectSection />
            <AboutProfile />
            <WhyMe />
            <div className="px-10 md:px-32">
            <hr className="bg-gray-900 border border-gray-900 mt-28 w-full" />
            </div>
            <KeepInTouch />
            <Footer />
        </main>
    )
}