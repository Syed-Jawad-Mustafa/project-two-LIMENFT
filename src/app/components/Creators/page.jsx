import "./creators.css";
import Image from "next/image";
import Keepitreal from "../../assets/Keepitreal.svg";
import DigiLab from "../../assets/DigiLab.svg";
import GravityOne from "../../assets/GravityOne.svg";
import Juanie from "../../assets/Juanie.svg";
import BlueWhale from "../../assets/BlueWhale.svg";
import fox from "../../assets/mr fox.svg";
import Shroomie from "../../assets/ShroomieSecond.svg";
import robotica from "../../assets/robotica.svg";
import RustyRobot from "../../assets/RustyRobotsvg.svg";
import animakid from "../../assets/animakid.svg";
import Dotgu from "../../assets/Dotgu.svg";
import Ghiblier from "../../assets/Ghiblier.svg";
import RocketLaunch from "../../assets/RocketLaunch.svg";
const Creators = () => {
  const data = [
    {
      serielNumber: "1",
      imageUrl: Keepitreal,
      userName: "Keepitreal",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "2",
      imageUrl: DigiLab,
      userName: "DigiLab",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "3",
      imageUrl: GravityOne,
      userName: "GravityOne",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "4",
      imageUrl: Juanie,
      userName: "Juanie",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "5",
      imageUrl: BlueWhale,
      userName: "BlueWhale",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "6",
      imageUrl: fox,
      userName: "Mr Fox",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "7",
      imageUrl: Shroomie,
      userName: "Shroomie",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "8",
      imageUrl: robotica,
      userName: "Robotica",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "9",
      imageUrl: RustyRobot,
      userName: "RustyRobot",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "10",
      imageUrl: animakid,
      userName: "Animakid",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "11",
      imageUrl: Dotgu,
      userName: "Dotgu",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
    {
      serielNumber: "12",
      imageUrl: Ghiblier,
      userName: "Ghiblier",
      sales: "Total Sales:",
      price: "34.53 ETH",
    },
  ];
  return (
    <div className="bg pt-5">
      <div className="container pt-5 text">
        <div className=" py-5">
          <div className="row">
            {" "}
            <div className="text-white col-md-8 ">
              <div className="text-heading ">
                {" "}
                <h2>
                  <span className="text-gerrn">Top</span> creators
                </h2>
              </div>
              <p className="text-second-heading">
                See who's making waves in the NFT world{" "}
              </p>
            </div>

          <div className="col-md-4">
            <button class="float-end text-white rounded-4  rocket neon-button mt-5">
              {" "}
              <Image src={RocketLaunch} alt="" className="me-2" />
              View Rankings
            </button>
          </div>
          </div>
        </div>
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-md-3 cards-margin mt-4">
                <div className=" cards rounded-4">
                  <div className="para d-flex">
                    <p className="number py-2 px-3 mt-3 ms-4 rounded-circle">
                      {item.serielNumber}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image src={item.imageUrl} className="" />
                  </div>
                  <div className="text-center mt-3 text-white">
                    <h5>{item.userName}</h5>
                    <div className="d-flex justify-content-center">
                      <p className="me-2 total">{item.sales}</p>{" "}
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Creators;
