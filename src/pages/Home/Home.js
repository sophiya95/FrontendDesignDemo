import React from 'react'
import './Home.css'
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
           <div  style={{background:'lavender'}} class=" uk-visible@s uk-visible@m " >
           <div class="uk-container">
               <div className="landingPage" style={{background:'white',marginTop:'10%'}}>
                         <nav class="navbarClass uk-navbar-container uk-margin" uk-navbar="mode: click" style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',padding: '21px 32px',position: 'absolute',width: '1136px',height: '10px',left: '75px',top: '120px',background: '#AFB3BE'}}>
                                <div class="uk-navbar-left" >

                                <ul class="uk-navbar-nav" >
                                    <li class="exploreClass"><a href="#"  style={{textTransform:'capitalize',color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'static',width: '77px',height: '29px',left: '0px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',marginLeft:'323px',flex: 'none',order: '1',flexGrow: '0',opacity: '0.85'}}>Explore</a></li>
                                    <li><a href="#" className="firstlinkClass" style={{textTransform:'capitalize',color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'static',width: '77px',height: '29px',left: '137px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',marginLeft:'32px',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0'}}>Create</a></li>
                                    <li><a href="#" style={{textTransform:'capitalize',color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'static',width: '77px',height: '29px',left: '262px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',marginLeft:'44px',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0'}}>Connect</a></li>
                                    <li><a href="#" style={{textTransform:'capitalize',color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'static',width: '77px',height: '29px',left: '262px',top: '0px',fontFamily: 'Work Sans',fontSize: '24px',lineHeight: '120%',marginLeft:'402px',opacity: '0.85',flex: 'none',order: '1',flexGrow: '0'}}>Help</a></li>
                                
                                 </ul>

                                </div>
                          </nav>
                          <div class="uk-column-1-2">
                                <h2 className="connectedClass" style={{color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'absolute',width: '449px',height: '172px',left: '148px',top: '233px',fontFamily: 'Work Sans',fontSize: '54px',lineHeight: '120%',blend:'pass-through'}}>Let's Stay<br/>Connected</h2>
                               <div style={{color:'black',font:'Work Sans',size:'24px',lineHeight:'28.8px',position: 'absolute',width: '414px',height: '87px',left: '152px',top: '377px',fontFamily: 'Work Sans',fontSize: '19px',lineHeight: '120%',opacity:'0.85'}}>
                                    <p>At lorem ipsum we help connect<br/> people with each other without<br/> any worries </p>
                                </div> 
                             
                                <img src={firstimage} alt="" class="firstImage "  style={{position: 'absolute',width: '575px',height: '281px',left: '586px',top: '255px'}}></img>
                                <button class="uk-button uk-button-default"  style={{textTransform:'capitalize',color:'red',font:'Work Sans',position: 'static',width: '148px',height: '41px',left: '15px',top: '10px',fontFamily: 'Work Sans',fontSize: '17px',lineHeight: '120%',flex: 'none',order: '1',flexGrow: '0',borderColor:'red',marginTop:'66%',marginLeft:'13%'}}>Learn More</button>
                                <button class="uk-button uk-button-danger" style={{textTransform:'capitalize',color:'white',font:'Work Sans',position: 'static',width: '148px',height: '41px',left: '15px',top: '10px',fontFamily: 'Work Sans',fontSize: '17px',lineHeight: '120%',flex: 'none',order: '1',flexGrow: '0',borderColor:'red',marginTop:'66%',marginLeft:'4%'}}>Connect</button>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                          </div>
                          


               </div>
            </div>
           

        {/* Form Page */}
           
            <div style={{background: '#E6E6E6',width:'89%',marginLeft:'5.5%',marginTop:'17%'}}>
                <div class="uk-container">
                    <div className="formPage" style={{background:'white',width:'50%',marginLeft:'25%',marginTop:'8%',marginBottom:'8%',borderRadius:'2%'}}>
                        <h3 className="formTitle" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '36px',lineHeight: '107px',marginLeft: '8%'}}>Fill out the form</h3><br/><br/>
                        <form>
                            <label className="nameLabel" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '51px',marginLeft: '8%'}}>Name of the applicant</label>
                            <input className="applicantName" type="text" placeholder="Enter Name" style={{marginLeft:'8%',width:'82%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input>
                            <label className="occupationLabel" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '54px',marginLeft: '8%'}}>Occupation</label><br/>
                            <input className="applicantOccupation" type="text" placeholder="Enter Occupation" style={{marginLeft:'8%',width:'82%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <label className="addressLabel" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '18px',lineHeight: '54px',marginLeft: '8%'}}>Address</label><br/>
                            <input className="applicantAddress" type="text" placeholder="Enter Address" style={{marginLeft:'8%',width:'82%',padding:'12px',border:'1px solid #ccc',borderRadius:'4px',resize:'vertical',background:'white'}} disabled></input><br/>
                            <button class="uk-button uk-button-primary" style={{borderRadius:'8px',marginLeft:'8%',marginTop:'3%',display:'flex',justifyContent:'center',alignItems:'center',width:'87px',height:'41px',textTransform:'capitalize'}}>Submit</button>
                        </form>
                        <br/><br/><br/>

                    </div>
                   
                </div>
            </div>

  <br/><br/> <br/><br/> 
   {/* Domain Expertice */}
          
                <div class="uk-container">
                    <div className="domainPage " style={{background:'white',width:'99%',marginLeft:'1%',marginTop:'8%',marginBottom:'8%'}}>
                        
                        <h3 className="domainTitle" style={{color:'black',position: 'static',width: '290px',height: '42px',left: '32px',top: '40px',fontFamily: 'Work Sans',fontSize: '36px',lineHeight: '525%',marginLeft: '6%'}}>Domain Expertice</h3>
                        <p style={{border:'2px solid #FCB705',width:'22%',marginLeft:'6%'}}></p>
                        <div></div>
                        <div class="uk-column-1-2">
                            <img src={secondimage} alt="" class="secondImage "  style={{position: 'absolute',width: '250px',height: '250px',left: '158px',top: '2003px'}}></img>
                            <h3 class="artificialClass" style={{marginTop:'61%',marginLeft: '13.3%'}}>Artificial Intelligence</h3>
                            <p class="artparaClass" style={{marginLeft:'13.2%',marginTop:'8%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat<br/> facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>
                            
                            <img src={thirdimage} alt="" class="thirdImage "></img>
                            <h3 class="artificialClass" style={{marginTop:'65%',marginLeft: '13.3%',lineHeight:'12%'}}>Machine Learning</h3>
                            <p class="machineparaClass" style={{marginLeft:'13.2%',marginTop:'-4%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat <br/>facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase'}}>read more</button>

                            <img src={fourthimage} alt="" class="FourthImage "></img>
                            <h3 class="artificialClass" style={{marginTop:'11%',marginLeft: '11.3%',lineHeight:'12%'}}>Machine Learning</h3>
                            <p class="machineparaClass" style={{marginLeft:'11.2%',marginTop:'-3%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat <br/>facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase',marginLeft:'12.3%'}}>read more</button>

                            <img src={fifthimage} alt="" class="FifthImage "></img>
                            <h3 class="artificialClass" style={{marginTop:'11%',marginLeft: '12.3%',lineHeight:'12%'}}>Cloud computing</h3>
                            <p class="machineparaClass" style={{marginLeft:'13.2%',marginTop:'-5%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed turpis condimentum consectetur placerat lobortis<br/> nibh sed consequat. Nunc pharetra cras vitae consequat <br/>facilisis phasellus. Habitant egestas id tellus sed urna<br/> ultricies ullamcorper. Sed fusce elit nec, in commodo, ac.</p>
                            <button class="readButtonone uk-button uk-button-secondary" style={{textTransform:'lowercase',marginLeft:'13.3%',marginTop:'9.5%'}}>read more</button>
                        </div>
                        
                        <br/><br/><br/>

                    </div>
                </div>
            {/* </div> */}




{/* FOOTER SECTION */}
        <footer>
            <div  class="uk-container">
                <div className="footerPage " style={{background:'#AFB3BE',width:'99%',marginLeft:'1%',marginTop:'8%',marginBottom:'8%'}}>
                    <div class="uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l">
                        <img src={sixthimage} alt="" class="sixthImage "></img>
                        <p class="ipseClass">Lorenza Ipse </p><br/>
                        <p class="ipseClass">Services </p><br/>
                        <p class="ipseClass">Follow us on </p><br/>
                    </div>
                    <div class="firstcolumnClass uk-column-1-3">
                        <img src={seventhimage} alt="" class="seventhImage " style={{marginLeft:'83%',marginTop:'-14%'}}></img>
                        <p class="locationClass uk-text-middle">Location</p><br/>
                        <p class="connectionClass">Connections</p>
                        <img src={linkimage} alt="" class="LinkImage "></img>
                        <img src={faceimage} alt="" class="FaceImage "></img>
                        <img src={twitimage} alt="" class="TwitImage "></img>

                        <img src={mailimage} alt="" class="mailImage " style={{marginLeft:'82.5%',marginTop:'-43%'}}></img>
                        <p class="mailClass uk-text-middle">type@mymail.com</p><br/>

                        <img src={phoneimage} alt="" class="phoneImage " style={{marginLeft:'-28%',marginTop:'-9%'}}></img>
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
