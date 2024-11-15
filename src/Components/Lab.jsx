import React, { useEffect } from 'react';
import './Lab.css'; // assuming you will place the CSS here, or use CSS modules
import Lenis from 'lenis'; // If using lenis for smooth scroll (make sure to install it)
import ScrollMagic from 'scrollmagic'

const Lab = () => {

  useEffect(() => {
    // Smooth Scroll
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {
      console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Preloader Text Animation
    window.addEventListener('load', function () {
      const preloader = document.getElementById('preloader');
      const firstText = document.getElementById('first-text');
      const secondText = document.getElementById('second-text');
      firstText.style.opacity = '1';
      setTimeout(function () {
        firstText.style.opacity = '0';
        secondText.style.opacity = '1';
      }, 1000);
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 4000);
    });

    // Loader Video Adjustments
    window.addEventListener('load', function () {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
      setTimeout(function () {
        const loaderVideo = document.getElementById('loaderVideo');
        loaderVideo.style.width = '90%';
        loaderVideo.style.height = '90%';
        loaderVideo.style.transform = 'translate(-50%, -50%)';
        loaderVideo.style.top = '50%';
        loaderVideo.style.left = '50%';
        loaderVideo.style.position = 'fixed';
        loaderVideo.style.borderRadius = '12px';
      }, 2000);

      setTimeout(() => {
        if (window.matchMedia('(max-width: 576px)').matches) {
          loaderVideo.style.width = '220px';
          loaderVideo.style.height = '220px';
          loaderVideo.style.top = '25%';
          loaderVideo.style.left = '24px';
          loaderVideo.style.right = 'auto';
          loaderVideo.style.transform = 'translate(0%, -25%)';
        } else if (window.matchMedia('(max-width: 767px)').matches) {
          loaderVideo.style.width = '220px';
          loaderVideo.style.height = '220px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '40px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 991px)').matches) {
          loaderVideo.style.width = '310px';
          loaderVideo.style.height = '310px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '40px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 1199px)').matches) {
          loaderVideo.style.width = '400px';
          loaderVideo.style.height = '400px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '60px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else if (window.matchMedia('(max-width: 1399px)').matches) {
          loaderVideo.style.width = '450px';
          loaderVideo.style.height = '450px';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '80px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
        } else {
          loaderVideo.style.width = '500px';
          loaderVideo.style.height = '500px';
          loaderVideo.style.top = '50%';
          loaderVideo.style.left = 'auto';
          loaderVideo.style.right = '100px';
          loaderVideo.style.transform = 'translate(0%, -50%)';
          loaderVideo.style.position = 'absolute';
        }
        document.body.classList.remove('overflow-hidden');
        document.documentElement.classList.remove('overflow-hidden');
      }, 3000);
    });

    // ScrollMagic - Section Pinning
    const controller = new ScrollMagic.Controller({ loglevel: 3 });
    new ScrollMagic.Scene({
      triggerElement: "#section2",
      triggerHook: "onEnter",
      duration: "100%"
    }).setPin("#section1 .pinWrapper", {
      pushFollowers: false
    }).addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#section2",
      triggerHook: "onEnter",
      duration: "200%"
    }).setPin("#section2 .pinWrapper", {
      pushFollowers: false
    }).addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#section3",
      triggerHook: "onEnter",
      duration: "200%"
    }).setPin("#section3 .pinWrapper", {
      pushFollowers: false
    }).addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#section4",
      triggerHook: "onEnter",
      duration: "100%"
    }).setPin("#section4 .pinWrapper", {
      pushFollowers: false
    }).addTo(controller);

  }, []);

  return (
    <div className="App">
      <section className="events-page">
        <div id="section1" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Living</h2>
              <p>Explore our range of stylish and comfortable living room furniture.</p>
            </div>
            <div className="image" id="loaderVideo">
              <video autoplay loop muted playsinline>
                <source src="https://www.yudiz.com/codepen/studio-r/bg-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div id="section2" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Kitchen</h2>
              <p>Check out our modern and functional kitchen furniture and accessories.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div id="section3" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Bedroom</h2>
              <p>Discover our collection of bedroom furniture to create your dream space.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        <div id="section4" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>Office</h2>
              <p>Find the perfect office furniture to make your workspace comfortable and productive.</p>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>

      <div id="preloader">
        <div className="text-wrapper">
          <h1 id="first-text">Studio R</h1>
          <h3 id="second-text">Creative Agency</h3>
        </div>
      </div>
    </div>
  );
}

export default Lab;
