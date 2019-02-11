import React, { Component } from 'react';
import HamBurgerNav from '../hamburger_nav/HamBurgerNav';

class Contact extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="container">
                <HamBurgerNav />
                <div>
                    <h1 className="main-header" style={{ marginTop: '250px'}} >Contact</h1>
                    <section style={{ marginTop: '20px' }} >
                        <p>Elevated Protection Limited</p>
                        <p>2 Rolland Rd., Toronto, ON Canada M4G 1V5</p>
                        <p>info@elevatedprotection.ca</p>
                    </section>
                </div>
            </div>
        )
    }
}

export default Contact;