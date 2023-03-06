import React from 'react'
import Img42 from '../Image/img42.png'
import Button from 'react-bootstrap/Button';

function Comh() {
  return (
    <div style={{ backgroundColor: "#f5f4f4" }}>
      <div className='site-with' style={{ paddingTop: "150px" }}>
        <img style={{ width: "100%", height: "100%" }} src={Img42} alt="" />
        <h3 className='text-center'>Backed by a strong community</h3><br />
        <h5 style={{ color: "#444444", textAlign: "center" }}>
          Join 6k+ members on our thriving Discord server to learn,<br />
          collaborate, and connect with Gitpod developers.</h5><br />
        <div className='text-center'>
          <Button variant="warning">Meet our community
            Get st</Button>
        </div>

      </div>

    </div>
  )
}

export default Comh
