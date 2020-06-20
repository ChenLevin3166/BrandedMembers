import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            em: '',
            pas: '',
            tUser: '',
            tPage: '',
            aflag: [0, 0, 0],
            pL: '/login'
        }
    }

    // The function checks email address
    validM = (e) => {
        if (e.target.value === "") {
            document.getElementById("pm").style.visibility = "visible";
            this.state.aflag[0] = 0;
            this.setState({ aflag: [...this.state.aflag] });
        }
        else {
            document.getElementById("pm").style.visibility = "hidden";
            this.setState({ em: e.target.value });
            this.state.aflag[0] = 1;
            this.setState({ aflag: [...this.state.aflag] });
            let mail = e.target.value;
            if (!this.validateEmail(mail)) {
                document.getElementById("pm").innerHTML = "Your email address incorrect. Please try again.";
                document.getElementById("pm").style.visibility = "visible";
            }
        }
    }

    // The function checks email address is correct
    validateEmail = (eM) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(eM).toLowerCase());
    }

    // The function checks password
    validP = (e) => {
        if (e.target.value === "") {
            document.getElementById("pp").style.visibility = "visible";
            this.state.aflag[1] = 0;
            this.setState({ aflag: [...this.state.aflag] });
        }
        else {
            document.getElementById("pp").style.visibility = "hidden";
            this.setState({ pas: e.target.value });
            // Check the password contain at least 6 characters
            if (e.target.value.length < 6) {
                document.getElementById("pp").innerHTML = "The password must contain between 6-8 characters, numbers and letters.";
                document.getElementById("pp").style.visibility = "visible";
                this.state.aflag[1] = 0;
                this.setState({ aflag: [...this.state.aflag] });
            }
            else {
                // Check the password contain numbers
                if (e.target.value.match("^[0-9]+$")) {
                    document.getElementById("pp").innerHTML = "The password must contain at least 1 letter ";
                    document.getElementById("pp").style.visibility = "visible";
                    this.state.aflag[1] = 0;
                    this.setState({ aflag: [...this.state.aflag] });
                }
                // Check the password contain letters
                else if (e.target.value.match("^[A-Za-z]+$")) {
                    document.getElementById("pp").innerHTML = "The password must contain at least 1 number ";
                    document.getElementById("pp").style.visibility = "visible";
                    this.state.aflag[1] = 0;
                    this.setState({ aflag: [...this.state.aflag] });
                }
                else {
                    document.getElementById("pp").style.visibility = "hidden";
                    this.setState({ pas: e.target.value });
                    this.state.aflag[1] = 1;
                    this.setState({ aflag: [...this.state.aflag] });
                }
            }
        }
    }

    // The function checks type of user that connecting 
    validTU = (e) => {
        if (e.target.value === "") {
            document.getElementById("ps").style.visibility = "visible";
            this.state.aflag[2] = 0;
            this.setState({ aflag: [...this.state.aflag] });
        }
        else {
            document.getElementById("ps").style.visibility = "hidden";
            // If type user is system administrator, show him the options for pages he can access
            if (e.target.value === "SA") {
                document.getElementById("tp").style.visibility = "visible";
            }
            else {
                document.getElementById("tp").style.visibility = "hidden";
                document.getElementById("ppa").style.visibility = "hidden";
                if (this.state.aflag.length === 4) {
                    this.state.aflag.pop(0);
                }
            }
            this.setState({ tUser: e.target.value });
            this.state.aflag[2] = 1;
            this.setState({ aflag: [...this.state.aflag] });
        }
    }

    // The function checks type of page that system administrator chose
    validPag = (e) => {
        if (e.target.value === "") {
            document.getElementById("ppa").style.visibility = "visible";
            this.state.aflag.push(0);
            this.setState({ aflag: [...this.state.aflag] });
        }
        else {
            document.getElementById("ppa").style.visibility = "hidden";
            this.setState({ tPage: e.target.value });
            this.state.aflag.push(0);
            this.setState({ aflag: [...this.state.aflag] });
        }
    }

    // The function send the data that user entered to App component
    login = () => {
        if (this.state.em === "" && this.state.pas === "" && this.state.tUser === "") {
            alert('You need enter your details to register ');
            document.getElementById("pm").style.visibility = "visible";
            document.getElementById("pp").style.visibility = "visible";
            document.getElementById("ps").style.visibility = "visible";
        }
        else {
            let temp = 0;
            for (let i = 0; i < this.state.aflag.length; i++) {
                if (this.state.aflag[i] === 0) {
                    temp = 1;
                    alert('Some of the details you entered are incorrect');
                }
                break;
            }
            if (temp === 0) {
                if (this.state.tUser === "BM") {
                    for (let i = 0; i < this.props.memA.length; i++) {
                        if (this.props.memA[i].emailM === this.state.em) {
                            if (this.props.memA[i].passwordM === this.state.pas) {
                                this.props.history.push('/store');
                            }
                            else {
                                document.getElementById("pp").innerHTML = "The password incorrect";
                                document.getElementById("pp").style.visibility = "visible";
                                break;
                            }
                        }
                        else {
                            document.getElementById("pm").innerHTML = "The email address does not exist in the system";
                            document.getElementById("pm").style.visibility = "visible";
                            break;
                        }
                    }
                }
                else {
                    for (let i = 0; i < this.props.admA.length; i++) {
                        if (this.props.admA[i].mail === this.state.em) {
                            if (this.props.admA[i].pasA === this.state.pas) {
                                if (this.state.tPage === "PrM") {
                                    this.props.history.push('/productManagement');
                                }
                                else {
                                    this.props.history.push('/members');
                                }

                            }
                            else {
                                document.getElementById("pp").innerHTML = "The password incorrect";
                                document.getElementById("pp").style.visibility = "visible";
                                break;
                            }
                        }
                        else {
                            document.getElementById("pm").innerHTML = "The email address does not exist in the system";
                            document.getElementById("pm").style.visibility = "visible";
                            break;
                        }
                    }

                }
            }
        }

    }
    render() {
        return (
            <div>
                <Link to='/'> <h3 style={{ position: "relative", left: "-500px", top: "20px" }}>Branded Members</h3></Link>
                <h1 style={{ position: "relative", top: "40px", color: "green", fontStyle: "italic" }}>Login</h1>
                <div style={{ position: "relative", top: "90px" }}>
                    <input placeholder="Email" type="mail" onBlur={this.validM} onChange={this.validM} /> <br></br>
                    <p id="pm" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter your email address.</p> <br></br>
                    <input placeholder="Password" type="password" maxLength="8" onBlur={this.validP} onChange={this.validP} /> <br></br>
                    <p id="pp" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please enter a password.</p> <br></br>
                    <select id="tu" onBlur={this.validTU} onChange={this.validTU}>
                        <option value="" disabled selected>Select your type user</option>
                        <option value="BM">Branded Member</option>
                        <option value="SA">System Administrator</option>
                    </select> <br></br>
                    <p id="ps" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please select your type user.</p> <br></br>
                    <select id="tp" style={{ visibility: "hidden" }} onBlur={this.validPag} onChange={this.validPag}>
                        <option value="" disabled selected>Select the page you want to access</option>
                        <option value="PrM">Product Management</option>
                        <option value="M">Members</option>
                    </select> <br></br>
                    <p id="ppa" style={{ visibility: "hidden", color: "red", fontWeight: "bold" }}>Please select the page you want access to him.</p> <br></br>
                    <button onClick={this.login} style={{ position: "relative", top: "20px" }}>Login</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);