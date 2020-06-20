import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "Ariel" }}>Branded Members</h1>
                <Link to='/registration'> <button style={{ position: "relative", top: "-35px", right: "500px" }}>Registration</button></Link>
                <Link to='/login'><button style={{ position: "relative", top: "-35px", right: "490px" }}>Login</button> </Link>
                <div style={{ position: "relative", top: "60px", marginLeft: "auto", marginRight: "auto", borderStyle: "solid", height: "400px", width: "600px", backgroundColor: "white" }}>
                    <h5 style={{ textAlign: "left", position: "relative", top: "30px", left: "20px" }}>Benefits for "Branded Members":</h5>
                    {/* List of benefits */}
                    <ul style={{ textAlign: "left", position: "relative", top: "45px" }}>
                        <li style={{ position: "relative", top: "30px", fontWeight: "bold" }}>
                            In your birthday you will get 20% discount for all items in the website.
                   </li>
                        <li style={{ position: "relative", top: "40px", fontWeight: "bold" }}>
                            You will get 100$ while join our club.
                   </li>
                        <li style={{ position: "relative", top: "50px", fontWeight: "bold" }}>
                            in first year your "Branded Member" is free.*<br></br>
                        </li>
                        <li style={{ position: "relative", top: "60px", fontWeight: "bold" }}>
                            Special prices just for "Branded Members".
                   </li>
                        <li style={{ position: "relative", top: "70px", fontWeight: "bold" }}>
                            Every purchase entitles you in points, every point equal to 1$.
                   </li>
                        <li style={{ position: "relative", top: "80px", fontWeight: "bold" }}>
                            At june until august we will send you special discounts for vacations in some unique destinations.
                   </li>
                    </ul>
                    <p style={{ textAlign: "left", position: "relative", top: "150px", left: "20px", fontSize: "13px", fontWeight: "bold" }}>* after then the price will be 50$ per year </p>
                </div>
            </div>
        )
    }
}
