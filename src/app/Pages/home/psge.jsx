import Categories from "@/app/components/Categories/page";
import Creators from "@/app/components/Creators/page";
import Discover from "@/app/components/Discover/Discover";
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero-section/page";
import NavBar from "@/app/components/Navbar/NavBar";
import Trending from "@/app/components/Treding/page";
import Cards from "@/app/components/cards/page";
import Feedback from "@/app/components/feedback/feedback";
import Mushrooms from "@/app/components/magic/Mushrooms";



export default function HomePage() {
    return (
        <>
    <NavBar />
    <Hero />
    <Cards />
    <Trending />
    <Mushrooms />
    <Creators />
    <Categories />
    <Discover />
    <Feedback />
    <Footer />
    </>
    )
}
