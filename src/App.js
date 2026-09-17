import AppRoutes from "./routes/AppRoutes";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

const App = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main>
      <AppRoutes />
    </main>
    <Footer />
  </>
);

export default App;
