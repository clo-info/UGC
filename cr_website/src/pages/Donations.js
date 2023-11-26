import react from "react";

import UNHCR from '../components/pictures/UNHCR.svg';
import EJF from '../components/pictures/EJF_logo.png';
import CR from '../components/pictures/CR_logo.png'

function Donations(){
    return(
        <div className="donationSuite">
            <h1 className="donationTitle">
                Places to <span style={{color: "rgb(88, 55, 235)"}}>Donate</span>
            </h1>
            <div className="donationsLinks">
                <div className="link">
                    <a href="https://www.climate-refugees.org/">
                        <img src={CR}></img>
                    </a>
                </div>
                <div className="link">
                    <a href="https://ejfoundation.org/what-we-do/climate">
                        <img src={EJF}></img>
                    </a>
                </div>
                <div className="link">
                    <a href="https://www.unhcr.org/us/what-we-do/how-we-work/environment-disasters-and-climate-change/climate-change-and-disaster">
                        <img src={UNHCR}></img>
                    </a>
                </div>
            </div>
        </div>
    )

}
export default Donations;