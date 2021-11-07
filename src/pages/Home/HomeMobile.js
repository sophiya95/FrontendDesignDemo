import React from 'react'
import './LandingPage.css'
import rectangleimage from '../../asset/Rectangle 11.png'
import rectangleimage2 from '../../asset/Rectangle 12.png'
import rectangleimage3 from '../../asset/Rectangle 13.png'
import ellipseImage from '../../asset/Ellipse 2.png'
import circletwoimage from '../../asset/Vector 11.png'
import circlethreeimage from '../../asset/Ellipseee.png'
import circlefourimage from '../../asset/Ellipse 2.png'
import circlefiveimage from '../../asset/Line 11.png'
import firstimage from '../../asset/Hero Image.png'
import secondimage from '../../asset/image 6.png'
import thirdimage from '../../asset/image 9.png'
import fourthimage from '../../asset/image 7.png'
import fifthimage from '../../asset/image 11.png'
import sixthimage from '../../asset/Ellipse 2.png'
import seventhimage from '../../asset/Vector.png'
import mailimage from '../../asset/Vector 1.png'
import phoneimage from '../../asset/Vector 2.png'
import linkimage from '../../asset/Vector 3.png'
import faceimage from '../../asset/Vector 4.png'
import twitimage from '../../asset/Vector 5.png'

function HomeMobile() {
    return (
        <div>
         <div class="uk-hidden@s "  style={{background:'lavender',width:'111%',position:'relative'}}>
            
            
             {/* LANDING PAGE */}
                <div class="uk-container">
                        <div className="mobilelandingPage" style={{background:'white',width:'110%',position:'relative',minHeight:'770px',top:'0px',left:'-15px'}}>
                                <nav class="mobilenavbarClass uk-navbar-container uk-margin" uk-navbar="mode: click" style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '21px 32px',position: 'absolute',width: '333px',height: '31px',left: '0px',top: '0px',background: '#AFB3BE'}}>
                                        <div class="uk-navbar-left" >

                                        <ul class="uk-navbar-nav" >
                                            <img src={rectangleimage} alt="" class="rectImage "></img>
                                            <img src={rectangleimage2} alt="" class="rectImage2 "></img>
                                            <img src={rectangleimage3} alt="" class="rectImage3 "></img>
                                            <img src={ellipseImage} alt="" class="ellipseImage "></img>
                                            <img src={circletwoimage} alt="" class="mobilecircleImage "></img>
                                            <img src={circlethreeimage} alt="" class="mobilecirclethreeImage "></img>
                                            <img src={circlefourimage} alt="" class="mobilecirclefourImage "></img>
                                            <img src={circlefiveimage} alt="" class="mobilecirclefiveImage "></img>
                                            <li><a href="#" style={{textTransform:'capitalize',color:'black',font:'Work Sans',size:'18px',position: 'absolute',width: '41px',height: '22px',left: '13px',top: '-8px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '120%',margin:'0px 274px',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0'}}>Help</a></li>
                                        
                                        </ul>

                                        </div>
                                </nav>
                                <div class="uk-column-1-2">
                                        <h2 className="mobileconnectedClass" >Let's Stay<br/>Connected</h2>                                       
                                        <p class="paraClass1">At lorem ipsum we help <br/>connect people with each <br/>other without any worries </p>                                                                     
                                        <img src={firstimage} alt="" class="mobilefirstImage " ></img>
                                        <button class="mobilelearnButton uk-button uk-button-default"  >Learn More</button>
                                        <button class="mobileconnectButton uk-button uk-button-danger">Connect</button>
                                      

                                </div>
                            
                        </div>
                </div>

                {/* FORM PAGE */}

                <div style={{background: '#E6E6E6',width:'89%',position:'relative',top:'18px',left:'22px',height:'812px'}}>
                <div class="uk-container">
                    <div class="mobileformPage" style={{background:'white',display:'flex',flexDirection:'column',alignItems:'flex-start',padding:'24px',position:'absolute',width:'269px',height:'423px',left:'21px',top:'181px',borderRadius:'8px'}}>
                        <h3 class="mobileformTitle" style={{color:'black',position: 'absolute',width: '171px',height: '28px',left: '24px',top: '1px',fontWeight:'500',fontFamily: 'Roboto',fontSize: '24px',fontStyle:'normal',lineHeight: '28px',margin: '24px 0px',flex:'none'}}>Fill out the form</h3><br/><br/>
                        <form>
                            <label class="mobilenameLabel" style={{color:'black',position: 'static',width: '197px',height: '21px',left: '0px',top: '0px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '21px',margin: '12px 0px 12px 6px'}}>Name of the applicant</label>
                            <input class="mobileapplicantName" type="text" placeholder="Enter Name" style={{position:'absolute',left:'29px',top:'105px',width:'75%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input>
                            <label class="mobileoccupationLabel" style={{color:'black',position: 'absolute',width: '101px',height: '21px',left: '10px',top: '150px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '21px',margin: '12px 0px 12px 23px'}}>Occupation</label><br/>
                            <input class="mobileapplicantOccupation" type="text" placeholder="Enter Occupation" style={{position:'absolute',left:'33px',top:'192px',width:'75%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <label class="mobileaddressLabel" style={{color:'black',position: 'absolute',width: '71px',height: '21px',left: '37px',top: '252px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '21px',flex:'none'}}>Address</label><br/>
                            <input class="mobileapplicantAddress" type="text" placeholder="Enter Address" style={{position:'absolute',top:'282px',left:'36px',width:'75%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <button class="mobileSubmitButton uk-button uk-button-primary" style={{position:'absolute',borderRadius:'8px',left:'38px',top:'347px',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:'10px 15px',width:'87px',height:'41px',textTransform:'capitalize'}}>Submit</button>
                        </form>
                       

                    </div>
                   
                </div>
               
            </div>
            


            {/* DOMAIN EXPERTICE PAGE */}

            <div class="uk-container">
                    <div class="mobiledomainPage " style={{background:'white',minHeight:'3000px',width:'111%',position:'relative',top:'190px',left:'-15px'}}>
                        
                        <h3 class="mobiledomainTitle" style={{color:'black',position: 'absolute',width: '312px',height: '43px',left: '2px',top: '10px',fontFamily: 'Work Sans',fontSize: '36px',lineHeight: '525%',marginLeft: '6%'}}>Domain Expertice</h3>
                        <p style={{border:'2px solid #FCB705',width:'261px',height:'0px',position:'absolute',left:'24px',top:'56px'}}></p>
                        <div></div>
                        
                            <img src={secondimage} alt="" class="mobilesecondImage "  style={{position: 'absolute',width: '250px',height: '250px',left: '27px',top: '171px'}}></img>
                            <h3 class="mobileartificialClass">Artificial Intelligence</h3>
                            <p class="mobileartparaClass" >Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>

                            <img src={fourthimage} alt="" class="mobileFourthImage "></img>
                            <h3 class="mobilemachineClass">Machine Learning</h3>
                            <p class="mobilemachineparaClass">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtontwo uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>
                            
                            <img src={thirdimage} alt="" class="mobilethirdImage "></img>
                            <h3 class="mobilemachinelearningClass">Machine Learning</h3>
                            <p class="mobilemachinelearningparaClass">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonthree uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>

                           

                            <img src={fifthimage} alt="" class="mobileFifthImage "></img>
                            <h3 class="mobileCloudClass">Cloud computing</h3>
                            <p class="mobileCloudparaClass">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonfour uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>
                        
                        
                        <br/><br/><br/>

                    </div>
                </div>


                {/* FOOTER SECTION */}
                <footer>
            <div  class="uk-container">
                <div class="footerPage " style={{background:'#AFB3BE',position:'relative',width:'110%',marginLeft:'-5%',marginTop:'55%',marginBottom:'8%',minHeight:'629px'}}>
                    
                        <img src={sixthimage} alt="" class="mobilesixthImage "></img>
                        <img src={circletwoimage} alt="" class="mobileEllipse2 "></img>
                        <img src={circlethreeimage} alt="" class="mobileEllipse3 "></img>
                        <img src={circlefourimage} alt="" class="mobileEllipse4 "></img>
                        <img src={circlefiveimage} alt="" class="mobileEllipse5 "></img>
                        
                        <p class="mobileipseClass">Lorenza Ipse </p><br/>
                        <img src={seventhimage} alt="" class="mobileseventhImage "></img>
                        <p class="mobilelocationClass uk-text-middle" >Location</p>
                        <img src={mailimage} alt="" class="mobilemailImage " ></img>
                        <p class="mobileMailClass uk-text-middle" >type@mymail.com</p>
                        <img src={phoneimage} alt="" class="mobilephoneImage "></img>
                        <p class="mobilephoneClass uk-text-middle">+91 968656665</p>
                        
                        <p class="mobileServiceClass">Services </p>
                        <p class="mobileconnectionClass">Connections</p>
                        <p class="mobilecontactClass">Contacts</p>
                        <p class="mobilepopularClass">Popular</p>
                        
                        
                        <p class="mobileFollowClass">Follow us on </p>  
                        <img src={linkimage} alt="" class="mobileLinkImage "></img>
                        <img src={faceimage} alt="" class="mobileFaceImage "></img>
                        <img src={twitimage} alt="" class="mobileTwitImage "></img>
                        <br/><br/>
                   
                </div>
            </div>
        </footer>
            
    </div>
            
     </div>
    )
}

export default HomeMobile
