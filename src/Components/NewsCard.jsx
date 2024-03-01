import React from 'react';
import "../CSS/NewsCard.css";

const NewsCard = () => {
    return (
        <>
            <h1 className='news-heading' data-aos="fade-up">News</h1>
            <div className="main">
                <ul className="cards" data-aos="fade-up">
                    <li className="cards_item" data-aos="flip-down" data-aos-delay="200">
                        <div className="card">
                            <div className="card_image"><img src="https://i.pinimg.com/originals/23/da/dd/23dadd0085bf19056c6cd96ca90079ce.jpg" alt="Card Image" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item" data-aos="flip-down" data-aos-delay="400">
                        <div className="card">
                            <div className="card_image"><img src="https://i.pinimg.com/originals/c3/91/a8/c391a8fd1db0e538735fda694bac31b5.jpg" alt="Card Image" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item" data-aos="flip-down" data-aos-delay="600">
                        <div className="card">
                            <div className="card_image"><img src="https://wallpapers.com/images/hd/hd-god-of-war-gaming-cover-w99ril6z0y6mz9s8.jpg" alt="Card Image" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item" data-aos="flip-down" data-aos-delay="800">
                        <div className="card">
                            <div className="card_image"><img src="https://i.pinimg.com/originals/23/da/dd/23dadd0085bf19056c6cd96ca90079ce.jpg" alt="Card Image" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item" data-aos="flip-down" data-aos-delay="1000">
                        <div className="card">
                            <div className="card_image"><img src="https://i.pinimg.com/originals/c3/91/a8/c391a8fd1db0e538735fda694bac31b5.jpg" alt="Card Image" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item" data-aos="flip-down" data-aos-delay="1200">
                        <div className="card">
                            <div className="card_image"><img src="https://wallpapers.com/images/hd/hd-god-of-war-gaming-cover-w99ril6z0y6mz9s8.jpg" alt="Card Image" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NewsCard;
