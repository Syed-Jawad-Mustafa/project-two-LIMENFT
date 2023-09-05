import "./Trending.css";
import Image from "next/image";
import Dog from "../../assets/dog.svg";
import rabit from "../../assets/rabit.svg";
import bear from "../../assets/bear.svg";
import thousand from "../../assets/1000+.svg";
import Fox from "../../assets/MrFox.svg";
import mashroom from "../../assets/mashroom.svg";
import mashroomL from "../../assets/mashroom-left.svg";
import mashroomc from "../../assets/mashroom-center.svg";
import hundreds from "../../assets/540+.svg";
import shroomie from "../../assets/Shroomie.svg";
import robot from "../../assets/robot.svg";
import robotL from "../../assets/robot-left.svg";
import robotC from "../../assets/robot-center.svg";
import Max from "../../assets/1100+.svg";
import BeKind from "../../assets/BeKind-Robots.svg";


const Trending = () => {
  return (
    <div className="bg text-white py-5">
      <div className="container py-5  text">
        <div className="py-5"><h2><span className="text-gerrn">Trending </span>Collection</h2>
        <p className="second-h">Get in on the action and discover the latest trends in NFTs</p></div>
        <div className="row">
          <div className="col-md-4 ">
            <div>
              <Image src={Dog} className=" img-fluid" />
            </div>
            <div className="my-4">
              <Image src={rabit} className="img-fluid" />
              <Image src={bear} className="mx-3 img-fluid" />
              <Image src={thousand} className="img-fluid" />
            </div>
            <div>
              <h5>DSGN Animals</h5>
              <p>
                <Image src={Fox} className="me-2 img-fluid" /> MrFox
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <Image src={mashroom} className="img-fluid" />
            </div>
            <div className="my-4">
              <Image src={mashroomL} className="img-fluid" />
              <Image src={mashroomc} className="mx-3 img-fluid" />
              <Image src={hundreds} className="img-fluid" />
            </div>
            <div>
              <h5>Magic Mushrooms</h5>
              <p>
                <Image src={shroomie} className="me-2 img-fluid" />Shroomie
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <Image src={robot} className="img-fluid" />
            </div>
            <div className="my-4 ">
              <Image src={robotL} className="img-fluid" />
              <Image src={robotC} className="mx-3 img-fluid" />
              <Image src={Max} className=" img-fluid" />
            </div>
            <div>
              <h5>Disco Machines</h5>
              <p>
                <Image src={BeKind} className="me-2 img-fluid" /> BeKind2Robots
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
