import logoImg from "../../assets/limenft-logo.svg";
import profile from "../../assets/User.svg";
import React from "react";
import "./footer.css";
import Image from "next/image";
import Youtube from "../../assets/Youtube.svg";
import Facebook from "../../assets/Facebook.svg";
import Twetter from "../../assets/Twetter.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <div className="  bg">
      <div className="container-fluid">
      <div className=" row text-white">
        <div className="col-md-4">
         <div className="ms-5">
         <Image src={logoImg} className="image-fluid" />
         </div>
        </div>
       <div className="col-md-5 ">
        <ul className=" list gap-3">
          <li>Marketplace</li>   
          <li>Explore</li>   
          <li>Rankings</li>   
          <li>Support</li>   
        </ul>
        {/* <div className="row text-center">
            <div className="col-md-3">Marketplace</div>
        <div className="col-md-2 text-center">Explore</div>
        <div className="col-md-3 text-center">Rankings</div>
        <div className="col-md-2 text-center">Support</div>
        <div class="col-md-2 text-center"> FAQ</div>
            
        </div> */}
       </div>
        <div className="col-md-3 ">
            <div className="d-flex justify-content-center "> 

          <Image src={Youtube}  className="mx-3 mt-1"/>
          <Image src={Facebook} className="me-3" />
          <Image src={Twetter} className="me-3 mt-1" />
          <Image src={instagram} className="me-3" />
          <Image src={linkedin} className="me-3" />
        </div>
        </div>
      </div>
      </div>
       </div>
  );
};
export default Footer;
