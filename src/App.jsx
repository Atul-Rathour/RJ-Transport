import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsloading(false);
    };

    loadAssets();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIntroComplete(true), 3000);
    }
  }, [isLoading]);

  return (
    <>
      {!introComplete && <Intro isLoading={isLoading} />}

      {introComplete && (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}

      {/* <Intro/> */}
    </>
  );
};

export default App;
