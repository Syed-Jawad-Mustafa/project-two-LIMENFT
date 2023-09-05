import "./Mushrooms.css";
import Image from "next/image";
import mushroonimg from "../../assets/Magic Mushrooms.svg";
import Eye from "../../assets/Eye.svg";

const Mushrooms = () => {
  return (
    <div className="position-relative text-white">
      <div>
        <Image src={mushroonimg} className="img-fluid image-bg " />
      </div>
      <div className="container first-position">
        <div>
          <h1 className="text-gerrn heading">Magic Mushrooms</h1>
          <button className="neon-button text-white rounded-4">
            <Image src={Eye} alt="" className="me-1 " /> See NFT
          </button>
        </div>
      </div>
      <div className="set-position p-3 time-bg-color rounded-4 ">
          <span className="size">Auction ends in:</span>
          <h1>59 : 06 : 13</h1>
          <span className="pe-3 ps-2 size">hours</span>
          <span className="px-3 size">Minutes</span>
          <span className="size">Seconds</span>
      </div>
    </div>
  );
};
export default Mushrooms;
