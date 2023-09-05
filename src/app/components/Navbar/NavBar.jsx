import logoImg from "../../assets/limenft-logo.svg";
import profile from"../../assets/User.svg";
import React from "react";
import "./navbar.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
   
<div className=" bg">
<div className="container-fluid">
        <div >
          <nav class=" navbar mx-3 navbar-expand-lg">
            <a class="navbar-brand" href="#">
              <Image src={logoImg} />
            </a>
            <button
              class="navbar-toggler nav-bg text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class=" header-margin navbar-nav me-auto mb-2 mb-lg-0 ">
                <li>
                  <a href="">Marketplace</a>
                </li>
                <li>
                  <a href="#About">Explore </a>
                </li>
                <li>
                  <a href="#Skills">Rankings</a>
                </li>
                <li>
                  <a href="#Contact">Support</a>
                </li>
              </ul>
              <div class="icons">
                <button class=" signup-btn    rounded">  <Image src={profile} /><Link href="/Pages/loginPages"  className="decoration"> Sign Up </Link></button>
              </div>
            </div>
          </nav>
        </div>
      </div>
</div>

  );
};
export default NavBar;
