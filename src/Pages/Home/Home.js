import { Navbar } from "../../components/LandingPage/Navbar/Navbar";
import { Hero } from "../../components/LandingPage/Hero/Hero";
import { MidPage } from "../../components/LandingPage/MidPage/MidPage";
import { ProjectSection } from "../../components/LandingPage/Project/ProjectSection";
import { AboutProfile } from "../../components/LandingPage/aboutProfile/AboutProfile";

export const Home = () => {
    return (
        <main className="font-solway">
            <Navbar />
            <Hero />
            <MidPage />
            <ProjectSection />
            <AboutProfile />
        </main>
    )
}