import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Preloader from "./components/layout/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This replaces $(window).on('load')
    const handleLoad = () => {
      // Small delay to mimic your jQuery .delay(100)
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Clean up the event listener
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Home />
      </div>
    </>
  );
}

export default App;