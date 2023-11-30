import React from "react";

import logo from "./images/logo1.svg";
const followus = () => {
  return (
    <div className="followus">
      <h2> Follow Us to get notified!! </h2>
      <img src={logo} alt="" />
      <p>
        We will buy your used car, assist you in buying a new one or help you
        exchange it
      </p>
      <p>Secure, instant and online payments</p>

      <p>We arrange all the paperwork</p>
      <h2>you can Reach us on following platforms: </h2>
      <a href="#" class="link-primary">
        facebook
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        twitter
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        Instagram
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        Whatsapp
      </a>
    </div>
  );
};

export default followus;
