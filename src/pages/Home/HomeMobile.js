import React from 'react'
import './MobileView.css'
import rectImage1 from '../../asset/Rectangle 11.png'
import rectImage2 from '../../asset/Rectangle 12.png'
import rectImage3 from '../../asset/Rectangle 13.png'
import ellipseImage1 from '../../asset/Ellipse 2.png'
import ellipseImage2 from '../../asset/Vector 11.png'
import ellipseImage3 from '../../asset/Ellipse 3.png'
import ellipseImage4 from '../../asset/Ellipse 4.png'
import ellipseImage5 from '../../asset/Line 11.png'
import heroImage from '../../asset/Hero Image.png'
import mobileartImage from '../../asset/image 6.png'
import mobilemachineImage from '../../asset/image 9.png'
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


function HomeMobile() {
    return (
        <div>

            <div class="mobileParentDiv uk-hidden@s">

                {/* ****** LANDING PAGE ******** */}
                
                <div class='mobileLandingPage uk-width-medium uk-align-center' >
                    
                    <nav class="mobilenavbarClass uk-navbar uk-width-1-1" uk-navbar="true">
                        <div class="uk-navbar-left">
                            <ul class="uk-navbar-nav" >
                                <li><img src={rectImage1} alt="" class="mobilerectImageOne"/></li>
                                <li><img src={rectImage2} alt="" class="mobilerectImageTwo"/></li>
                                <li><img src={rectImage3} alt="" class="mobilerectImageThree"/></li>
                                <li><img src={ellipseImage1} alt="" class="mobileellipseImageOne"/></li>
                                <li><img src={ellipseImage2} alt="" class="mobileellipseImageTwo"/></li>
                                <li><img src={ellipseImage3} alt="" class="mobileellipseImageThree"/></li>
                                <li><img src={ellipseImage4} alt="" class="mobileellipseImageFour"/></li>
                                <li><img src={ellipseImage5} alt="" class="mobileellipseImageFive"/></li>
                            </ul>
                        </div>
                        <div class="uk-navbar-right">
                            <p><a href="#" class="mobileExploreclass uk-active" style={{color:'black'}}>Help</a></p>
                        </div>
                    </nav>

                    <h3 class="mobilemainheadingClass">Lets Stay Connected</h3>
                    <p class="mobilelandpageparaClass">At lorem ipsum we help <br/>connect  people with each <br/>other without any worries</p>
                    <img src={heroImage} alt="" class="mobileheroImageClass"/>

                    <button class="mobilelearnmoreButton">Learn More</button>
                    <button class="mobileconnectButton">Connect</button>

                </div>


            {/* ******* FORM PAGE ******** */}
            
            <div class="mobileformMaindiv uk-align-center">
                <div class='mobileformPage uk-width-medium uk-align-center' >
                    <h3 class="mobileformTitle">Fill out the form</h3>
                    <form>
                    <div class="uk-margin">
                        <label class="mobilenameLabelClass">Name of the applicant</label>
                        <input class="mobileNameClass uk-input uk-width-expand" type="text" placeholder="Enter Name" disabled/>

                        <label class="mobileoccupationLabelClass">Occupation</label>
                        <input class="mobileoccupationClass uk-input uk-width-expand" type="text" placeholder="Enter Occupation" disabled/>

                        <label class="mobileaddressLabelClass">Address</label>
                        <input class="mobileaddressClass uk-input uk-width-expand" type="text" placeholder="Enter Address" disabled/>

                        <button class="mobilesubmitButton">Submit</button>
                    </div>
                </form>
                </div>

            </div>


            {/* ****** DOMAIN EXPERTICE PAGE********* */}

            <div class="mobiledomainMainDiv uk-align-center">
                <p class="mobileyellowlineClass"></p>
                <h3 class="mobiledomainMainTitle">Domain Expertise</h3>
                   
                    <img src={mobileartImage} alt="" class="mobileartImageClass"/>
                    <h3 class="mobileartTitleClass">Artificial Intelligence</h3>
                    <p class="mobileartparaClass">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit.Sed turpis condimentum <br/>
                        consectetur placerat lobortis nibh sed<br/> 
                        consequat. Nunc pharetra cras vitae <br/> 
                        consequat facilisis phasellus. Habitant<br/> 
                        egestas id tellus sed urna ultricies<br/> 
                        ullamcorper. Sed fusce elit nec, in <br/>commodo, ac.
                    </p>
                    <button class="mobileartButton">read more</button>

                    <img src={machineImage2} alt="" class="mobilemachineImageClass2"/>
                    <h5 class="mobilemachineTitleClass2">Machine Learning</h5>
                    <p class="mobilemachineparaClass2">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit.Sed turpis condimentum <br/>
                        consectetur placerat lobortis nibh sed<br/> 
                        consequat. Nunc pharetra cras vitae <br/> 
                        consequat facilisis phasellus. Habitant<br/> 
                        egestas id tellus sed urna ultricies<br/> 
                        ullamcorper. Sed fusce elit nec, in <br/>commodo, ac.
                    </p>
                    <button class="mobilemachineButton2">read more</button>

                    <img src={mobilemachineImage} alt="" class="mobilemachineImageClass"/>
                    <h3 class="mobilemachineTitleClass">Machine Learning</h3>
                    <p class="mobilemachineparaClass">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit.Sed turpis condimentum <br/>
                        consectetur placerat lobortis nibh sed<br/> 
                        consequat. Nunc pharetra cras vitae <br/> 
                        consequat facilisis phasellus. Habitant<br/> 
                        egestas id tellus sed urna ultricies<br/> 
                        ullamcorper. Sed fusce elit nec, in <br/>commodo, ac.
                    </p>
                    <button class="mobilemachineButton">read more</button>

                    <img src={cloudImage2} alt="" class="mobilecloudImageClass2"/>
                    <h5 class="mobilecloudTitleClass">Cloud computing</h5>
                    <p class="mobilecloudparaClass">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit.Sed turpis condimentum <br/>
                        consectetur placerat lobortis nibh sed<br/> 
                        consequat. Nunc pharetra cras vitae <br/> 
                        consequat facilisis phasellus. Habitant<br/> 
                        egestas id tellus sed urna ultricies<br/> 
                        ullamcorper. Sed fusce elit nec, in <br/>commodo, ac.

                    </p>
                    <button class="mobilecloudButton">read more</button>
                
            </div>


             {/* ********FOOTER PAGE********** */}

            <div class="mobilefooterMainDiv uk-align-center">

                <img src={footerellipseImage1} alt="" class="mobilefooterellipseImageOne"/>
                <img src={footerellipseImage2} alt="" class="mobilefooterellipseImageTwo"/>
                <img src={footerellipseImage3} alt="" class="mobilefooterellipseImageThree"/>
                <img src={footerellipseImage4} alt="" class="mobilefooterellipseImageFour"/>
                <img src={footerellipseImage5} alt="" class="mobilefooterellipseImageFive"/>

                <p class="mobileipseClass">Lorenza Ipse</p>
                <img src={locationImage} alt="" class="mobilelocationImage"/>
                <span class="mobilelocationClass">Location</span>
                <img src={mailImage} alt="" class="mobilemailImage"/>
                <span class="mobilemailClass">type@mymail.com</span>
                <img src={phoneImage} alt="" class="mobilephoneImage"/>
                <span class="mobilephoneClass">+91 968656665</span>

                <p class="mobileserviceClass">Services</p>
                <p class="mobileconnectionClass">Connections</p>
                <p class="mobilecontactClass">Contacts</p>
                <p class="mobilepopularClass">Popular</p>

                <p class="mobilesocialClass">Follow us on</p>
                <img src={linkImage} alt="" class="mobilelinkImage"/>
                <img src={faceImage} alt="" class="mobilefaceImage"/>
                <img src={twitImage} alt="" class="mobiletwitImage"/>

            </div>



            </div>
            
        </div>
    )
}

export default HomeMobile
