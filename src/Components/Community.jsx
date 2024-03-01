import React from 'react';
import "../CSS/Community.css";

function Community() {
    return (
        <section className="new-join-community" data-aos="fade-up">
            <div className="new-container">
                <div className="new-content">
                    <h2  data-aos="fade-right" data-aos-delay="200">Join Our Community</h2>
                    <button  data-aos="fade-left" data-aos-delay="400">Join Now</button>
                </div>
                <div className="new-image-container">
                    <img
                        src="https://media.contentapi.ea.com/content/dam/eacom/skate/images/2022/06/skate-hero-medium-discord-7x2.png.adapt.crop7x2.1920w.png"
                        alt="Community Image"
                        className="new-community-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Community;
