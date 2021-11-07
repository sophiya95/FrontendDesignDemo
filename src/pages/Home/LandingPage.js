import React from 'react'
import './LandingPage.css'
import circleoneimage from '../../asset/Ellipse 2.png'
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
import HomeMobile from './HomeMobile'




function Home() {
    return (
        <>
        {/* Landing page */}
           <div  style={{background:'lavender',height:'4000px'}} class=" uk-visible@s uk-visible@m " >
           <div class="uk-container">
               <div className="landingPage" style={{background:'white',marginTop:'10%',minHeight:'745px',position:'relative'}}>
                         <nav class="navbarClass uk-navbar-container uk-margin" uk-navbar="mode: click" style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '21px 32px',position: 'absolute',width: '1136px',height: '10px',left: '0px',top: '0px',background: '#AFB3BE'}}>
                                <div class="uk-navbar-left" >

                                <ul class="uk-navbar-nav" >
                                    <img src={circleoneimage} alt="" class="circleoneImage "></img>
                                    <img src={circletwoimage} alt="" class="circletwoImage "></img>
                                    <img src={circlethreeimage} alt="" class="circlethreeImage "></img>
                                    <img src={circlefourimage} alt="" class="circlefourImage "></img>
                                    <img src={circlefiveimage} alt="" class="circlefiveImage "></img>
                                    <li><a href="#"  class="exploreClass" style={{position: 'static',width: '77px',height: '29px',left: '137px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',color: '#000000',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0',margin: '0px 308px',textTransform:'capitalize'}}>Explore</a></li>
                                    <li><a href="#" class="createClass" style={{position: 'static',width: '77px',height: '29px',left: '137px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',color: '#000000',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0',margin: '0px -236px',textTransform:'capitalize'}}>Create</a></li>
                                    <li><a href="#" class="connectClass" style={{position: 'static',width: '77px',height: '29px',left: '137px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',color: '#000000',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0',margin: '0px -93px',textTransform:'capitalize'}}>Connect</a></li>
                                    <li><a href="#" class="helpClass" style={{position: 'static',width: '77px',height: '29px',left: '137px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',color: '#000000',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0',marginLeft: '436%',textTransform:'capitalize'}}>Help</a></li>
                                
                                 </ul>

                                </div>
                          </nav>
                          <div class="uk-column-1-2">
                                <h2 class="connectedClass" style={{color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'absolute',width: '449px',height: '172px',left: '69px',top: '141px',fontFamily: 'Work Sans',fontSize: '72px',lineHeight: '120%',blend:'pass-through'}}>Let's Stay<br/>Connected</h2>
                               <div style={{color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'absolute',width: '414px',height: '87px',left: '80px',top: '330px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',opacity:'0.85'}}>
                                    <p>At lorem ipsum we help connect<br/> people with each other without<br/> any worries </p>
                                </div> 
                             
                                <img src={firstimage} alt="" class="firstImage "  style={{position: 'absolute',width: '658px',height: '360px',left: '513px',top: '140px'}}></img>
                                <button class="uk-button uk-button-default"  style={{textTransform:'capitalize',color:'red',font:'Work Sans',position: 'absolute',width: '163px',height: '49px',left: '81px',top: '458px',fontFamily: 'Work Sans',fontSize: '17px',lineHeight: '120%',flex: 'none',order: '1',flexGrow: '0',borderColor:'red'}}>Learn More</button>
                                <button class="uk-button uk-button-danger" style={{textTransform:'capitalize',color:'white',font:'Work Sans',position: 'absolute',width: '129px',height: '49px',left: '274px',top: '459px',fontFamily: 'Work Sans',fontSize: '17px',lineHeight: '120%',flex: 'none',order: '1',flexGrow: '0',borderColor:'red'}}>Connect</button>
                                

                          </div>
                          


               </div>
            </div>
           

        {/* Form Page */}
           
            <div style={{background: '#E6E6E6',width:'89%',position:'relative',left:'6%',top:'181px',minHeight:'800px'}}>
                
                    <div class="formPage" style={{background:'white',position:'absolute',width:'466px',height:'490px',left:'319px',top:'101px',display:'flex',flexDirection:'column',alignItems:'flex-start',padding:'40px 32px',borderRadius:'8px'}}>
                        <h3 class="formTitle" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '36px',lineHeight: '42px',margin: '21px 0px'}}>Fill out the form</h3><br/><br/>
                        <form>
                            <label class="nameLabel" style={{color:'black',position: 'relative',width: '197px',height: '21px',left: '15px',top: '-46px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '21px',margin: '16px 0px'}}>Name of the applicant</label>
                            <input class="applicantName" type="text" placeholder="Enter Name" style={{width:'82%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white',position:'relative',top:'-27px',left:'16px'}} disabled></input>
                            <label class="occupationLabel" style={{color:'black',position: 'relative',width: '101px',height: '21px',left: '16px',top: '-22px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '54px'}}>Occupation</label><br/>
                            <input class="applicantOccupation" type="text" placeholder="Enter Occupation" style={{width:'82%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white',position:'relative',left:'18px',top:'-18px'}} disabled></input><br/>
                            <label class="addressLabel" style={{color:'black',position: 'relative',width: '71px',height: '21px',left: '18px',top: '-13px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '54px'}}>Address</label><br/>
                            <input class="applicantAddress" type="text" placeholder="Enter Address" style={{position:'relative',top:'-10px',left:'18px',width:'82%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <button class="submitButton uk-button uk-button-primary" style={{borderRadius:'8px',position:'static',left:'29px',top:'409px',order:'flow',marginLeft:'18px',marginTop:'14px',display:'flex',justifyContent:'center',alignItems:'center',width:'87px',height:'41px',textTransform:'capitalize',flexDirection:'row',padding:'10px 15px'}}>Submit</button>
                        </form>
                        <br/><br/><br/>

                    </div>
                   
                
            </div>

  <br/><br/> <br/><br/> 
   {/* Domain Expertice */}
          
                <div class="uk-container">
                    <div class="domainPage " style={{background:'white',width:'1201px',position:'relative',left:'6px',top:'288px',height:'1511px'}}>
                        
                        <h3 class="domainTitle" style={{color:'black',position: 'absolute',width: '415px',height: '58px',left: '73px',top: '-18px',fontFamily: 'Work Sans',fontSize: '48px',lineHeight: '525%'}}>Domain Expertice</h3>
                        <p style={{border:'2px solid #FCB705',width:'348px',position:'absolute',left:'72px',top:'49px',height:'0px'}}></p>
                        <div></div>
                        <div class="uk-column-1-2">
                            <img src={secondimage} alt="" class="secondImage "  style={{position: 'static',width: '250px',height: '250px',left: '0px',top: '0px',margin:'209px 73px'}}></img>
                            <h3 class="artificialClass">Artificial Intelligence</h3>
                            <p class="artparaClass">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat<br/> facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>
                            
                            <img src={thirdimage} alt="" class="thirdImage "></img>
                            <h3 class="machineClass" >Machine Learning</h3>
                            <p class="machineparaClass" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat <br/>facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtontwo uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>

                            <img src={fourthimage} alt="" class="FourthImage "></img>
                            <h3 class="machinelearningClass" >Machine Learning</h3>
                            <p class="machinelearningparaClass" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat <br/>facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonthree uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>

                            <img src={fifthimage} alt="" class="FifthImage "></img>
                            <h3 class="cloudClass" >Cloud computing</h3>
                            <p class="cloudparaClass" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat <br/>facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonfour uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>
                        </div>
                        
                      

                    </div>
                </div>
            




{/* FOOTER SECTION */}
        <footer>
            <div  class="uk-container">
                <div className="footerPage " style={{background:'#AFB3BE',height:'176px',width:'100%',position:'relative',left:'7px',top:'444px'}}>
                    <div class="uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l">
                        <img src={circleoneimage} alt="" class="circleImageOne "></img>
                        <img src={circletwoimage} alt="" class="circleImageTwo "></img>
                        <img src={circlethreeimage} alt="" class="circleImageThree "></img>
                        <img src={circlefourimage} alt="" class="circleImageFour "></img>
                        <img src={circlefiveimage} alt="" class="circleImageFive "></img>
                        
                        <p class="ipseClass">Lorenza Ipse </p><br/>
                        <p class="serviceClass">Services </p><br/>
                        <p class="followClass">Follow us on </p><br/>
                    </div>
                    <div class="firstcolumnClass uk-column-1-3">
                        <img src={seventhimage} alt="" class="seventhImage "></img>
                        <p class="locationClass uk-text-middle">Location</p><br/>
                        <p class="connectionClass">Connections</p>
                        <img src={linkimage} alt="" class="LinkImage "></img>
                        <img src={faceimage} alt="" class="FaceImage "></img>
                        <img src={twitimage} alt="" class="TwitImage "></img>

                        <img src={mailimage} alt="" class="mailImage "></img>
                        <p class="mailClass uk-text-middle">type@mymail.com</p><br/>

                        <img src={phoneimage} alt="" class="phoneImage "></img>
                        <p class="phoneClass uk-text-middle">+91 968656665</p><br/>

                        <p class="contactClass">Contacts</p>
                        <p class="popularClass">Popular</p>

                    </div>
                   
                </div>

            </div>
        </footer>





           </div>

           {/* HOME RESPONSIVE PAGE */}
                 <HomeMobile/>
        </>
    )
}

export default Home
