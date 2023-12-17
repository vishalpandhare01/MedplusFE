import HomeFooter from "../components/home/footer";
import HomeHeader from "../components/home/header";
import HomeMain from "../components/home/homemain";
import HomeNavbar from "../components/home/navbar";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <HomeNavbar />
      <HomeMain />
      <HomeFooter />
    </>
  );
}
