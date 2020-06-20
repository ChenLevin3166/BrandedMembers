import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Buy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            street: '',
            hN: '',
            city: '',
            country: '',
            pN: '',
            pW: ''
        }
    }

    // The function make purchase if all details correct, and return to store
    pay = () => {
        if (this.state.street === "" || this.state.hN === "" || this.state.city === "" || this.state.country === "" || this.state.pN === "" || this.state.pN.length < 9 || this.state.pN.length > 10 || this.state.pW === "") {
            alert('Some of the details you entered are incorrect');
        }
        else {
            // Delete products from cart
            this.props.delFromcart();
            alert('Your buy successful');
            this.props.history.push('/store');
        }
    }
    render() {
        return (
            <div>
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "30px" }}>Branded Members</h3></Link>
                <Link to='/store'> <h5 style={{ position: "relative", textAlign: "right", right: "40px", top: "-20px" }}>Back to the store</h5></Link>
                <h1 style={{ position: "relative", top: "20px", color: "green", fontStyle: "italic" }}>Buy your products</h1>
                <input placeholder="Street" type="text" style={{ position: "relative", top: "60px" }} onChange={(e) => { this.setState({ street: e.target.value }) }} /><br></br>
                <input placeholder="House number" type="number" style={{ position: "relative", top: "70px" }} onChange={(e) => { this.setState({ hN: e.target.value }) }} /><br></br>
                <input placeholder="City" type="text" style={{ position: "relative", top: "80px" }} onChange={(e) => { this.setState({ city: e.target.value }) }} /><br></br>
                <input placeholder="Country" type="text" style={{ position: "relative", top: "90px" }} onChange={(e) => { this.setState({ country: e.target.value }) }} /><br></br>
                <input placeholder="Phone number" type="number" style={{ position: "relative", top: "100px" }} onChange={(e) => { this.setState({ pN: e.target.value }) }} /><br></br>
                <select style={{ position: "relative", top: "110px", width: "180px", left: "35px" }} onChange={(e) => { this.setState({ pW: e.target.value }) }}>
                    <option value="" disabled selected>Pay with</option>
                    <option value="b">Bit</option>
                    <option value="p">Pay</option>
                    <option value="pp">payPal</option>
                    <option value="pb">PayBox</option>
                    <option value="ppp">PepperPay</option>
                </select>
                <button className="rounded-circle" style={{
                    position: "relative", top: "170px", right: "100px", width: "70px", height: "40px", backgroundColor: "rgb(28,243,36)",
                    fontWeight: "bold"
                }} onClick={this.pay}>Pay</button>
            </div>
        )
    }
}

export default withRouter(Buy);