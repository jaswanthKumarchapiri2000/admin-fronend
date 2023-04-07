import React, { Component } from 'react';
import "./login.css";


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupStyle: "hide"
        };
        this.popup = this.popup.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    popup() {
        this.setState({ popupStyle: "login-popup" });
        setTimeout(() => this.setState({ popupStyle: "hide" }), 3000)
    }

    onSuccess(e) {
        alert("User signed in")
        console.log(e)
    }

    onFailure(e) {
        alert("User sign in Failed")
        console.log(e)
    }

    render() {
        return (
            <div className='page'>
                <div className='cover'>
                    <h1>Login</h1>
                    <input type="text" placeholder='username'/>
                    <input type="password" placeholder='password'/>
                    <div className='login-btn'>Login</div>
                    <div className={this.state.popupStyle}>
                        <h3>Login Failed</h3>
                        <p>Username or password incorrect</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default login;