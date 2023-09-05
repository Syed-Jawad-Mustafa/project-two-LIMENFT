import Image from "next/image";
import metal from "../../assets/metalabstractsculpture.svg";
import "./SignUp.css";
import NavBar from "@/app/components/Navbar/NavBar";
import Footer from "@/app/components/Footer/Footer";
const  SignUp = () => {
return(
   
    
   <>
    <div className="bg-color"> 
        <NavBar />
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Image src={metal} alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <div className="text-white">
                        <h2><span className="text-gerrn">Create</span> account</h2>
                    </div>
                    <p className="text-white pera">Welcome! Enter your details and start <br /> creating, collecting and selling NFTs.</p>
                    <div className="values">
                <input type="text" class="  controls"  placeholder="Username" required />
                <input type="email" class="controls" placeholder="Email Address"  required />
                <input type="Password" class="controls" placeholder="Password"  required/>
                <input type="Password" class="controls" placeholder="Confirm Password"  required/>
                <button className="button-login">
                Create account
                </button>
                </div>
                </div>
                
            </div>
        </div>
        
    </div>
    <Footer />
    </>
)
}
export default SignUp;