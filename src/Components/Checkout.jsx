import React from 'react';
import "../CSS/Checkout.css";

function Checkout() {
    return (
        <>
            <div className='checkout-wrapper' data-aos="fade-up" data-aos-delay="200">
                <div className="bg_img"></div>
                <div className="form_wrapper" data-aos="flip-down" data-aos-delay="400">
                    <div className="form_container">
                        <div className="title_container">
                            <h2>Preorder Now</h2>
                        </div>
                        <form>
                            <div className="row clearfix">
                                <div className="col_full">
                                    <label>Game Platform</label>
                                    <div className="input_field">
                                        <select name="platform" required>
                                            <option value="">Select Platform</option>
                                            <option value="ps4">PlayStation 4</option>
                                            <option value="xbox">Xbox One</option>
                                            <option value="pc">PC</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col_full">
                                    <label>Quantity</label>
                                    <div className="input_field">
                                        <input type="number" name="quantity" placeholder="Quantity" min="1" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col_full">
                                    <label>Payment Information</label>
                                    <div className="input_field">
                                        <input type="text" name="card_number" placeholder="Credit Card Number" required />
                                    </div>
                                </div>
                            </div>
                            <input className="button" type="submit" value="Checkout" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
