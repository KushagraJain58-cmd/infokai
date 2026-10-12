import { Link } from "react-router-dom";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";

const NotFound = () => (
  <PageTransition>
    <PageHero eyebrow="404" title="Page not found.">
      <span className="block">The page you are looking for has moved or no longer exists.</span>
      <Link to="/" className="btn btn-light cut mt-8">Back home</Link>
    </PageHero>
  </PageTransition>
);

export default NotFound;
