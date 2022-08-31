import React from "react";
import "./hero.styles.scss"

const Hero = () => {
    return (
        <section className="hero is-fullheight hero-image">
          <div className="hero-body">
            <div className="container">
            <h1 className="hero-title">
             Luxuriate
            </h1>
            {/* <h2 class="hero-subtitle">The Queen Within</h2> */}
              <div className="shop-now-btn">
                  <button className="button is-black" id='shop-now'>
                      Shop Now
                  </button>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Hero;