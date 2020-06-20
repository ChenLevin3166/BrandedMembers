import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class ProductManagement extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nP: '',
            cP: '',
            imP: '',
            val: ''
        }
    }
    // The function update the value of product according to user choice 
    setTP = (e) => {
        if (e.target.value === "sb") {
            this.setState({ val: "1" });
        }
        if (e.target.value === "t") {
            this.setState({ val: "2" });
        }
        if (e.target.value === "bs") {
            this.setState({ val: "3" });
        }
        else {
            this.setState({ val: "4" });
        }
    }
    // The function send the data that system administrator entered to App component
    aPro = () => {
        if (this.state.nP === "" || this.state.cP === "" || this.state.imP === "") {
            alert('You are missing data');
        }
        else {
            this.props.addProd(this.state.nP, this.state.cP, this.state.imP, this.state.val);
        }
    }
    render() {
        return (
            <div >
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "30px" }}>Branded Members</h3></Link>
                <Link to='/members'> <h6 style={{ position: "relative", textAlign: "right", right: "40px", top: "-20px" }}>Go to the club members page</h6></Link>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "italic" }}>Product Management</h1>
                <h4 style={{ position: "relative", left: "-525px", top: "50px" }}>Add Product:</h4>
                <div id="dP" style={{ position: "relative", left: "-500px", top: "60px", left: "-40px" }}>
                    <select onChange={this.filterName} onChange={this.setTP} style={{ position: "relative", top: "10px", left: "-40px" }} >
                        <option value="" disabled selected>Select type product</option>
                        <option value="sb">Sleeping bags</option>
                        <option value="t">Tents</option>
                        <option value="bs">Bags and suitcases</option>
                        <option value="f">Flashlights</option>
                    </select>
                    <input placeholder="Name product" style={{ position: "relative", top: "10px", left: "5px" }} onChange={(e) => { this.setState({ nP: e.target.value }) }} />
                    <input placeholder="Cost" style={{ position: "relative", top: "10px", left: "35px" }} onChange={(e) => { this.setState({ cP: e.target.value }) }} />
                    <input type="url" placeholder="Copy image address" style={{ position: "relative", top: "10px", left: "55px" }} onChange={(e) => { this.setState({ imP: e.target.value }) }} />
                    <button style={{ position: "relative", top: "10px", left: "70px" }} onClick={this.aPro}>Add</button>
                </div>
                <table className="table-hover" style={{ borderCollapse: "collapse", borderStyle: "solid", position: "relative", marginLeft: "auto", marginRight: "auto", top: "100px" }}>
                    <tr>
                        <th>Delete Product</th>
                        <th>Name-Product</th>
                        <th>Image</th>
                        <th>Cost</th>
                    </tr>
                    {/* Shows products in website */}
                    {this.props.prod.map((item, ind) => {

                        return <tr>
                            <td><button style={{ width: "120pX", height: "70px", backgroundColor: "white" }} onClick={() => { this.props.delProd(ind) }}>X</button></td>
                            <td>{item.pName}</td>
                            <td> <img src={item.img} alt={item.pName} style={{ width: "70pX", height: "70px" }} /></td>
                            <td>{item.cost}$</td>
                        </tr>;
                    })}

                </table>


            </div>
        )
    }
}
