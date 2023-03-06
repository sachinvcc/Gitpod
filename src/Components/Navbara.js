import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

import Img1 from '../Image/gitpod_logo.png'


function Navbara() {
  // const state=useSelector((state)=>state.handleCard)
  const [visibleFlag, setVisibleFlag] = useState("");
  
  return (
    <div className='back-color1 fix'>
      <nav class="navbar navbar-expand-lg  py-3  ">
        <div class="container-fluid img-1">
          <img src={Img1} alt="" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a className='text-der-1' href='#'>CDE</a>
              </li>
              <li class="nav-item ">
                <a id="Docs" onMouseOver={() => { setVisibleFlag("Docs") }} className='text-der-1' href=''>Docs</a>

              </li>
              <li class="nav-item">
                <a onMouseOver={() => { setVisibleFlag("Resources") }} className='text-der-1' href='#'>Resources</a>


              </li>




              <li class="nav-item">
                <a className='text-der-1' href='#'>Enterprise</a>

              </li>
              <li class="nav-item">
                <a className='text-der-1' href='#'>Customers</a>

              </li>
              <li class="nav-item">
                <a className='text-der-1' href='#'>Pricing</a>

              </li>

              {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
            </ul>
            <div className="buttons ">
              <a href="https://github.com/gitpod-io/gitpod" className=" btn-outline-dark text-der ">
                <i class="fa fa-github icon-1 fa-lg" aria-hidden="true" ></i> 10.2k </a>
              <a href="" className="btn btn-dark ms-2 ">
                Dashboard </a>

            </div>
          </div>
        </div>
      </nav>
      <div className='gap-2 conatainer'>
        <div name="Docs" onMouseLeave={() => { setVisibleFlag("") }} className={visibleFlag !== "Docs" ? "container back-color1 dropdown-content" : "container back-color1 dropdown-content-hover"}><br />
          <div className="row">
            <div className="col-4">
              <div className="col-row">
                <div className="col-12">
                  <div class="card ">
                    <div class="card-body back-color1">
                      <h6>Docs</h6>
                      <p className='text-der-2'>Access Gitpod's documentation</p>
                    </div>

                  </div>
                </div><br /><br />
                <div className="col-12">
                  <div class="card ">
                    <div class="card-body back-color1">
                      <h6>Get started</h6>
                      <p className='text-der-2'>Guide to start your first workspace</p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Help center</h6>
                  <p className='text-der-2'>View status, get help or contact support</p>
                </div>
              </div>

            </div>
            <div className="col-4">
              <h4>Templates</h4>
              <a className='text-der' href=""><p>JavaScript</p></a>
              <a className='text-der' href=""><p>Python</p></a>
              <a className='text-der' href=""><p>java</p></a>
              <a className='text-der' href=""><p>Go</p></a>
              <a className='text-der' href=""><p>Rust</p></a>
            </div>
          </div>
        </div>

      </div>
      <div>
      <div style={{width:"80%",margin:"0 auto"}}>
        <div name="Resourses" onMouseLeave={() => { setVisibleFlag("") }} className={visibleFlag !== "Resources" ? "container back-color1 dropdown-content-1" : "container back-color1 dropdown-content-1-hover"}><br />
       
          <div className="row">
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Changelog</h6>
                  <p className='text-der-2'>Latest updates and feature releases</p>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Guides</h6>
                  <p className='text-der-2'>How to use Gitpod with any project</p>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Community</h6>
                  <p className='text-der-2'>Connect with like-minded people</p>
                </div>
              </div><br />

            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Blog</h6>
                  <p className='text-der-2'>Articles, news and opinions</p>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Screencasts</h6>
                  <p className='text-der-2'>Short videos to get started</p>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body back-color1">
                  <h6>Events</h6>
                  <p className='text-der-2'>Upcoming events and event recordings</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>

      </div>
    </div>





  )
}

export default Navbara
