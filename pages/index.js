import Image from "next/image";
import About from "../components/About";
import ActivitiesList from "../components/ActivitiesList";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Top Section */}
      <div className="h-screen">
        <Slider />
      </div>

      {/* About Us */}
      <About />

      {/* Packages */}
      <Packages />

      <Gallery />

      <h1 className="text-4xl text-center font-bold m-5">Activities</h1>
      <ActivitiesList />

      <Footer />

      <div className="fixed bottom-5 text-center right-2">
        <a href="tel:8686963434">
          <div className="bg-white rounded-full h-12 w-12  flex justify-center items-center">
            <Image src={"/call.png"} width={40} height={40} alt={"call"} />
          </div>
        </a>
        <br />
        <a href="https://wa.me/918686963434">
          <Image
            src={"/whatsapp.png"}
            width={60}
            height={60}
            alt={"whatsapp"}
          />
        </a>
      </div>
    </>
  );
}
