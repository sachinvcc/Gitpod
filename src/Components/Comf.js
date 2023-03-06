import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img5 from "../Image/imd.png"
import Img6 from "../Image/img6.png"
import Img7 from "../Image/img7.png"
import Img8 from "../Image/img8.png"


function Comf() {
    return (
        <div style={{ backgroundColor: "#f5f4f4" }}>
            <div className='text-center'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1 >Gitpod makes teams productive</h1>
                <p className='border-bottom' style={{ color: "#abaaa8", fontSize: "30px" }}>Learn <span style={{ color: "#abaaa8" }}>how Factorial develops software with Gitpod.</span> </p>
            </div><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Card style={{ width: '20rem', backgroundColor: "#f9f9f9", height: "350px", borderRadius: "20px" }}>
                            <div className="row">
                                <div className="col-3">
                                    <img style={{ width: "280px" }} src={Img5} alt="" />
                                    {/* <Card.Img variant="top" style={{widtha:"100%",height:"100%"}} src={Img5} /> */}
                                </div>
                            </div>

                            <Card.Body>
                                <Card.Title>Onboard faster</Card.Title>
                                <p style={{ fontSize: "18px", color: "#676563" }} >Give your developers full control over what device they use, wherever they are in the world.</p>
                                <p style={{ fontSize: "18px", color: "#676563" }}>Gitpod creates an identical developer experience for everyone, on every machine.

                                </p>


                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '20rem', backgroundColor: "#f9f9f9", height: "350px", borderRadius: "20px" }}>
                            <img style={{ width: "280px" }} src={Img6} alt="" />
                            <Card.Body>
                                <Card.Title>Onboard faster</Card.Title>
                                <p style={{ fontSize: "18px", color: "#676563" }} >Remove your team’s local machines as an attack vector in your software supply chain.
                                </p>
                                <p style={{ fontSize: "18px", color: "#676563" }}>Gitpod helps you retain control over your resources and protect your company source code from malicious attacks</p>


                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '20rem', backgroundColor: "#f9f9f9", height: "350px", borderRadius: "20px" }}>
                            <img style={{ width: "215px" }} src={Img7} alt="" />
                            <Card.Body>
                                <Card.Title>Onboard faster</Card.Title>
                                <p style={{ fontSize: "18px", color: "#676563" }} >Get new hires or contractors to commit their first PR on day 1 without shipping a company laptop.</p>
                                <p style={{ fontSize: "18px", color: "#676563" }}>Gitpod reduces complexity by providing a plug & play experience for software development.</p>


                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '20rem', backgroundColor: "#f9f9f9", height: "350px", borderRadius: "20px" }}>
                            <img style={{ width: "215px" }} src={Img8} alt="" />
                            <Card.Body>
                                <Card.Title>Onboard faster</Card.Title>
                                <p style={{ fontSize: "18px", color: "#676563" }} >Enable faster collaboration across all team members, in realtime.</p>
                                <p style={{ fontSize: "18px", color: "#676563" }}>With Gitpod, teams can work on several workspaces in parallel and share them in seconds.

                                </p>


                            </Card.Body>
                        </Card>

                    </div>
                </div><br /><br /><br />
                <div className='text-center'>
                    <h4 style={{ color: "#72716e" }}>Want to see a custom demo or get help finding the right solution?</h4><br /><br />
                    <button style={{ backgroundColor: "#ece7e5", width: "120px", borderRadius: "5px", borderColor: "#ece7e5" }}>Contact sales</button>
                </div>
            </div>

        </div>
    )
}

export default Comf
