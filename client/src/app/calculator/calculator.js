import React from 'react';

export default class Calculator extends React.Component {

    constructor(props) {
        super(props)
        //Global state variables
        this.state = {
            amount: '',
            zakat: ''
        }
    }

    //Function for calculating zakat
    calculateZakat = () => {
        let zakat;
        if (this.state.amount === '') {
            alert("Enter an amount")
            return;
        }
        zakat = (this.state.amount / 100) * 2.5
        this.setState({ zakat: zakat.toFixed(2) })
    }

    render() {
        return (

            <div>
                <div className="columns">
                    
                    <div className="column" style={{ backgroundColor: 'rgb(230, 213, 255)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <h5>Are you tired of Zakat guides being archaic and outdated? <br />
                        Are you worried you might not know how to fulfill this pillar of Islam? <br />
                        Fear not - you've come to the right place! 
                        </h5>
                        <div className="box">
                            <input className="input is-normal" type="number" placeholder="Enter amount" /*This functn sets the input value into state variable --> */ onChange={(e) => this.setState({ amount: e.target.value })} />
                            <br /> <br />
                            <input className="button is-block is-info is-normal is-fullwidth" type="button" value="Calculate Zakat" /* Function is triggered here --> */ onClick={() => this.calculateZakat()} />
                            {!this.state.zakat ? "" :
                                <div>
                                    <br />
                                    <h3> Calculated Zakat: {this.state.zakat} </h3>
                                    <br />
                                    <h4> Do you want to donate? </h4>
                                    <center><input onClick={() => this.props.history.push('/donate')} className="button is-block is-info is-small" type="button" value="Yes" /></center>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <p className="has-text-white">
                    <a href="/login" style={{ color: "white" }}>Login</a>
                </p>
            </div>
        );
    }
}
