import React from 'react';

import './Contact.css';




function Contact() {
    return (
        <section>
            <h1 >Contact me</h1>
            <form >
                <div>
                    <label >Name:</label>
                    <input />
                </div>
                <div>
                    <label >Email address:</label>
                    <input />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea />
                </div>
                <button >Submit</button>
            </form>

        </section>
    );
}

export default Contact;