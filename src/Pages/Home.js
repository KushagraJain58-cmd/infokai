import PageTransition from "../Components/common/PageTransition";
import Hero from "../Components/home/Hero";
import Services from "../Components/home/Services";
import WorkStack from "../Components/home/WorkStack";
import AskBizSpotlight from "../Components/home/AskBizSpotlight";
import CallToAction from "../Components/home/CallToAction";

const Home = () => (
  <PageTransition>
    <Hero />
    <Services />
    <AskBizSpotlight />
    <WorkStack />
    <CallToAction />
  </PageTransition>
);

export default Home;
