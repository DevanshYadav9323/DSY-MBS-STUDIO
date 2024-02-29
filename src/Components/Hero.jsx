import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../CSS/Hero.css";

function Hero() {

    useEffect(() => {
        const scaleHeroVideo = (offset) => {
            const vid = document.querySelector(".content-hero-container");
            const initialWidth = vid.clientWidth;
            const initialHeight = vid.clientHeight;
            const finalWidth = Math.min(1250, window.innerWidth - 80);
            const finalHeight = document.querySelector(".content-hero").clientHeight + 200;
            const vidHeight = initialHeight - 0;

            const scrollPercent = Math.min(offset / vidHeight, 1);
            const currentWidth = Math.floor(
                scrollPercent * (finalWidth - initialWidth) + initialWidth
            );
            const currentHeight = Math.floor(
                scrollPercent * (finalHeight - initialHeight) + initialHeight
            );

            vid.style.width = currentWidth + "px";
            vid.style.height = currentHeight + "px";
        };

        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop || 0;
            scaleHeroVideo(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            once: true, // Only apply once
            offset: 50, // Offset to trigger the animation earlier
            duration: 800, // Animation duration
        });

        // Clean up AOS on component unmount
        return () => {
            AOS.refresh();
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <>
            <div className="section-hero" data-aos="fade-up">
                <div className="section-hero-sticky">
                    <div className="content-hero-container">
                        <video
                            className="content-hero-video"
                            autoPlay
                            preload="auto"
                            loop
                            muted
                            playsInline
                        >
                            <source src="trailer.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="content-hero">
                        <h1 className="content-hero-title" data-aos-delay="400" data-aos="fade-up">
                            Riders Republic
                        </h1>
                        <h2 className="content-hero-subtitle" data-aos-delay="500" data-aos="fade-up">
                            Releasing early 2025
                        </h2>
                        <a href="/purchase" className="content-hero-button" data-aos-delay="1200" data-aos="fade-up">
                            Preorder
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;




