
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            birth: '',
            idP: '',
            email: '',
            password: '',
            flag: [0, 0, 0, 0, 0, 0]
        }
    }

    // The function checks first name
    validFN = (e) => {
        if (e.target.value === "") {
            document.getElementById("p1").style.visibility = "visible";
            this.state.flag[0] = 0;
            this.setState({ flag: [...this.state.flag] });
        }
        else {
            document.getElementById("p1").style.visibility = "hidden";
            this.setState({ fName: e.target.value });
            this.state.flag[0] = 1;
            this.setState({ flag: [...this.state.flag] });
        }

    }

    // The function checks last name
    validLN = (e) => {
        if (e.target.value === "") {
            document.getElementById("p2").style.visibility = "visible";
            this.state.flag[1] = 0;
            this.setState({ flag: [...this.state.flag] });
        }
        else {
            document.getElementById("p2").style.visibility = "hidden";
            this.setState({ lName: e.target.value });
            this.state.flag[1] = 1;
            this.setState({ flag: [...this.state.flag] });
        }

    }

    // The function checks date of birth after user left the input
    validDY = (e) => {
        if (e.target.value === "") {
            document.getElementById("p3").style.visibility = "visible";
            this.state.flag[2] = 0;
            this.setState({ flag: [...this.state.flag] });
        }
        else {
            document.getElementById("p3").style.visibility = "hidden";
            this.setState({ birth: e.target.value });
            this.state.flag[2] = 1;
            this.setState({ flag: [...this.state.flag] });
            // Check if age is over 18 years old 
            let dB = new Date(e.target.value);
            let yB = dB.getFullYear();
            if (2020 - yB < 18) {
                document.getElementById("p3").innerHTML = "Registration for club members is over 18 years of age";
                document.getElementById("p3").style.visibility = "visible";
            }
        }
    }

    // The function checks id contain only 9 digits
    validId = (e) => {
        if (e.target.value === "") {
            document.getElementById("p4").style.visibility = "visible";
            this.state.flag[3] = 0;
            this.setState({ flag: [...this.state.flag] });
        }
        else {
            document.getElementById("p4").style.visibility = "hidden";
            this.setState({ idP: e.target.value });
            this.state.flag[3] = 1;
            this.setState({ flag: [...this.state.flag] });
            if (e.target.value.length < 9 || e.target.value.length > 9) {
                document.getElementById("p4").innerHTML = "ID must contain only 9 digits";
                document.getElementById("p4").style.visibility = "visible";
            }
        }
    }

    // The function checks email address
    validM = (e) => {
        if (e.target.value === "") {
            document.getElementById("p5").style.visibility = "visible";
            this.state.flag[4] = 0;
            this.setState({ flag: [...this.state.flag] });
        }
        else {
            document.getElementById("p5").style.visibility = "hidden";
            this.setState({ email: e.target.value });
            this.state.flag[4] = 1;
            this.setState({ flag: [...this.state.flag] });
            let em = e.target.value;
            if (!this.validateEmail(em)) {
                document.getElementById("p5").innerHTML = "Your email address incorrect. Please try again.";
                document.getElementById("p5").style.visibility = "visible";
            }
        }
    }

    // The function checks email address is correct
    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // The function checks password
    validP = (e) => {
        if (e.target.value === "") {
            document.getElementById("p6").style.visibility = "visible";
            this.state.flag[5] = 0;
            this.setState({ flag: [...this.state.flag] });
        }
        else {
            document.getElementById("p6").style.visibility = "hidden";
            // Check the password contain at least 6 characters
            if (e.target.value.length < 6) {
                document.getElementById("p6").innerHTML = "The password must contain between 6-8 characters, numbers and letters.";
                document.getElementById("p6").style.visibility = "visible";
                this.state.flag[5] = 0;
                this.setState({ flag: [...this.state.flag] });
            }
            else {
                // Check the password contain numbers
                if (e.target.value.match("^[0-9]+$")) {
                    document.getElementById("p6").innerHTML = "The password must contain at least 1 letter ";
                    document.getElementById("p6").style.visibility = "visible";
                    this.state.flag[5] = 0;
                    this.setState({ flag: [...this.state.flag] });
                }
                // Check the password contain letters
                else if (e.target.value.match("^[A-Za-z]+$")) {
                    document.getElementById("p6").innerHTML = "The password must contain at least 1 number ";
                    document.getElementById("p6").style.visibility = "visible";
                    this.state.flag[5] = 0;
                    this.setState({ flag: [...this.state.flag] });
                }
                else {
                    document.getElementById("p6").style.visibility = "hidden";
                    this.setState({ password: e.target.value });
                    this.state.flag[5] = 1;
                    this.setState({ flag: [...this.state.flag] });
                }
            }
        }
    }

    // The function send the data that user entered to App component
    regist = () => {
        if (this.state.fName === "" && this.state.lName === "" && this.state.birth === "" && this.state.idP === "" && this.state.email === "" && this.state.password === "") {
            alert('You need enter your details to register ');
            document.getElementById("p1").style.visibility = "visible";
            document.getElementById("p2").style.visibility = "visible";
            document.getElementById("p3").style.visibility = "visible";
            document.getElementById("p4").style.visibility = "visible";
            document.getElementById("p5").style.visibility = "visible";
            document.getElementById("p6").style.visibility = "visible";
        }
        else {
            let temp = 0;
            for (let i = 0; i < this.state.flag.length; i++) {
                if (this.state.flag[i] === 0) {
                    temp = 1;
                    alert('Some of the details you entered are incorrect');
                    break;
                }

            }
            if (temp === 0) {
                this.props.addM(this.state.fName, this.state.lName, this.state.birth, this.state.idP, this.state.email, this.state.password);
                this.props.history.push('/store');
            }
        }
    }


    render() {
        return (
            <div >
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "20px" }}>Branded Members</h3></Link>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "italic" }}>Create account</h1>
                <div style={{ position: "relative", top: "90px" }}>
                    <input placeholder="First name" type="text" onBlur={this.validFN} onChange={this.validFN} /> <br></br>
                    <p id="p1" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter your first name.</p> <br></br>
                    <input placeholder="Last name" type="text" onBlur={this.validLN} onChange={this.validLN} /> <br></br>
                    <p id="p2" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter your last name.</p> <br></br>
                    <input id="inD" placeholder="Date of birth" type="date" onBlur={this.validDY} onChange={this.validDY} /> <br></br>
                    <p id="p3" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter your date of birth.</p> <br></br>
                    <input type="number" placeholder="ID" onBlur={this.validId} onChange={this.validId} /> <br></br>
                    <p id="p4" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter your ID</p> <br></br>
                    <input placeholder="Email" type="mail" onBlur={this.validM} onChange={this.validM} /> <br></br>
                    <p id="p5" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter your email address.</p> <br></br>
                    <input placeholder="Password" type="password" maxLength="8" onBlur={this.validP} onChange={this.validP} /> <br></br>
                    <p id="p6" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter a password.</p> <br></br>
                    <button onClick={this.regist}>Register</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Registration);