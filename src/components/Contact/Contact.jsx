import React from 'react';

function Contact(props) {
    return (
        <div className="contact" id="contact">
            <h1 className="section__heading">contact us</h1>
            <h3 className="section__title">we love conversations, let talk.</h3>
            <div className="row">
                <div className="contact__image">
                    <img src="img/contact-img.svg" alt="Contact Image"/>
                </div>
                <div className="form-container">
                    <form action="">
                        <input type="text" placeholder="full name"/>
                        <input type="email" placeholder="enter your email"/>
                        <input type="number" placeholder="phone"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                        <input type="submit" value="message"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;