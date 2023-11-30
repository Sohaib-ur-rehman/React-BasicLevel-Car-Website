import React from "react";
import logo from "./images/logo1.svg";
const aboutus = () => {
  return (
    <div className="aboutus">
      <h2> Why choose us? </h2>
      <img src={logo} alt="" />
      <p>
        We will buy your used car, assist you in buying a new one or help you
        exchange it
      </p>
      <p>Secure, instant and online payments</p>

      <p>We arrange all the paperwork</p>
      <h2>Support.... </h2>
      <p>Login and Member Registration problems</p>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        I haven't received my account confirmation email and password.
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        I have a new email address and I forgot my password.
      </a>

      <p>Used Car Ads Issues</p>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        How do I post an ad for my car?{" "}
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        I got an email saying my used car ad was rejected. Why?{" "}
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        I don’t want to sell my car anymore. How do I close my ad?{" "}
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        Will my email be displayed when I’m selling a car?{" "}
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        How do I know these ads are genuine?{" "}
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        How do I search through expired ads?{" "}
      </a>
      <hr className="my-4" />
      <a href="#" class="link-primary">
        I got an email saying my used car ad was rejected. Why?{" "}
      </a>
    </div>
  );
};

export default aboutus;
