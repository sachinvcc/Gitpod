import React from 'react'
import Img11 from '../Image/img11.png'
import Img12 from '../Image/img12.png'
import Img13 from "../Image/img13.png"

function Come() {
    return (
        <div>
            <div className="container-fluid " style={{ backgroundColor: "#f5f4f4" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ width: "100%", height: '100%', marginTop: "100px" }} className="col-md-12" src={Img11} alt="" />




                        </div>
                        <div className="col-md-6"><br /><br /><br /><br /><br /><br /><br /><br />
                            <h2>Reduce developer toil</h2><br />
                            <p style={{ fontSize: "24px", color: "#787674" }}>Cut the number of support requests in half and decrease the time spent on them to mere minutes.</p><br />
                            <p style={{ fontSize: "25px", color: "-#8e8c8b" }}>
                                Platform engineering teams enable developer self-service by configuring environments once and letting Gitpod take care of the rest.</p>


                        </div>
                        <div className="col-md-7" style={{ marginTop: "200px" }}>
                            <h2>Collaborate with ease</h2><br />
                            <p style={{ fontSize: "24px", color: "#787674" }}>Engineers, designers, product managers. With Gitpod, anyone on the team can run code with ease. Yes, your CTO as well 🫶</p><br />
                            <p style={{ fontSize: "25px", color: "#787674" }}>

                                Share running workspaces for pair programming, use port forwarding or share a snapshot of your CDE.</p>

                        </div>
                        <div className=" col-md-5" style={{ marginTop: "200px" }}>
                            <img style={{ width: "100%", height: '300px' }} src={Img12} alt="" />

                        </div>
                        <div className='row' style={{ marginTop: "200px" }} >


                            <div className="col-md-6">
                                <img src={Img13} style={{ width: "100%", height: '600px' }} alt="" />


                            </div>
                            <div className="col-md-6" style={{ marginTop: "170px" }} >
                                <h2>Work at datacenter performance</h2><br />
                                <p style={{ fontSize: "24px", color: "#787674" }}>Downloads all your tools and packages at datacenter internet and networking speed.</p><br />
                                <p style={{ fontSize: "25px", color: "#787674" }}>
                                    Prebuilds speed you up by building your branches in the background and large workspaces give you the power for heavy-lifting tasks. Meanwhile, your laptop battery lasts.</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Come
