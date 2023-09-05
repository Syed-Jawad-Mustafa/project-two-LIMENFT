import Image from "next/image";
import "./Discover.css";
import Distant from "../../assets/Distant-Galaxy.svg";
import MoonDancer from "../../assets/MoonDancer.svg";
import LifeOnEdena from "../../assets/LifeOnEdena.svg";
import NebulaKid from "../../assets/NebulaKid.svg";
import AstroFiction from "../../assets/AstroFiction.svg";
import Spaceone from "../../assets/Spaceone.svg";
import Eye from "../../assets/Eye.svg";
const Discover = () => {
  const data = [
    {
      imgUrl: Distant,
      nameOfImage: "Distant Galaxy",
      profileUrl: MoonDancer,
      Name: "MoonDancer",
      price: "price",
      bid: "Highest Bid",
      Ethreum: "1.63 ETH",
      wEtherum: "0.33 wETH",
    },
    {
      imgUrl: LifeOnEdena,
      nameOfImage: "Life On Edena",
      profileUrl: NebulaKid,
      Name: "NebulaKid",
      price: "price",
      bid: "Highest Bid",
      Ethreum: "1.63 ETH",
      wEtherum: "0.33 wETH",
    },
    {
      imgUrl: AstroFiction,
      nameOfImage: "AstroFiction",
      profileUrl: Spaceone,
      Name: "Spaceone",
      price: "price",
      bid: "Highest Bid",
      Ethreum: "1.63 ETH",
      wEtherum: "0.33 wETH",
    },
  ];
  return (
    <div className="bg-color text-white py-5">
      <div className="container py-5 text">
      
          <div className="row mb-4">
            <div className="col-md-8">
              {" "}
              <h3>
                <span className="text-gerrn">Discover</span> New NFTs
              </h3>
              <p className="text-second-heading">
                Discover the latest NFT drops and stay ahead of the curve
              </p>
            </div>
            <div className="col-md-4">
              <button className="float-end mt-4 see-btn text-white rounded-4 mt-3 see-btn">
                <Image src={Eye} alt="" className="me-2" /> See All
              </button>
            </div>
          </div>
        
        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-md-4 pt-5">
                <div className="discover-bg-color rounded-5">
                  <div>
                    <Image
                      src={item.imgUrl}
                      alt=""
                      className="image-fluid"
                      width={356}
                    />
                  </div>
                  <div className="mt-4 ms-4">
                    <h5>{item.nameOfImage}</h5>
                  </div>
                  <div className="ms-4">
                    <Image src={item.profileUrl} alt="" className="me-2" />
                    <span>{item.Name}</span>
                  </div>
                  <div className="d-flex justify-content-between px-4 mt-3">
                    <div className=" ">
                      {" "}
                      <p className="price-text">{item.price}</p>
                    </div>
                    <div className=" ">
                      <p className="price-text">{item.bid}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between px-4">
                    <div className=" ">
                      {" "}
                      <p className="">{item.Ethreum}</p>
                    </div>
                    <div className=" ">
                      <p className="">{item.wEtherum}</p>
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
export default Discover;
