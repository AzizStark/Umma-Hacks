import React, { Component } from "react";
import axios from "axios";
import lstyles from './login.module.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logindata: {
                "user_email": "",
                "user_password": "",
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

    login = (event) => {
        event.preventDefault()
        axios.post("/api/login", {},
        {
            auth: {
                username: this.state.logindata['user_email'],
                password: this.state.logindata['user_password']
            }
        })
            .then(res => {
            console.log(res)
            if (res.data) {
                this.props.history.push('/dashboard');
            }
        })
        .catch(err => {
            if (err.response.status === 404) {
                window.alert("Account not found")
            }
            else if (err.response.status === 401) {
                window.alert("Incorrect password")
            }
        });
    }

    render() {
        return (
            <section className={`hero is-fullheight ${lstyles.wavebg}`}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="box">
                                
                                <h3 className="title"> Umma Login</h3>
                                {/* <figure className="avatar">
                                    <h1> Umma Site </h1>
                                </figure> */}
                                <br />
                                
                                <form onSubmit={this.login}>                 
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-normal" type="text" required onChange={this.updateForm} name="user_email" placeholder="Username or email" autoFocus=""/>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-normal" type="password" required onChange={this.updateForm} name="user_password" placeholder="Password"/>
                                        </div>
                                    </div>

                                    <button className="button is-block is-info is-normal is-fullwidth"> Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                                </form>
                            </div>   
                            <p className="has-text-white">
                                <a href="/signup" style={{ color: "white" }}>Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;