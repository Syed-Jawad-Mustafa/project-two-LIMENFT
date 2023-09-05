import React from "react";
import "./hero.css";
import Image from "next/image";
import heroimage from "../../assets/Heroimg.svg";
import Shlyko from"../../assets/Shlyko.svg";
const Hero = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div className="row py-5  text-white ">
          <div className="col-md-6  text ">
            <h1 className="hero-font">
              Discover & <br /> Collect <br /> Unique <span className="nft-color">  NFTs</span>
            </h1>
            <p className="pera">
              Own digital assets, invest in the future, and <br />
              connect with other collectors. Explore to see <br />
              amazing NFTs from around the world.
            </p>
            <button class="explore-btn my-5 rounded">Explore</button>
            <div className="d-flex align-items-center my-3 ">
              <div >
              <h1 className="staticsNum">600k+ </h1> 
              <p className="statics">Total Sale</p>
              </div>
              <div className="ps-4 ">
              <h1 className="staticsNum">80k+</h1>
              <p className="statics">Auctions</p>
              </div>
             <div className="ps-4 ">
             <h1 className="staticsNum">300k+</h1>
              <p className="statics">Artists</p>
             </div>
            </div>

          </div>
          <div className="col-md-6 ">
            <div class="card border-color   mx-5">
              <div className=" mx-2 card-bg-color rounded-top-4">
              <Image
                src={heroimage}
                class="card-img-top  "
                alt="..."
              />
              </div>
              <div class="card-body  text-white">
                <h5 class="card-title">Lime Chibi Fighter</h5>
                <p class="card-text"> <Image
                src={Shlyko}
                class="me-3"
                width=""
                alt="..."
              />
                Shlyko
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
