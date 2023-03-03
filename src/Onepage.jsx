import React from "react";
import logo from "./Image/logo.jpeg";
import gen1 from "./Image/generator.png";
import gen2 from "./Image/gen.png";
import { AiOutlineBulb } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";
// import { TbMoneybag } from "react-icons/tb";

// import { AiOutlineBulb } from "react-icons";

import { AiFillBulb } from "react-icons/ai";
import footerLogo from "./Image/PowerRent.png";
import "./page.css";

const Onepage = () => {
  return (
    <div>
      <header className="header">
        <section className="header-desc">
          {" "}
          <div>welcome to</div>
          <div className="header-image">
            {" "}
            <img className="header-image" src={logo} alt="" />
          </div>
          <i>Your partner in Power Solutions </i>
        </section>
        <div className="header-right">
          {" "}
          <img src={gen2} alt="" />
        </div>
      </header>
      <section className="second-section">
        <h4>
          Swatini PowerRent<sup>R</sup> is a provider of generator rentals,
          offering a range of solutions to meet the diverse power needs of
          businesses, events and communities. Our extensive inventory of top
          quality generators, combined with our expertise in generator power
          solutions, makes us the go-to choice for reliable and cost-effective
          power solutions.
        </h4>
      </section>

      <section className="main">
        <article className="generator">
          <div className="gen-box">
            <img src={gen1} alt="" />
          </div>
          <div className="gen-box">
            <img src={gen2} alt="" />
          </div>
        </article>

        <article className="main-right">
          <span className="heading">
            Why Rent with Swatini PowerRent<sup>R</sup>?
          </span>
          <ul>
            <li className="services">
              <AiOutlineBulb className="icon" />
              <span>
                <b>Reliable and efficient power supply:</b> With our
                comprenhensive selection of generators, we can provide you with
                the right equipment for your specific needs, ensuring a reliable
                and efficient power supply.
              </span>
            </li>
            <li className="services">
              <AiFillBulb className="icon" />
              <span>
                <b>Cost-effective:</b> Renting a generator from Swatini
                PowerRent<sup>R</sup> eliminates the high upfront cost of
                purchasing a generator and the ongoiong expenses of maintenance
                and storage.
              </span>
            </li>
            <li className="services">
              <IoKeyOutline className="icon" />
              <span>
                <b>Convenient access to generator:</b> Our team will deliver and
                set up your generator on-site, saving you time and hassle. We
                also offer flexible rental options to ensure you have access to
                power when you need it.
              </span>
            </li>
            <span className="services">
              <IoKeyOutline className="icon" />
              <p>
                <b>Expert support:</b> Our team of experienced technicians will
                provide you with the support you need to ensure your generator
                runs smoothly, whether you need assistance with installation,
                operation, or maintenance
              </p>
            </span>
          </ul>
        </article>
      </section>

      <section className="footer-section">
        <div className="left-">
          <h2> Generator Rentals for Every Need</h2>
          <p>
            Swatini PowerRent<sup>R</sup> offers a wide range range of generator
            rentals to meet the diverse power needs of our customers,including:
          </p>

          <li className="services">
            <AiOutlineBulb />
            <span>
              <b>Backup Power:</b>Ensure your business continues to operate
              during power outages with our backup generator rentals.
            </span>
          </li>
          <li className="services">
            <AiOutlineBulb />
            <span>
              <b>Events:</b> Provide power for your next event with our
              generator rentals, whether you need to ppower a small outdoor
              gathering or a large indoor event.
            </span>
          </li>
        </div>
        <div className="footer-img">
          <img src={footerLogo} alt="" />
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default Onepage;
