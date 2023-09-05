import "./feedback.css";
import Image from "next/image";
import astronot from "../../assets/astronot.svg";
import massage from "../../assets/massage.svg";
const Feedback = () => {
   
  return (
    <div className="bg-color py-5">
      {" "}
      <div className="container pb-5 text">
        <div className="row rounded-5 astro-bg-color px-5 py-5  text-white">
          <div className="col-md-6">
            <Image src={astronot} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 px-2">
            <h2><span className="text-gerrn ">Never</span>  miss a thing</h2>
            <p className="font-text">
              Join our community of NFT <br /> enthusiasts and get exclusive
              access <br /> to drops, promos, and updates.
            </p>
            <div>
            <input type="text"   placeholder="Enter your email here"  className="round-input"/>
            <button type="button" className="subs-btn " ><Image src={massage} alt=""/> Subscribe</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Feedback;
