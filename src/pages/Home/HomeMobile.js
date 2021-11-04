import React from 'react'
import './Home.css'
import rectangleimage from '../../asset/Rectangle 11.png'
import rectangleimage2 from '../../asset/Rectangle 12.png'
import rectangleimage3 from '../../asset/Rectangle 13.png'
import ellipseImage from '../../asset/Ellipse 2.png'
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
        <>
         <div class="uk-hidden@s "  style={{background:'lavender',width:'102%'}}>
            
            
             {/* LANDING PAGE */}
                <div class="uk-container">
                        <div className="mobilelandingPage" style={{background:'white',marginTop:'16%',width:'111%',marginLeft:'-5%'}}>
                                <nav class="mobilenavbarClass uk-navbar-container uk-margin" uk-navbar="mode: click" style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '21px 32px',position: 'absolute',width: '302px',height: '10px',left: '0px',top: '0px',background: '#AFB3BE'}}>
                                        <div class="uk-navbar-left" >

                                        <ul class="uk-navbar-nav" >
                                            <img src={rectangleimage} alt="" class="rectImage "></img>
                                            <img src={rectangleimage2} alt="" class="rectImage2 "></img>
                                            <img src={rectangleimage3} alt="" class="rectImage3 "></img>
                                            <img src={ellipseImage} alt="" class="ellipseImage "></img>
                                            <li><a href="#" style={{textTransform:'capitalize',color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'static',width: '125px',height: '22px',left: '310px',top: '14px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '120%',marginLeft:'206px',marginTop:'-4%',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0'}}>Help</a></li>
                                        
                                        </ul>

                                        </div>
                                </nav>
                                <div class="uk-column-1-2">
                                        <h2 className="mobileconnectedClass" >Let's Stay<br/>Connected</h2>                                       
                                        <p class="paraClass1">At lorem ipsum we help <br/>connect people with each <br/>other without any worries </p>                                                                     
                                        <img src={firstimage} alt="" class="mobilefirstImage " ></img>
                                        <button class="uk-button uk-button-default"  style={{textTransform:'capitalize',color:'red',font:'Work Sans',position: 'static',width: '136px',height: '42px',left: '15px',top: '10px',fontFamily: 'Work Sans',fontSize: '15px',lineHeight: '120%',flex: 'none',order: '1',flexGrow: '0',borderColor:'red',marginTop:'368%',marginLeft:'27%'}}>Learn More</button>
                                        <button class="uk-button uk-button-danger" style={{textTransform:'capitalize',color:'white',font:'Work Sans',position: 'static',width: '118px',height: '42px',left: '162px',top: '10px',fontFamily: 'Work Sans',fontSize: '15px',lineHeight: '120%',flex: 'none',order: '1',flexGrow: '0',borderColor:'red',marginTop:'-43%',marginLeft:'126%',padding: '10px 15px'}}>Connect</button>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                                </div>
                            
                        </div>
                </div>

                {/* FORM PAGE */}

                <div style={{background: '#E6E6E6',width:'89%',marginLeft:'5.5%',marginTop:'17%'}}>
                <div class="uk-container">
                    <div class="mobileformPage" style={{background:'white',width:'101%',marginLeft:'0%',marginTop:'56%',marginBottom:'8%',borderRadius:'2%'}}>
                        <h3 class="mobileformTitle" style={{color:'black',position: 'static',width: '171px',height: '28px',left: '24px',top: '24px',fontWeight:'500',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '81px',marginLeft: '8%'}}>Fill out the form</h3><br/><br/>
                        <form>
                            <label class="mobilenameLabel" style={{color:'black',position: 'static',width: '197px',height: '21px',left: '0px',top: '0px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '43px',marginLeft: '8%'}}>Name of the applicant</label>
                            <input class="mobileapplicantName" type="text" placeholder="Enter Name" style={{marginLeft:'8%',width:'77%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input>
                            <label class="mobileoccupationLabel" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '49px',marginLeft: '8%'}}>Occupation</label><br/>
                            <input class="mobileapplicantOccupation" type="text" placeholder="Enter Occupation" style={{marginLeft:'8%',width:'77%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <label class="mobileaddressLabel" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '49px',marginLeft: '8%'}}>Address</label><br/>
                            <input class="mobileapplicantAddress" type="text" placeholder="Enter Address" style={{marginLeft:'8%',width:'77%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <button class="uk-button uk-button-primary" style={{borderRadius:'8px',marginLeft:'8%',marginTop:'3%',display:'flex',justifyContent:'center',alignItems:'center',width:'87px',height:'41px',textTransform:'capitalize'}}>Submit</button>
                        </form>
                        <br/><br/><br/>

                    </div>
                   
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
            


            {/* DOMAIN EXPERTICE PAGE */}

            <div class="uk-container">
                    <div className="mobiledomainPage " style={{background:'white',width:'111%',marginLeft:'-5%',marginTop:'8%',marginBottom:'8%'}}>
                        
                        <h3 className="mobiledomainTitle" style={{color:'black',position: 'static',width: '312px',height: '43px',left: '24px',top: '85px',fontFamily: 'Work Sans',fontSize: '36px',lineHeight: '525%',marginLeft: '6%'}}>Domain Expertice</h3>
                        <p style={{border:'2px solid #FCB705',width:'71%',marginLeft:'6%'}}></p>
                        <div></div>
                        
                            <img src={secondimage} alt="" class="mobilesecondImage "  style={{position: 'absolute',width: '250px',height: '250px',left: '25px',top: '1844px'}}></img>
                            <h3 class="mobileartificialClass" style={{marginTop:'97%',marginLeft: '7.3%'}}>Artificial Intelligence</h3>
                            <p class="mobileartparaClass" style={{marginLeft:'7.2%',marginTop:'2%'}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>

                            <img src={fourthimage} alt="" class="mobileFourthImage "></img>
                            <h3 class="mobileartificialClass" style={{marginTop:'11%',marginLeft: '6.9%',lineHeight:'12%'}}>Machine Learning</h3>
                            <p class="mobileartparaClass" style={{marginLeft:'6.9%',marginTop:'-3%'}}>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase',marginLeft:'7.3%'}}>read more</button>
                            
                            <img src={thirdimage} alt="" class="mobilethirdImage "></img>
                            <h3 class="mobileartificialClass" style={{marginTop:'11%',marginLeft: '7.1%',lineHeight:'12%'}}>Machine Learning</h3>
                            <p class="mobileartparaClass" style={{marginLeft:'6.9%',marginTop:'-3%'}}>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase',marginLeft:'7.3%'}}>read more</button>

                           

                            <img src={fifthimage} alt="" class="mobileFifthImage "></img>
                            <h3 class="mobileartificialClass" style={{marginTop:'11%',marginLeft: '7.1%',lineHeight:'12%'}}>Cloud computing</h3>
                            <p class="mobileartparaClass" style={{marginLeft:'6.9%',marginTop:'-3%'}}>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Sed turpis condimentum<br/> consectetur placerat lobortis nibh sed<br/> consequat. Nunc pharetra cras vitae<br/> consequat facilisis phasellus. Habitant<br/> egestas id tellus sed urna ultricies<br/> ullamcorper. Sed fusce elit nec, in<br/> commodo, ac.</p>
                            <button class="mobilereadButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase',marginLeft:'7.3%'}}>read more</button>
                        
                        
                        <br/><br/><br/>

                    </div>
                </div>


                {/* FOOTER SECTION */}
                <footer>
            <div  class="uk-container">
                <div className="footerPage " style={{background:'#AFB3BE',width:'110%',marginLeft:'-5%',marginTop:'35%',marginBottom:'8%'}}>
                    
                        <img src={sixthimage} alt="" class="mobilesixthImage "></img>
                        
                        <p class="mobileipseClass">Lorenza Ipse </p><br/>
                        <img src={seventhimage} alt="" class="mobileseventhImage " style={{marginLeft:'9%',marginTop:'-23%'}}></img>
                        <p class="mobilelocationClass uk-text-middle" style={{marginLeft:'17%',marginTop:'-17%'}}>Location</p><br/>
                        <img src={mailimage} alt="" class="mobilemailImage " style={{marginLeft:'0%',marginTop:'-9%'}}></img>
                        <p class="mobilelocationClass uk-text-middle" style={{marginLeft:'17%',marginTop:'-10%'}}>type@mymail.com</p><br/>
                        <img src={phoneimage} alt="" class="mobilephoneImage " style={{marginLeft:'9%',marginTop:'-18%'}}></img>
                        <p class="mobilephoneClass uk-text-middle" style={{marginLeft:'17%',marginTop:'-15%'}}>+91 968656665</p><br/>
                        
                        <p class="mobileipseClass" style={{marginLeft:'7%',marginTop:'2%'}}>Services </p><br/>
                        <p class="mobileconnectionClass" style={{marginLeft:'7%',marginTop:'-10%'}}>Connections</p>
                        <p class="mobileconnectionClass" style={{marginLeft:'7%',marginTop:'-3%'}}>Contacts</p>
                        <p class="mobileconnectionClass" style={{marginLeft:'7%',marginTop:'-3%'}}>Popular</p>
                        
                        
                        <p class="mobileipseClass">Follow us on </p><br/>   
                        <img src={linkimage} alt="" class="mobileLinkImage "></img>
                        <img src={faceimage} alt="" class="mobileFaceImage "></img>
                        <img src={twitimage} alt="" class="mobileTwitImage "></img>
                        <br/><br/>
                   
                </div>
            </div>
        </footer>
            
    </div>
            
     </>
    )
}

export default HomeMobile
