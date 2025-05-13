
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderSlide from "@/components/module/HeaderSlider";
import Services from "@/components/layout/Services";
import Slider from "@/components/module/Slider";
import Followme from "@/components/layout/Followme";
export default function Home() {
  return (
    <main >
      <Header/>
      <HeaderSlide/>
      <Services/>
      <Slider/>
      <Followme/>
      <Footer />
    </main>
  );
}
