import React from "react";
import logo from "./images/logo1.svg";
const home = () => {
  return (
    <>
      <div className="header">
        <h1 className="display-3">Car rentals.pk </h1>
        <p className="lead">
          Selling, buying and exchanging your car has never been this easy
        </p>
        <img src={logo} alt="" />
      </div>
      <hr className="my-4" />
      <hr className="my-4" />
      <h2> Why choose us? </h2>
      <p>
        We will buy your used car, assist you in buying a new one or help you
        exchange it
      </p>
      <p>Secure, instant and online payments</p>
      <p>We arrange all the paperwork</p>

      <div class="py-layout-24 md:py-layout-32 lg:py-layout-48 horizontalSection">
        <div class="horizontalSectionContainer">
          <div class="horizontalSectionWrapper">
            <div class="horizontalSectionContent">
              <h2
                class="text-left mb-4 w-full lg:w-1-2 sm:text-20px md:text-22px leading-tight font-bold font-unset text-charcoal font-unset"
                data-test="headline-text"
              >
                What does CarFirst offer?
              </h2>
              <div class="flex flex-row items-center flex-wrap w-full relative justify-center md:justify-start">
                <a
                  class="w-half lg:w-1-4 sm:w-half md:w-1-3 relative"
                  href="https://buy.carfirst.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div class="text-watercourse shadow-lg hover:bg-mystic px-4 py-6 md:px-3 cursor-pointer mr-2 lg:mr-6 text-center flex flex-col font-bold items-center justify-start flex-wrap box-border items-center rounded-lg mb-2">
                    <div>
                      <i class="icon-buy text-7xl text-watercourse"></i>
                    </div>
                    <span>Buy a car</span>
                    <span class="text-charcoal text-sm font-normal">
                      Browse through 1000+ verified cars
                    </span>
                  </div>
                </a>
                <a
                  class="w-half lg:w-1-4 sm:w-half md:w-1-3 relative"
                  href="/evaluation/1/"
                  rel="noopener noreferrer"
                >
                  <div class="text-watercourse shadow-lg hover:bg-mystic px-4 py-6 md:px-3 cursor-pointer mr-2 lg:mr-6 text-center flex flex-col font-bold items-center justify-start flex-wrap box-border items-center rounded-lg mb-2">
                    <div>
                      <i class="icon-sell text-7xl text-watercourse"></i>
                    </div>
                    <span>Sell your car</span>
                    <span class="text-charcoal text-sm font-normal">
                      Sell your car instantly and safely within an hour
                    </span>
                  </div>
                </a>
                <a
                  class="w-half lg:w-1-4 sm:w-half md:w-1-3 relative"
                  href="https://exchange.carfirst.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div class="text-watercourse shadow-lg hover:bg-mystic px-4 py-6 md:px-3 cursor-pointer mr-2 lg:mr-6 text-center flex flex-col font-bold items-center justify-start flex-wrap box-border items-center rounded-lg mb-2">
                    <div>
                      <i class="icon-exchange text-7xl text-watercourse"></i>
                    </div>
                    <span>Exchange your car</span>
                    <span class="text-charcoal text-sm font-normal">
                      Exchange for a new or used car
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="horizontalSectionContainerBg"></div>
      </div>
    </>
  );
};

export default home;
