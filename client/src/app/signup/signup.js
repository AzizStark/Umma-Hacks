import React, { Component } from "react";
import lstyles from '../login/login.module.css';
import axios from "axios";


class Signup extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            logindata: {
                "user_name": "",
                "user_email": "",
                "user_password": "",
                "cpassword": ""
            }
        }
    }

    updateForm = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let data = this.state.logindata;
        data[nam] = val
        this.setState({ logindata: data });
    }

    signup = (event) => {
        event.preventDefault()
        if (this.state.logindata['user_password'] === this.state.logindata['cpassword']) {
            axios.post("/api/signup", {email: this.state.logindata['user_email']} ,
            {
                auth: {
                    username: this.state.logindata['user_name'],     
                    password: this.state.logindata['user_password']
                }
            })
            .then(res => {
                if (res.data) {
                        this.props.history.push('/');
                }
            })
            .catch(err => {
                if (err.response.status === 309 && err.response.data.email === this.state.logindata['user_email']) {
                    window.alert("Account already exists")
                }
                else if (err.response.status === 309) {
                    window.alert("Username taken, please try a different name.")
                }
            });
        }
        else {
            window.alert("Password doesn't match")
        }
    }

    render() {
        return (
            <section className={`hero is-fullheight ${lstyles.wavebg}`}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="box">
                                <h3 className="title">Umma - Sign Up</h3>
                                <form onSubmit={this.signup}>    
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-normal" style={{textTransform: 'lowercase'}} onChange={this.updateForm} name="user_name" type="text" placeholder="Username" required autoFocus=""/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-normal" onChange={this.updateForm} name="user_email" type="email" placeholder="Email" required autoFocus=""/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-normal" onChange={this.updateForm} name="user_password" type="password" required placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-normal" onChange={this.updateForm} name="cpassword" type="password" required placeholder="Confirm password"/>
                                        </div>
                                    </div>
                                    <button className="button is-block is-info is-normal is-fullwidth"> Create Account <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                                </form>
                            </div>
                            <p className="has-text-white">
                                <a href="/login" style={{ color: "white" }}>Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Signup;