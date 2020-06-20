import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Members extends Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: this.props.aMem
        }
    }

    // The function sort according to age
    sortAge = (e) => {
        if (e.target.value === "StoB") {
            // From small to big
            this.props.aMem.sort(function (a, b) { return a.ageM - b.ageM });
            this.setState({ arr: [...this.props.aMem] });
        }
        else {
            // From big to small
            this.props.aMem.sort(function (a, b) { return b.ageM - a.ageM });
            this.setState({ arr: [...this.props.aMem] });
        }
    }

    // The function filter according to age
    filterAge = (e) => {
        let filArr = [];
        // From 20-30 years old
        if (e.target.value === "23A") {
            filArr = this.props.aMem.filter((item) =>
                item.ageM >= 20 && item.ageM <= 30);
            this.setState({ arr: filArr });


        }
        // Over 40 years old
        else if (e.target.value === "40A") {
            filArr = this.props.aMem.filter((item) =>
                item.ageM >= 40);
            this.setState({ arr: filArr });

        }
        // Over 50 years old
        else if (e.target.value === "50A") {
            filArr = this.props.aMem.filter((item) =>
                item.ageM >= 50);
            this.setState({ arr: filArr });
        }
        else {
            this.setState({ arr: [...this.props.aMem] });
        }
    }

    render() {
        return (
            <div>
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "30px" }}>Branded Members</h3></Link>
                <Link to='/productManagement'> <h6 style={{ position: "relative", textAlign: "right", right: "40px", top: "-20px" }}>Go to the product management  page</h6></Link>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "italic" }}>Club members</h1>
                <div className="container" style={{ position: "relative", top: "70px" }}>
                    <select onChange={this.sortAge}>
                        <option value="" disabled selected>Sort by</option>
                        <option value="BtoS">From the big to the small</option>
                        <option value="StoB">From the small to the big</option>
                    </select>
                    <select onChange={this.filterAge} style={{ position: "relative", left: "10px" }}>
                        <option value="" disabled selected>Filter by</option>
                        <option value="23A">20-30 years old</option>
                        <option value="40A">Over 40 years old</option>
                        <option value="50A">Over 50 years old</option>
                        <option value="No">No filter</option>
                    </select>

                    <table className="table-hover" style={{ borderCollapse: "collapse", borderStyle: "solid", position: "relative", marginLeft: "auto", marginRight: "auto", top: "80px" }}>
                        <tr>
                            <th>Delete Member</th>
                            <th>ID</th>
                            <th>First-Name</th>
                            <th>Last-Name</th>
                            <th>Date-Of-Birth</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                        {/* Shows Branded Members */}
                        {this.state.arr.map((item, ind) => {

                            return <tr>
                                <td><button style={{ width: "100%", backgroundColor: "white" }} onClick={() => { this.props.delete(ind) }}>X</button></td>
                                <td>{item.idPM}</td>
                                <td>{item.fNameM}</td>
                                <td>{item.lNameM}</td>
                                <td>{item.birthM}</td>
                                <td>{item.ageM}</td>
                                <td>{item.emailM}</td>
                            </tr>;
                        })}

                    </table>
                </div>
            </div>
        )
    }
}
