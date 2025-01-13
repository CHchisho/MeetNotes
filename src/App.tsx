import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PreFooterBanner from "./components/PreFooterBanner/PreFooterBanner";
import FAQ from "./components/FAQ/FAQ";
import Review from "./components/Review/Review";
import Styles from "./components/Styles/Styles";
import ShareExport from "./components/ShareExport/ShareExport";
import UseCases from "./components/UseCases/UseCases";
import WhyChoose from "./components/WhyChoose/WhyChoose";

function App() {
  return (
    <div className={"full_body"}>
      <Header />
      <div className={"content_wrapper"}>
        
        {/*<div className="animate-bounce text-center text-10 text-gray-300">*/}
        <div className={"bottom_arrow"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7L86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
        </div>
        <WhyChoose />
        <UseCases />
        <Styles />
        <ShareExport />
        
        {/*<Review />*/}
        <FAQ />
        <PreFooterBanner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
