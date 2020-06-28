import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home.js';
import Registration from './components/Registration.js';
import Store from './components/Store.js';
import Login from './components/Login.js';
import ProductManagement from './components/ProductManagement.js';
import Members from './components/Members.js';
import Cart from './components/Cart.js';
import Buy from './components/Buy.js';
import bag1 from './components/images/bag1.jpg'; import bag2 from './components/images/bag2.jpg';
import bag3 from './components/images/bag3.jpg'; import bag4 from './components/images/bag4.jpg';
import fLight1 from './components/images/fLight1.jpg'; import fLight2 from './components/images/fLight2.jpg';
import fLight3 from './components/images/fLight3.jpg'; import fLight4 from './components/images/fLight4.jpg';
import SleepBag1 from './components/images/SleepBag1.jpg'; import SleepBag2 from './components/images/SleepBag2.jpg';
import SleepBag3 from './components/images/SleepBag3.jpg'; import SleepBag4 from './components/images/SleepBag4.jpg';
import tent1 from './components/images/tent1.jpg'; import tent2 from './components/images/tent2.jpg';
import tent3 from './components/images/tent3.jpg'; import tent4 from './components/images/tent4.jpg';


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      members: [{ fNameM: "Daniella", lNameM: "Nisim", birthM: "1992-08-17", ageM: "28", idPM: "207453210", emailM: "dani@gmail.com", passwordM: "dn123456" }, { fNameM: "Ron", lNameM: "Perez", birthM: "1980-02-01", ageM: "40", idPM: "214579231", emailM: "rper@gmail.com", passwordM: "12345rpr" }],
      administrator: [{ fname: "Eden", lname: "Levin", mail: "eden@branded.co.il", pasA: "ed313473" }, { fname: "Chen", lname: "Levin", mail: "chen@branded.co.il", pasA: "12364ecl" }, { fname: "Oriel", lname: "Cohen", mail: "ori@branded.co.il", pasA: "or234ch1" }],
      products: [{ value: "1", pName: "Blue mummy", cost: "50", img: SleepBag1 }, { value: "2", pName: "Camping tent", cost: "100", img: tent1 }, { value: "3", pName: "Travel bag", cost: "85", img: bag1 }, { value: "4", pName: "Head flashlight", cost: "40", img: fLight1 },
      { value: "1", pName: "Simple sleeping bag", cost: "30", img: SleepBag2 }, { value: "2", pName: "Family tent", cost: "135", img: tent2 }, { value: "3", pName: "Suitcase", cost: "90", img: bag2 }, { value: "4", pName: "Head flashlight", cost: "45", img: fLight2 },
      { value: "1", pName: "Red sleeping bag", cost: "55", img: SleepBag3 }, { value: "2", pName: "Luxury tent", cost: "200", img: tent3 }, { value: "3", pName: "Backpack", cost: "70", img: bag3 }, { value: "4", pName: "Simple hand flashlight", cost: "15", img: fLight3 },
      { value: "1", pName: "Fancy sleeping bag", cost: "70", img: SleepBag4 }, { value: "2", pName: "Couple tent", cost: "150", img: tent4 }, { value: "3", pName: "Trio of luggage", cost: "220", img: bag4 }, { value: "4", pName: "Strong hand flashlight", cost: "30", img: fLight4 }],
      cart: [],
      sumP: 0
    }
  }

  // The function add member to members array
  addMembers = (fN, lN, b, idM, eM, p) => {
    let dB = new Date(idM);
    let yB = dB.getFullYear();
    let m = { fNameM: fN, lNameM: lN, birthM: b, ageM: yB, idPM: idM, emailM: eM, passwordM: p };
    this.setState({ members: [m, ...this.state.members] });
  }

  // The function add products to products array
  aProd = (np, cp, im, v) => {
    let tempP = { value: v, pName: np, cost: cp, img: im };
    this.setState({ products: [...this.state.products, tempP] });
  }

  // The function delete products from products array
  dProd = (i) => {
    let tempProd = this.state.products.filter((element, index) =>
      (index !== i))
    this.setState({ products: [...tempProd] });
  }

  // The function delete member from members array
  del = (i) => {
    let tempMem = this.state.members.filter((element, index) =>
      (index !== i))
    this.setState({ members: [...tempMem] });
  }

  // The function enter product to cart array
  enterCart = (p) => {
    if (this.state.cart.length === 0) {
      this.setState({ sumP: parseInt(p.cost) });
    }
    else {
      this.setState({ sumP: this.state.sumP + parseInt(p.cost) });
    }

    this.setState({ cart: [...this.state.cart, p] });

  }

  // The function delete product from cart array
  delC = (i) => {
    let tempCart = this.state.cart.filter((element, index) =>
      (index !== i))
    this.setState({ cart: [...tempCart] });
    this.setState({ sumP: this.state.sumP - parseInt(this.state.cart[i].cost) });
  }

  render() {
    return (
      <div className="App" >

        <Router>

          <Switch>
            <Route exact path='/' component={() => { return <Home /> }} />
            <Route exact path='/registration' component={() => { return <Registration addM={this.addMembers} back={this.state.backImg} /> }} />
            <Route exact path='/login' component={() => { return <Login memA={this.state.members} admA={this.state.administrator} /> }} />
            <Route exact path='/store' component={() => { return <Store pro={this.state.products} addCart={this.enterCart} /> }} />
            <Route exact path='/productManagement' component={() => { return <ProductManagement prod={this.state.products} addProd={this.aProd} delProd={this.dProd} /> }} />
            <Route exact path='/members' component={() => { return <Members aMem={this.state.members} delete={this.del} /> }} />
            <Route exact path='/cart' component={() => { return <Cart cartA={this.state.cart} delFcart={this.delC} sum={this.state.sumP} /> }} />
            <Route exact path='/buy' component={() => { return <Buy delFromcart={() => { this.setState({ cart: [] });this.setState({sumP:0}) }} /> }} />
          </Switch>
        </Router>

      </div>
    )
  }
}
