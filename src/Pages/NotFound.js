import { Link } from "react-router-dom";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";

const NotFound = () => (
  <PageTransition>
    <PageHero eyebrow="404" title="This page took another path.">
      <Link to="/" className="btn btn-light cut mt-4">Back home</Link>
    </PageHero>
  </PageTransition>
);

export default NotFound;
