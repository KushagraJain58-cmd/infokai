import PageTransition from "../Components/common/PageTransition";
import Hero from "../Components/home/Hero";
import AskBizSpotlight from "../Components/home/AskBizSpotlight";
import ProductStack from "../Components/home/ProductStack";
import Stats from "../Components/home/Stats";
import Testimonials from "../Components/home/Testimonials";
import CallToAction from "../Components/home/CallToAction";

const Home = () => (
  <PageTransition>
    <Hero />
    <AskBizSpotlight />
    <ProductStack />
    <Stats />
    <Testimonials />
    <CallToAction />
  </PageTransition>
);

export default Home;
