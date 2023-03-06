import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import Img15 from '../Image/img15.svg'
import Img16 from '../Image/img16.svg'
import Img17 from '../Image/img17.svg'
import Img18 from '../Image/img18.svg'
import Img19 from '../Image/img19.svg'
import Img20 from '../Image/img20.svg'
import Img21 from '../Image/img21.svg'
import Img22 from '../Image/img22.svg'
import Img23 from '../Image/img23.svg'
import Img24 from '../Image/img24.svg'
import Img25 from '../Image/img25.svg'
import Img26 from '../Image/img26.svg'
import Img27 from '../Image/img27a.png'
import Img28 from '../Image/img28.png'
import Img29 from '../Image/img29.png'
import Img30 from '../Image/img30.png'
import Img31 from '../Image/img31.png'
import Img32 from '../Image/img32.png'
import Img33 from '../Image/img33.png'
import Img34 from '../Image/img34.png'
import Img35 from '../Image/img29.png'
import Img36 from '../Image/img30.png'


function Comc() {
    const [imgLink, setImgLink] = useState("");
    return (
        <div style={{ backgroundColor: "#f5f4f4" }}>
            <div className="container-fluid" >
                <div className="container"><br /><br /><br /><br /><br />
                    <div className='text-center'>

                        <h1 style={{ fontSize: "50px" }}>What's a CDE?</h1><br />
                        <h4 style={{ color: "#787674" }}>CDEs are high-powered, automated development environments in the cloud. They are perfectly configured for each task enabling instant onboarding and collaboration.</h4><br />
                        <a href='#' style={{ fontSize: "20px", fontWeight: "800", backgroundColor: 'rgb(236,231,229)' }}><Badge style={{ height: "30px" }} bg="light" text="dark">
                            Learn more about CDEs </Badge>{' '}</a>



                    </div><br /><br />
                    <div onmouseenter={() => { }} className='side-with'>

                        <ul className='Un-od' style={{ display: "flex" }}>
                            <li id={Img27} onMouseEnter={(e) => { setImgLink(e.target.id); }}><a href=""><img src={Img15} alt="" /></a></li>
                            <li  ><a href=""><img id={Img28} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img16} alt="" /></a></li>
                            <li ><a href=""><img id={Img29} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img17} alt="" /></a></li>
                            <li ><a href=""><img id={Img30} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img18} alt="" /></a></li>
                            <li ><a href=""><img id={Img32} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img19} alt="" /></a></li>
                            <li ><a href=""><img id={Img33} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img20} alt="" /></a></li>
                            <li ><a href=""><img id={Img34} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img21} alt="" /></a></li>

                            <li ><a href=""><img id={Img35} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img23} alt="" /> </a></li>
                            <li ><a href=""><img id={Img36} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img24} alt="" /></a></li>
                            <li ><a href=""><img id={Img28} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img25} alt="" /></a></li>
                            <li ><a href=""><img id={Img29} onMouseOver={(e) => { setImgLink(e.target.id) }} src={Img26} alt="" /></a></li>
                        </ul><br />
                        <div className='img27 text-center'>
                            <img style={{ width: "50%", height: "50%" }} src={imgLink !== "" ? imgLink : Img29} alt="" />
                        </div>





                    </div>
                </div>

            </div>

        </div>
    )
}

export default Comc
