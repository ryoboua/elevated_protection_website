import React, { Component } from 'react';
import Nav from './Nav'
import logo from './logo.jpg'
import logoMobile from './logoMobile.jpg'

import './homepage.css'

class HomePage extends Component {
    state = {
        navOpacity: 0,
        textOpacity: 0,
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ navOpacity: 0.75 })
        }, 1500)
    }

    render() {
        return (
            <div className="container_homepage">
                    <img 
                      className="logo"
                      src={logo}
                      alt="Elevated Protection" 
                      srcSet={`${logoMobile} 318w, ${logo} 612w`}
                      sizes="(max-width: 750px) 320px, (min-width: 768px) 346px"
                      onMouseEnter={() => this.setState({textOpacity: 0.75})}
                      onMouseLeave={() => this.setState({textOpacity: 0})}
                    />
                <Nav navOpacity={this.state.navOpacity} />
                <br />
                <p className="slogan" style={{ opacity: this.state.textOpacity }}>
                    ELEVATE YOUR PROTECTION
                </p>
            </div>
        )
    }
}
export default HomePage;