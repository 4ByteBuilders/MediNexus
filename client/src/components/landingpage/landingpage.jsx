import First from "./first";
import Second from "./second";
import Third from "./Third";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="flex flex-col font-lato">
      <First />
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default LandingPage;
