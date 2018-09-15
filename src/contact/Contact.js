import React, { Component } from 'react';
import HamBurgerNav from '../HamBurgerNav';



const homePageStyle = { 
    margin: '0',
    height: '100%',
    padding: '0', 
    width: '100%', 
    background: 'white',
    textAlign: 'center',
}
class Contact extends Component {
    render() {
        return (
            <div  style={ homePageStyle } >
                <div>
                <HamBurgerNav/>
                    <h1 className="main-header" >Contact</h1>
                    <section>
                        <p>
                            fsdf asf sdf
                            a sdf sdf as 
                        </p>

                    </section>
                </div>
            </div>
        )
    }
}

export default Contact;