import React from "react";
import microsoft from './assets/Images/microsoft.jpeg';
import jiji from './assets/Images/jiji-logo.jpeg';
import DualPix from './assets/Images/Dualpix logo.jpeg';
import Garvin from "./assets/Images/Garvin's-logo.jpeg";
import Trident from "./assets/Images/Trident.jpeg";
import Emayian from './assets/Images/Emayian.jpeg';
function Featured(){
    return(
        <section>
            <h2 style={{ textAlign: "center"}}>Featured</h2>
            <div className="jobs-featured-container">
                <div className="jobs-featured">
                    <img src={microsoft} alt="microsoft logo"/>
                    <h4>Software Engineering Opportunity<br />Graduate role</h4>
                    <p>As a software engineer (SWE) at microsoft, you will work with other software engineers and 
                        program managers to solve problems and build innovative software solutions
                    </p>
                    <a href="read">Read More</a>
                </div>
                <div className ="jobs-featured">
                    <img src={jiji} alt="jiji logo"/>
                    <h4>Customer Sales Representatives at Jiji Kenya with 1 year experience</h4>
                    <p>You will be responsible for presenting, promoting, and sell jiji premium services to existing
                        and prospective customers.</p>
                    <a href="read">Read More</a>
                </div>
                <div className ="jobs-featured">
                    <img src={DualPix} alt="DualPix logo"/>
                    <h4>Home Fibre Sales Agents at DualPix communications Ltd</h4>
                    <p>We are urgently looking for young ladies and gentlemen who are agreesive hardworking and go-getters
                        with good communication skills.
                    </p>
                    <a href="read">Read More</a>
                </div>
                <div className="jobs-featured">
                    <img src={Garvin} alt="Garvin Royal Academy logo"/>
                    <h4>Pre-School Coordinator at Garvins Royal Academy <br/> With a tecahing experinece of 5 years and
                    above in pre-school classes</h4>
                    <p>Must be TSC registered and possess leadership skills</p>
                    <a href="read">Read More</a>
                </div>
            </div>
            <div className="container2-jobs-featured">
                <div class="jobs-featured">
                    <img src={Trident} alt="Trident Insurance Comapny Logo"/>
                    <h4>Actuarial Manager at Trident Insurance Company with 5 years experince</h4>
                    <p>Responsible for actuarial modelling and reporing in IFRS 17 financial standard, producr development; profit-testing.
                            solvency, regulatory reporing and compliance.
                    </p>
                    <a href="read">Read More</a>
                </div>
                <div class="jobs-featured">
                    <img src={Emayian} alt="Maasai Mara EMAYIAN LUXURY CAMP logo"/>
                    <h4>Housekeeping Manager</h4>
                    <p>We are seeking a detail-oriented , motivated Housekeeping Manager to join our hospitality team. As the head of the housekeeping department, train housekeeping associates, perform daily inspections
                            of rooms and public areas and ensure exceptional service to all customers.
                    </p>
                    <a href="read">Read More</a>
                </div>
            </div>
           
        </section>
    
    );
}

export default Featured;