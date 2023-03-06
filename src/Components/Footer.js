import React from 'react'
import Img49 from '../Image/img49.png'
import Img50 from '../Image/img50.svg'
import Img51 from '../Image/img51.svg'
import Img52 from '../Image/img52.svg'
import Img53 from '../Image/img53.svg'

function Footer() {
    return (
        <div style={{ backgroundColor: "#f9f9f9" }}>
            <div >
                <div className="container">
                    <div className="row" style={{ paddingTop: "100px" }}>
                        <div className="col-md-2"> <a href="" style={{ textDecoration: "none" }}>
                            <p className='pp-color'>Gitpod</p>
                            <div className='pp-color-2'>
                                <p> Getting started</p>
                                <p>CDE</p>
                                <p>Pricing</p>
                                <p> Customers</p>
                                <p> Support</p>
                                <p> Report a bug</p>
                                <p>Status</p>
                            </div>

                        </a> </div>
                        <div className="col-md-2"> <a href="" style={{ textDecoration: "none" }}>
                            <p className='pp-color'>Resources</p>
                            <div className='pp-color-2'> <p>Documentation</p>
                                <p>Community</p>
                                <p>Blog</p>
                                <p>Changelog</p>
                                <p> Screencasts</p>
                                <p> Guides</p>
                                <p>Events</p></div>


                        </a></div>

                        <div className="col-md-2"><a href="" style={{ textDecoration: "none" }}>
                            <p className='pp-color'>Use Cases</p>
                            <div className='pp-color-2'>
                                <p>Startups</p>
                                <p>Open Source</p>
                                <p>Enterprises</p>
                                <p>Education</p>
                            </div>


                        </a></div>
                        <div className="col-md-2"><a href="" style={{ textDecoration: "none" }}>
                            <p className='pp-color'>Compare</p>
                            <div className='pp-color-2'>
                                <p>Local Development</p>
                                <p>GitHub Codespaces</p>
                                <p>JetBrains Space</p>

                            </div>



                        </a></div>
                        <div className="col-md-2"><a href="" style={{ textDecoration: "none" }}>
                            <p className='pp-color'>Company</p>
                            <div className='pp-color-2'> <p>About</p>
                                <p>Team</p>
                                <p>Careers</p>
                                <p>Contact</p>
                                <p>Media kit</p>
                                <p>Security</p>
                            </div>

                        </a></div>
                        <div className="col-md-2"><a href="" style={{ textDecoration: "none" }}>
                            <p className='pp-color'>Legal</p>
                            <div className='pp-color-2'>
                                <p>Imprint</p>
                                <p>Terms of service</p>
                                <p>Privacy policy</p>
                                <p>Cookie policy</p>
                                <p> Cookie preferences</p>

                            </div>


                        </a></div>
                    </div><hr /><br />
                    <div className='row'>
                       <div className="col-6">
                       <div style={{ width: "230px", borderStyle: "dashed", borderColor: "#e2e2e2", borderRadius: "10px", height: "80px" }} >
                            <div className="row">
                                <div className="col-4" style={{ marginTop: "10px" }}>
                                    <img src={Img49} alt="" />

                                </div>
                                <div className="col-8" style={{ marginTop: "10px" }}>
                                    SOC 2 Type II <br /> Certified
                                </div>
                            </div>


                        </div>

                       </div>
                       <div className="col-6">
                       <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4"><div >
                            <div className="row">
                                <div className="col-3">
                                    <img style={{width:"100%",height:"100%"}} src={Img50} alt="" />

                                </div>
                                <div className="col-3">
                                <img style={{width:"100%",height:"100%"}} src={Img51} alt="" />

                                </div>
                                <div className="col-3">
                                <img style={{width:"100%",height:"100%"}} src={Img52} alt="" />

                                </div>
                                <div className="col-3">
                                <img style={{width:"100%",height:"100%"}} src={Img53} alt="" />

                                </div>
                            </div>

                        </div></div>
                       </div>

                       </div>
                        
                    </div>
                    <div><br />
                        <p style={{ color: " #b5b4b3" }}>Copyright © 2023 Gitpod</p>
                    </div>
                    

                </div>
            </div>

        </div >
    )
}

export default Footer
