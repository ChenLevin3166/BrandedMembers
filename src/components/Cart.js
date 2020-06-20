import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // The function checks if have products in cart, it's send to buy channel 
    buy = () => {
        if (this.props.cartA.length === 0) {
            alert('No products selected');
        }
        else {
            this.props.history.push('/buy');
        }
    }

    render() {
        return (
            <div>
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "30px" }}>Branded Members</h3></Link>
                <Link to='/store'> <h5 style={{ position: "relative", textAlign: "right", right: "40px", top: "-20px" }}>Back to the store</h5></Link>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "italic" }}>Shopping Cart</h1>
                <button className="rounded-circle" style={{
                    position: "relative", top: "-7px", left: "-500px", width: "70px", height: "40px", backgroundColor: "rgb(28,243,36)",
                    fontWeight: "bold"
                }} onClick={this.buy}>Buy</button>
                <p style={{ fontWeight: "bold", fontSize: "20px", position: "relative", top: "-7px", right: "500px" }}>
                    Total payment:{this.props.sum}$</p>
                <div className="row" style={{ position: "relative", top: "80px" }}>
                    {/* Shows the products the user wants to buy */}
                    {this.props.cartA.map((item, ind) => {
                        return <div className="col-3" >
                            <img src={item.img} alt={item.pName} style={{ width: "140px", height: "140px" }} /> <br></br>

                            <div style={{ fontWeight: "bold" }}>  <button style={{ backgroundColor: "white" }} onClick={() => { this.props.delFcart(ind) }}>X</button> {item.pName}, {item.cost}$</div><br></br>
                            <br></br>
                        </div>
                    })}
                </div>


            </div>
        )
    }
}


export default withRouter(Cart);