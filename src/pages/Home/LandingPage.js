import React from 'react'
import './LandingPage.css'
import ellipseImage1 from '../../asset/Ellipse 2.png'
import ellipseImage2 from '../../asset/Vector 11.png'
import ellipseImage3 from '../../asset/Ellipse 3.png'
import ellipseImage4 from '../../asset/Ellipse 4.png'
import ellipseImage5 from '../../asset/Line 11.png'
import heroImage from '../../asset/Hero Image.png'
import artImage from '../../asset/image 6.png'
import machineImage from '../../asset/image 9.png'
import machineImage2 from '../../asset/image 7.png'
import cloudImage2 from '../../asset/image 11.png'
import footerellipseImage1 from '../../asset/Ellipse 2.png'
import footerellipseImage2 from '../../asset/Vector 11.png'
import footerellipseImage3 from '../../asset/Ellipse 3.png'
import footerellipseImage4 from '../../asset/Ellipse 4.png'
import footerellipseImage5 from '../../asset/Line 11.png'
import locationImage from '../../asset/Vector.png'
import mailImage from '../../asset/Vector 1.png'
import phoneImage from '../../asset/Vector 2.png'
import linkImage from '../../asset/Vector 3.png'
import faceImage from '../../asset/Vector 4.png'
import twitImage from '../../asset/Vector 5.png'
import HomeMobile from './HomeMobile'


function LandingPage() {
    return (
        <div>
            <div class="parentDiv uk-visible@s uk-visible@m ">
               
                {/* ******* LANDING PAGE **********  */}
               
                <div class='landingPage uk-width-medium uk-align-center' >
                    <nav class="navbarClass uk-navbar" uk-navbar="true">
                        <div class="uk-navbar-left">
                            <ul class="uk-navbar-nav" >
                                <li><img src={ellipseImage1} alt="" class="ellipseImageOne"/></li>
                                <li><img src={ellipseImage2} alt="" class="ellipseImageTwo"/></li>
                                <li><img src={ellipseImage3} alt="" class="ellipseImageThree"/></li>
                                <li><img src={ellipseImage4} alt="" class="ellipseImageFour"/></li>
                                <li><img src={ellipseImage5} alt="" class="ellipseImageFive"/></li>
                            </ul>

                        </div>
                        <div class="uk-navbar-center">
                            <ul class="uk-navbar-nav" >
                                <li><a href="#" class="Exploreclass uk-active" style={{color:'black'}}>Explore</a></li>
                                <li><a href="#" class="Exploreclass uk-active" style={{color:'black'}}>Create</a></li>
                                <li><a href="#" class="Exploreclass uk-active" style={{color:'black'}}>Connect</a></li>
                            </ul>
                        </div>
                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav" >
                                <li><a href="#" class="Exploreclass uk-active" style={{color:'black'}}>Help</a></li>
                               
                            </ul>
                        </div>
                    </nav>
                    
                    <h3 class="mainheadingClass">Lets Stay Connected</h3>
                    <p class="landpageparaClass">At lorem ipsum we help connect <br/> people with each other without<br/> any worries</p>
                    <img src={heroImage} alt="" class="heroImageClass"/>

                    <button class="learnmoreButton uk-button uk-button-default">Learn More</button>
                    <button class="connectButton uk-button uk-button-primary">Connect</button>
                    
                </div>


        {/* ******** FORM PAGE ********** */}
        <div class="formMaindiv uk-align-center">
            <div class='formPage uk-width-medium uk-align-center' >
                <h3 class="formTitle">Fill out the form</h3>
                <form>
                    <div class="uk-margin">
                        <label class="nameLabelClass">Name of the applicant</label>
                        <input class="NameClass uk-input uk-width-expand" type="text" placeholder="Enter Name" disabled/>

                        <label class="occupationLabelClass">Occupation</label>
                        <input class="occupationClass uk-input uk-width-expand" type="text" placeholder="Enter Occupation" disabled/>

                        <label class="addressLabelClass">Address</label>
                        <input class="addressClass uk-input uk-width-expand" type="text" placeholder="Enter Address" disabled/>

                        <button class="submitButton">Submit</button>
                    </div>
                </form>
            </div>
        </div>


        {/* ******DOMAIN EXPERTICE PAGE*********** */}

        <div class="domainMainDiv uk-align-center">
            <p class="yellowlineClass"></p>
            <h3 class="domainMainTitle">Domain Expertise</h3>
            <div class="uk-column-1-2">
                
                 <img src={artImage} alt="" class="artImageClass"/>
                 <h3 class="artTitleClass">Artificial Intelligence</h3>
                 <p class="artparaClass">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Sed turpis condimentum consectetur placerat lobortis <br/>
                     nibh sed consequat. Nunc pharetra cras vitae consequat<br/>
                     facilisis phasellus. Habitant egestas id tellus sed urna<br/>
                     ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.
                </p>
                <button class="artButton">read more</button>

                <img src={machineImage} alt="" class="machineImageClass"/>
                <h3 class="machineTitleClass">Machine Learning</h3>
                <p class="machineparaClass">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Sed turpis condimentum consectetur placerat lobortis <br/>
                     nibh sed consequat. Nunc pharetra cras vitae consequat<br/>
                     facilisis phasellus. Habitant egestas id tellus sed urna<br/>
                     ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.
                </p>
                <button class="machineButton">read more</button>

                <img src={machineImage2} alt="" class="machineImageClass2"/>
                <h5 class="machineTitleClass2">Machine Learning</h5>
                <p class="machineparaClass2">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Sed turpis condimentum consectetur placerat lobortis <br/>
                     nibh sed consequat. Nunc pharetra cras vitae consequat<br/>
                     facilisis phasellus. Habitant egestas id tellus sed urna<br/>
                     ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.
                </p>
                <button class="machineButton2">read more</button>

                <img src={cloudImage2} alt="" class="cloudImageClass2"/>
                <h5 class="cloudTitleClass">Cloud computing</h5>
                <p class="cloudparaClass">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                     Sed turpis condimentum consectetur placerat lobortis <br/>
                     nibh sed consequat. Nunc pharetra cras vitae consequat<br/>
                     facilisis phasellus. Habitant egestas id tellus sed urna<br/>
                     ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.
                </p>
                <button class="cloudButton">read more</button>

            </div>

        </div>


        {/* ********FOOTER PAGE********** */}

        <div class="footerMainDiv uk-align-center">
            <img src={footerellipseImage1} alt="" class="footerellipseImageOne"/>
            <img src={footerellipseImage2} alt="" class="footerellipseImageTwo"/>
            <img src={footerellipseImage3} alt="" class="footerellipseImageThree"/>
            <img src={footerellipseImage4} alt="" class="footerellipseImageFour"/>
            <img src={footerellipseImage5} alt="" class="footerellipseImageFive"/>

            <p class="ipseClass">Lorenza Ipse</p>
            <img src={locationImage} alt="" class="locationImage"/>
            <span class="locationClass">Location</span>
            <img src={mailImage} alt="" class="mailImage"/>
            <span class="mailClass">type@mymail.com</span>
            <img src={phoneImage} alt="" class="phoneImage"/>
            <span class="phoneClass">+91 968656665</span>

            <p class="serviceClass">Services</p>
            <p class="connectionClass">Connections</p>
            <p class="contactClass">Contacts</p>
            <p class="popularClass">Popular</p>

            <p class="socialClass">Follow us on</p>
            <img src={linkImage} alt="" class="linkImage"/>
            <img src={faceImage} alt="" class="faceImage"/>
            <img src={twitImage} alt="" class="twitImage"/>

        </div>
       

            </div>
            
            {/* ********SMALL WIDTH VIEW******* */}
            <HomeMobile/>

        </div>
    )
}

export default LandingPage
