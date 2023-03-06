import React from 'react'
import Img2 from '../Image/img1.png'

function Coma() {
  return (
    <div>
      <div className="container-fluid back-color1">
        <div className="container">
          <div style={{height:"200px"}}></div>
          <div className="row">
            <div className="col-md-6"><br /><br />
              
              <h1 className='fw-bold font-size'>Always <br /> ready to code.</h1>
              <h3 clssName='text-der-2'>Ship software faster with secure cloud
                development environments that just work.</h3>
              <div><br />
                <button className='btn-0' >Start for free</button> <button className='gap' >Start for free</button>

              </div>



            </div>
            <div className="col-md-6 back-img-2">
              <img src={Img2} alt="" />

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Coma;
