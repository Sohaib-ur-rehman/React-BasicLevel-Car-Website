import React from "react";
import c11 from "./images/c11.webp";
import c21 from "./images/c21.webp";
import c31 from "./images/c31.webp";
import c41 from "./images/c41.webp";
import c51 from "./images/c51.webp";
import c61 from "./images/c61.jpg";
import c71 from "./images/c71.webp";
import c81 from "./images/c81.webp";
import c91 from "./images/c91.jpg";
import c101 from "./images/c101.jpg";
import c111 from "./images/c111.png";
import c121 from "./images/c121.jpg";
const cars = () => {
  return (
    <>
      <div className="row">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={c11} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={c21} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={c31} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={c41} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={c51} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-5">
            <img src={c11} alt="" />
            <div className="card-header">toyota Corolla</div>
            <div className="card-body">
              <h4 className="card-title">1100 cc</h4>
              <p className="card-text">
                This car is in bestest quality and is laways maintained
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c21} alt="" />
            <div className="card-header">Atlas</div>
            <div className="card-body">
              <h4 className="card-title">1800cc</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c31} alt="" />
            <div className="card-header">Honda Civic</div>
            <div className="card-body">
              <h4 className="card-title">2015 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c41} alt="" />
            <div className="card-header">Honda Civic</div>
            <div className="card-body">
              <h4 className="card-title">2011 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c51} alt="" />
            <div className="card-header">Honda Civic</div>
            <div className="card-body">
              <h4 className="card-title">2012 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c61} alt="" />
            <div className="card-header">toyota cicvic</div>
            <div className="card-body">
              <h4 className="card-title">2017 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c71} alt="" />
            <div className="card-header">prius</div>
            <div className="card-body">
              <h4 className="card-title">ui model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c81} alt="" />
            <div className="card-header">honda suzuki hybrid</div>
            <div className="card-body">
              <h4 className="card-title">2011 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c91} alt="" />
            <div className="card-header">toyota corolla</div>
            <div className="card-body">
              <h4 className="card-title">2005 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c101} alt="" />
            <div className="card-header">suzuki mehran</div>
            <div className="card-body">
              <h4 className="card-title">2013 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c111} alt="" />
            <div className="card-header">altas prado</div>
            <div className="card-body">
              <h4 className="card-title">2013 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-secondary mb-3">
            <img src={c121} alt="" />
            <div className="card-header">SUZUKI altas</div>
            <div className="card-body">
              <h4 className="card-title">2017 model</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cars;
