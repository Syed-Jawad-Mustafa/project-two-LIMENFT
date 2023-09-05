import "./Categories.css";
import Image from "next/image";
import Art from "../../assets/Art.svg";
import Collectibles from "../../assets/Collectibles.svg";
import Music from "../../assets/Music.svg";
import Photography from "../../assets/Photography.svg";
import Video from "../../assets/Video.svg";
import Utility from "../../assets/Utility.svg";
import Sport from "../../assets/Sport.svg";
import VirtualWorlds from "../../assets/VirtualWorlds.svg";
const Categories = () => {
  const data = [
    {
      imageUrl: Art,
      Name: "Art",

  },
  {
    imageUrl: Collectibles,
    Name: "Collectibles",

},
{
  imageUrl: Music,
  Name: "Music",

},
{
  imageUrl: Photography,
  Name: "Photography",

},{
  imageUrl: Video,
  Name: "Video",

},{
  imageUrl: Utility,
  Name: "Utility",

},{
  imageUrl: Sport,
  Name: "Sport",

},{
  imageUrl: VirtualWorlds,
  Name: "Virtual Worlds",

}
];
  return (
    <div className="bg-color py-5">
      <div className="container py-5 text">
        <div className="text-white pt-5" >
          {" "}
          <h2>
            <span className="text-gerrn">Browse</span> Categories
          </h2>
          <p className="text-second-heading">Explore the most popular NFT categories</p>
        </div>
        <div className="row  text-white">
        
         
            {data.map((item)=>{
              return(
                <div className="col-md-3 mt-5 ">
                <div class="card card-bg-color">
              <Image src={item.imageUrl} class="card-img-top" alt="..." />
              <div class="card-body card-body-css ">
                <p class="card-text ms-3">{item.Name}</p>
              </div>
            </div>
            </div>
              )
              
            }
            )}
            

    
       
      </div>
    </div>
    </div>
  );
};
export default Categories;
