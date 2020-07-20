import React, { Component } from "react";
import axios from "axios";


class Donate extends Component {

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

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column" style={{ backgroundColor: 'rgb(230, 213, 255)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                        <div className="box">
                            <h4>Find communities near you: </h4> <br />
                            <input className="input is-normal" type="number" placeholder="Enter postal code" /*This functn sets the input value into state variable --> */ />
                            <br /> <br />
                            <input className="button is-block is-info is-normal is-fullwidth" type="button" value="Find communities" /* Function is triggered here --> */ />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate;