import ArticleTips from "@/component/Sections/ArticleTipsSections";
import PopularDestination from "@/component/Sections/PopularDestinationSection";
import ValueTrips from "@/component/Sections/ValueTripsSections";
import WhyChooseUs from "@/component/Sections/WhyChososeUs";
import Footer from "@/component/homepage/Footer";
import HeaderHomePage from "@/component/homepage/Header";

export default function Home() {
  return (
    <main>
      <div>
        <HeaderHomePage />
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
      </div>
    </main>
  );
}
