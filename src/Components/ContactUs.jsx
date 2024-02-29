import React from 'react';
import '../CSS/ContactUs.css';

const ContactUs = () => {

    return (
        <>
            <section className="contact-section" data-aos="fade-up">
                <div className="contact-section-header">
                    <div className="contact-container">
                        <h2>Contact Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact-row">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-home"></i>
                                </div>

                                <div className="contact-info-content" data-aos="fade-right" data-aos-delay="200">
                                    <h4>Address</h4>
                                    <p>10, Anson Road, #22-02,<br />International Plaza, Singapore<br />55060</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>

                                <div className="contact-info-content" data-aos="fade-right" data-aos-delay="200">
                                    <h4>Phone</h4>
                                    <p>98xxxxxx10</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <div className="contact-info-content" data-aos="fade-right" data-aos-delay="200">
                                    <h4>Email</h4>
                                    <p>info@mbsstudios.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form" data-aos="flip-down" data-aos-delay="400">
                            <form action="" id="contact-form">
                                <h2>Send Message</h2>
                                <div className="contact-input-box">
                                    <input type="text" required name="contactFullName" />
                                    <span>Full Name</span>
                                </div>

                                <div className="contact-input-box">
                                    <input type="email" required name="contactEmail" />
                                    <span>Email</span>
                                </div>

                                <div className="contact-input-box">
                                    <textarea required name="contactMessage"></textarea>
                                    <span>Type your Message...</span>
                                </div>

                                <div className="contact-input-box">
                                    <input type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
