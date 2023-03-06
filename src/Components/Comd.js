import React from 'react'
import Img3 from '../Image/img3.png'
import Img4 from '../Image/img4.png'
import Img10 from '../Image/img10.png'
import Img14 from '../Image/img14.png'

function Comd() {
    return (
        <div>
            <div className="container-fluid " style={{ backgroundColor: "#f5f4f4" }}>
                <div className="container"><br /><br /><br /><br /><br /><br />
                    <div className='text-center'>
                        <h1 style={{ fontSize: "50px" }}>
                            Select project,
                        </h1>
                        <h1 style={{ color: "#999795", fontStyle: "-moz-initial", textDecoration: "line-through" }} >
                            check dependencies, checkout branch, view <br />  readme.txt, install tools, run build, run test,<br />
                        </h1>
                        <h1>
                            start coding.
                        </h1>
                    </div><br /><br /><br /><br />
                    <div className="row">
                        <div className="col-md-6"><br /><br /><br /><br /><br />
                            <h2>Works on <span style={{ color: "#999795", textDecoration: "line-through" }}>m</span>y any machine</h2><br />
                            <p style={{ color: "#868483", fontSize: "22px" }}>Say goodbye to compatibility issues and configuration drift. Create a joyful developer experience on any machine.</p><br />
                            <p style={{ color: "#868483", fontSize: "22px" }}>With a single click, spin up a fresh development environment in a container in the cloud.</p>

                        </div>
                        <div className="col-md-6">
                            <img style={{ height: "100%", width: "100%" }} src={Img3} alt="" />

                        </div>
                    </div><br /><br /><br /><br /><br /><br />
                    <div className="row">
                        <div className="col-md-7">
                            <img src={Img10} style={{ width: "100%", height: '100%' }} alt="" />

                        </div>
                        <div className="col-md-5"> <br /><br /><br /><br /><br /><br />
                            <h2>Secure your software supply chain</h2><br />
                            <p style={{ fontSize: "20px", color: "-#8e8c8b" }}>CDEs are ephemeral, short-lived, and isolated from other work. With Gitpod, there’s no need to download any code to your machine.</p><br />
                            <p style={{ fontSize: "20px", color: "-#8e8c8b" }}>Gitpod builds artefacts from a central place enabling you to fix vulnerabilities instantly across your team.</p>


                        </div><br /><br /><br /><br /><br />


                        <div className='box' style={{ backgroundColor: "#f9f9f9", borderRadius: "18px" }}>
                            <div className="row">
                                <div className="col-12"><br />
                                    <h3 style={{ marginLeft: "50px" }}>Integrate, don't dictate</h3>
                                    <h3 style={{ marginLeft: "50px", color: "#8e8c8b" }}>Control every detail of your developer experience.</h3>
                                </div>
                                <div className="col-md-12">


                                    <img style={{ width: "100%", height: "100%" }} src={Img14} alt="" />
                                </div>
                            </div>



                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Comd
