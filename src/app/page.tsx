import ArticleTips from "@/component/Sections/ArticleTipsSections";
import PopularDestination from "@/component/Sections/PopularDestinationSection";
import ValueTrips from "@/component/Sections/ValueTripsSections";
import WhyChooseUs from "@/component/Sections/WhyChososeUs";
import BaseScroll from "@/component/base/BaseScroll";
import Footer from "@/component/homepage/Footer";
import HeaderHomePage from "@/component/homepage/Header";
import NavBar from "@/component/layout/Navbar";
import OptionBtn from "@/component/setup/OptionBtn";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar id="back-to-top-anchor" />
        <HeaderHomePage />
        <OptionBtn />
        <PopularDestination />
        <ValueTrips />
        <WhyChooseUs />
        <img
          src="/pexels.jpg"
          style={{
            width: "100%",
            height: 700,
            objectFit: "cover",
            paddingTop: "70px",
          }}
        />
        <ArticleTips />
        <Footer />
        <BaseScroll />
      </div>
    </main>
  );
}
