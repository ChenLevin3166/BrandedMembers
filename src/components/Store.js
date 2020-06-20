import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import iconCart from './images/iconCart.jpg'

export default class Store extends Component {
    constructor(props) {
        super(props)

        this.state = {
            arrC: this.props.pro,
        }
    }

    // The function sort according to cost
    sortCost = (e) => {
        if (e.target.value === "cost") {
            // From small to big
            this.props.pro.sort(function (a, b) { return a.cost - b.cost });
            this.setState({ arrC: [...this.props.pro] });
        }
    }

    // The function filter according to name of product
    filterName = (e) => {
        let filArr = [];
        // SleepBags
        if (e.target.value === "sb") {
            filArr = this.props.pro.filter((item) =>
                item.value == 1);
            this.setState({ arrC: filArr });
        }
        // Tents
        else if (e.target.value === "t") {
            filArr = this.props.pro.filter((item) =>
                item.value == 2);
            this.setState({ arrC: filArr });

        }
        // Bags and suitcases
        else if (e.target.value === "bs") {
            filArr = this.props.pro.filter((item) =>
                item.value == 3);
            this.setState({ arrC: filArr });
        }
        // Flashlights
        else if (e.target.value === "f") {
            filArr = this.props.pro.filter((item) =>
                item.value == 4);
            this.setState({ arrC: filArr });
        }
        else {
            this.setState({ arrC: [...this.props.pro] });
        }
    }

    render() {
        return (
            <div >
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "20px" }}>Branded Members</h3></Link>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "italic" }}>Store</h1>
                <div className="container" style={{ position: "relative", top: "80px" }}>
                    <Link to='/cart'> <img src={iconCart} alt="cart" style={{ width: "40px", height: "40px", position: "relative", right: "80px" }}></img></Link>
                    <select onChange={this.sortCost}>
                        <option value="" disabled selected>Sort by</option>
                        <option value="cost">Cost</option>
                    </select>
                    <select onChange={this.filterName} style={{ position: "relative", left: "10px" }}>
                        <option value="" disabled selected>Filter by</option>
                        <option value="No">No filter</option>
                        <optgroup label="Name of product">
                            <option value="sb">Sleeping bags</option>
                            <option value="t">Tents</option>
                            <option value="bs">Bags and suitcases</option>
                            <option value="f">Flashlights</option>
                        </optgroup>
                    </select>
                    <div className="row" style={{ position: "relative", top: "60px" }}>
                        {/* Shows the products in store */}
                        {this.state.arrC.map((item) => {
                            return <div className="col-4" >
                                <img src={item.img} alt={item.pName} style={{ width: "140px", height: "140px" }} /> <br></br>
                                <div style={{ fontWeight: "bold" }}>{item.pName}, {item.cost}$</div><br></br>
                                <button onClick={() => { this.props.addCart(item) }} >Add to cart</button><br ></br><br></br>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
