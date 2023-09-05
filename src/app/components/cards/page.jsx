import Hero from "../Hero-section/page";
import "./cards.css";
import Image from "next/image";
import first from "../../assets/SetupYourwallet.svg";
import second from "../../assets/Collection.svg";
import thard from "../../assets/earning.svg";
const Cards = () => {
  const data = [
    {
      imageUrl: first,
      Setups: "Setup Your wallet",
      discription: "Set up your wallet of choice. ",
      discripitinTwo: " Connect it to the Market by ",
      discripitinThree: "clicking the wallet icon."
    },
    {
      imageUrl: second,
      Setups: "Create Collection",
      discription: "Upload your work and setup your  ",
      discripitinTwo: " collection. Add a description,  ",
      discripitinThree: "social links, and floor price."
    },
    {
      imageUrl: thard ,
      Setups: "Setup Your wallet",
      discription: "Choose between auctions and ",
      discripitinTwo: "fixed-price listings. Start earning  ",
      discripitinThree: "by selling your NFTs or trading."
    }
  ]
  return (
    <div className="bg-color pt-5 ">
      <div className="container text-white pt-5 text">
        <div className=" "><h2 className=" "><span className="text-gerrn">How</span> it works</h2></div>
        <p className="second-h">Don’t worry, here’s the beginner's guide to the NFT world</p>
        <div className="row  text-center ">
        {data.map((item) =>{
                return(
                  <div className="col-md-4 py-5">
            <div class="card-bg py-5 rounded-5">
              
              <Image src={item.imageUrl} className="img-fluid" />
              <div class="">
                <h5>{item.Setups}</h5>
                <p class="">
                 {item.discription} <br /> {item.discripitinTwo} <br /> {item.discripitinThree}
                </p>
              </div>
            </div>
          </div>
                )

              })}
          
        
        </div>
      </div>
    </div>
  );
};
export default Cards;
