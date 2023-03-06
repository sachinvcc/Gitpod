import React from 'react'
import Button from 'react-bootstrap/Button';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import Img43 from '../Image/img43.png'
import Img44 from '../Image/img44.png'
import Img45 from '../Image/img45.png'
import Img46 from '../Image/img46.png'
import Img47 from '../Image/img47.png'
import Img48 from '../Image/img45.png'


function Comi() {
    // const [btn,setBtn]=useState("")
    return (
        <div className='back-color1'>
            <div className="container">
                <div className="text-center" style={{ paddingTop: "200px" }}>
                    <h1 style={{ fontSize: "55px" }}>Get started for free</h1>
                </div>

                <div className="row" style={{ marginTop: "150px" }}>
                    <div className="col-md-6 text-center box-1"><br /><br />
                        <h1>Get started with any project</h1>
                        <h5 style={{ color: "#bebdbc" }}>Select a Git provider to start with an existing <br /> project from any Git context.</h5><br /><br />

                        <button className='btn-color-1'><i class="fa fa-gitlab fa-2 i-con" aria-hidden="true"></i>Continue with GitLab</button><br /><br />
                        <button className='btn-color-2'><i class="fa fa-github i-con" aria-hidden="true"></i>Continue with GitHub</button><br /><br />
                        <button className='btn-color-3'><i class="fa fa-bitbucket-square i-con" aria-hidden="true"></i>Continue with Bitbucket</button> <br /><br />

                        <p style={{ marginTop: "50px" }}>Or prefix any GitLab, GitHub or Bitbucket URL with</p>
                        <p className='pp-1'>gitpod.io/#</p><br />

                    </div>
                    <div className="col-md-1">



                    </div>
                    <div className="col-md-5 box-2 text-center" style={{ paddingLeft: "2px" }}> <br /><br />

                        <h2>Get started with any project</h2>
                        <h5 style={{ color: "#bebdbc" }}>Dive into one of our example workspaces</h5><br /><br />

                        <div>
                            <div style={{ textAlign: "center" }} >
                                <div className='btn-3' >
                                    <ButtonGroup aria-label="Basic example" style={{ width: "400px" }}>
                                        <Button variant="" >
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{ width: "100%", height: "100%" }} src={Img44} alt="" />

                                                </div>
                                                <div className="col-10">
                                                    Node or TypeScript
                                                </div>
                                            </div>
                                        </Button>

                                        <Button variant="" style={{ width: "200px" }}><p className='ppp-2'><Badge pill bg="dark">
                                            Lanch workspace
                                        </Badge></p> </Button>
                                    </ButtonGroup>

                                </div>
                                <div className='btn-3'>
                                    <ButtonGroup aria-label="Basic example" style={{ width: "400px" }}>
                                        <Button variant="" >
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{ width: "100%", height: "100%" }} src={Img43} alt="" />

                                                </div>
                                                <div className="col-10">
                                                    Phython
                                                </div>
                                            </div>
                                        </Button>

                                        <Button variant="" style={{ width: "200px" }}><p className='ppp-2'><Badge pill bg="dark">
                                            Lanch workspace
                                        </Badge></p> </Button>
                                    </ButtonGroup>

                                </div>
                                <div className='btn-3'>
                                    <ButtonGroup aria-label="Basic example" style={{ width: "400px" }}>
                                        <Button variant="" >
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{ width: "100%", height: "100%" }} src={Img45} alt="" />

                                                </div>
                                                <div className="col-10">
                                                    Java
                                                </div>
                                            </div>
                                        </Button>

                                        <Button variant="" style={{ width: "200px" }}><p className='ppp-2'><Badge pill bg="dark">
                                            Lanch workspace
                                        </Badge></p> </Button>
                                    </ButtonGroup>

                                </div>
                                <div className='btn-3'>
                                    <ButtonGroup aria-label="Basic example" style={{ width: "400px" }}>
                                        <Button variant="" >
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{ width: "100%", height: "100%" }} src={Img46} alt="" />

                                                </div>
                                                <div className="col-10">
                                                    Golang
                                                </div>
                                            </div>
                                        </Button>
                                        <Button variant="" style={{ width: "200px" }}><p className='ppp-2'><Badge pill bg="dark">
                                            Lanch workspace
                                        </Badge></p> </Button>
                                    </ButtonGroup>

                                </div>
                                <div className='btn-3'>
                                    <ButtonGroup aria-label="Basic example" style={{ width: "400px" }}>
                                        <Button variant="" >
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{ width: "100%", height: "100%" }} src={Img47} alt="" />

                                                </div>
                                                <div className="col-10">
                                                    Rust
                                                </div>
                                            </div>
                                        </Button>

                                        <Button variant="" style={{ width: "200px" }}><p className='ppp-2'><Badge pill bg="dark">
                                            Lanch workspace
                                        </Badge></p> </Button>
                                    </ButtonGroup>

                                </div>
                                <div className='btn-3'>
                                    <ButtonGroup aria-label="Basic example" style={{ width: "400px" }}>
                                        <Button variant="" >
                                            <div className="row">
                                                <div className="col-2">
                                                    <img style={{ width: "100%", height: "100%" }} src={Img48} alt="" />

                                                </div>
                                                <div className="col-10">
                                                    svelte
                                                </div>
                                            </div>
                                        </Button>
                                        <Button variant="" style={{ width: "200px" }}><p className='ppp-2'><Badge pill bg="dark">
                                            Lanch workspace
                                        </Badge></p> </Button>
                                    </ButtonGroup>

                                </div><br /><br />
                                <div>
                                    <p> View all example workspaces</p> <hr style={{ width: "60%", margin: "0 auto" }} />
                                </div>





                            </div>

                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comi
