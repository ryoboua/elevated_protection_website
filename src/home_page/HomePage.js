import React, { Component } from 'react';
import Nav from './Nav'
import logo from './logo.jpg'

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
                    <img src={logo} alt="Elevated Protection" style={{height: '450px', width: '346px', marginTop: '50px'}} />
                    <Nav navOpacity={this.state.navOpacity} />
                </div>
            </div>
        )
    }
}
export default HomePage;