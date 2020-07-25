import React from 'react';
import axios from 'axios';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        //Global state variables
        this.state = {
            amount: '',
            zakat: '',
            user: '',
        }
    }

    componentDidMount() {
        axios.get('/api/isLogged')
        .then(res => {
            this.setState({ user: res.data.user})
          }).catch(err => {
            console.log(err)
          })
    }
    
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column" style={{ backgroundColor: 'rgb(230, 213, 255)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                        <div className="box">
                            <h2 className="title is-4">Community Dashboard: </h2>
                            <h4> ID: { this.state.user} </h4> <input className="input is-small" type="number" placeholder="Enter postal code" /*This functn sets the input value into state variable --> */ />
                            <h4> Name: </h4>
                            <h4> Address: </h4>
                            <h4> Zipcode: </h4>
                            <h4> Contact information: </h4>
                            <h4> Donation link: </h4>
                            <br />
                            <input className="input is-normal" type="number" placeholder="Enter postal code" /*This functn sets the input value into state variable --> */ />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
