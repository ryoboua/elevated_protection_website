import React, { Component } from 'react';
import Nav from './Nav'
import logo from './logo.jpg'
import logoMobile from './logoMobile.jpg'

const homePageStyle = { 
    margin: '0',
    height: '100%',
    padding: '0', 
    width: '100%', 
    background: 'black',
    textAlign: 'center',
}
class HomePage extends Component {
    state = {
        navOpacity: 0,
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ navOpacity: 0.75 })
        }, 1500)
    }

    render() {
        return (
            <div  style={ homePageStyle } >
                <div>
                    <img 
                      src={logo}
                      alt="Elevated Protection" 
                      style={{marginTop: '50px'}}
                      srcSet={`${logoMobile} 318w, ${logo} 612w`}
                      sizes="(max-width: 750px) 320px, (min-width: 768px) 346px"
                    />
                    <Nav navOpacity={this.state.navOpacity} />
                </div>
            </div>
        )
    }
}
export default HomePage;