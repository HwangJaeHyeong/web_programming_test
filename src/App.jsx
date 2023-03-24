import React from "react";
import { Card } from "./Card";
import "./style.css";

export const App = () => {
  return <div> <header>
    <h5>Company name</h5>
    <nav>
      <a href="#">Features</a><a href="#">Enterprise</a><a href="#">Support</a
      ><a href="#">Pricing</a>
    </nav>
    <a href="#">Sign up</a>
  </header>
    <div className="main">
      <h1>Pricing</h1>
      <p>
        Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It's built with default Bootstrap
        components and utilities with little customization.
      </p>
    </div>
    <div className="container">
      <div className="card-deck">
        <Card title={'초보'} />
        <Card title={'중수'} />
        <Card title={'고수'} />
      </div>
      <footer>
        <div className="row">
          <div>
            <img
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small className="text-muted">© 2017-2018</small>
          </div>
          <div>
            <h5>Features</h5>
            <ul>
              <li><a href="#">Cool stuff</a></li>
              <li><a href="#">Random feature</a></li>
              <li><a href="#">Team feature</a></li>
              <li><a href="#">Stuff for developers</a></li>
              <li><a href="#">Another one</a></li>
              <li><a href="#">Last time</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Resource</a></li>
              <li><a href="#">Resource name</a></li>
              <li><a href="#">Another resource</a></li>
              <li><a href="#">Final resource</a></li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li><a href="#">Team</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
}